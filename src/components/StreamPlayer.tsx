import { useEffect, useRef } from "react";
import blank_vid from "../assets/blank_vid.mp4";
import { Room, RoomEvent } from "livekit-client";

interface StreamPlayerProps {
    serverURL: string;
    viewerToken: string;
    handleInvalidToken: () => void;
}

export default function StreamPlayer({ viewerToken, handleInvalidToken}: StreamPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        async function SubscribeToStream() {
            if (!videoRef.current) 
                return;
    
            try {
                const room = new Room();
                room.on(RoomEvent.TrackSubscribed, async (track) => {
                    videoRef.current!.pause();
                    videoRef.current!.srcObject = track.attach().srcObject;
                    await videoRef.current!.play();
                })
                room.on(RoomEvent.TrackUnsubscribed, () => {
                    videoRef.current!.srcObject = null;
                })
                await room.connect(process.env.VITE_LIVEKIT_HOST_URL!, viewerToken);
            } catch (err) {
                console.error(err);
                handleInvalidToken();
            }
        }

        SubscribeToStream();
    }, [viewerToken, handleInvalidToken]);

    return (
        <video className="h-full w-auto" ref={videoRef} controls autoPlay>
            <source src={blank_vid} />
        </video>
    )
}