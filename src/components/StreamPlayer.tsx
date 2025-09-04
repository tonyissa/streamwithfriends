import { useEffect, useRef } from "react";
import blank_vid from "../assets/blank_vid.mp4";
import { Room, RoomEvent } from "livekit-client";

interface StreamPlayerProps {
    viewerToken: string;
}

export default function StreamPlayer({ viewerToken }: StreamPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        async function SubscribeToStream() {
            if (!videoRef.current || !viewerToken) 
                return;
            
            try {
                const room = new Room();
                console.log("New room created");
                room.on(RoomEvent.TrackSubscribed, async (track) => {
                    track.attach(videoRef.current!);
                    console.log("Track subscribed");
                });
                room.on(RoomEvent.TrackUnsubscribed, () => {
                    videoRef.current!.srcObject = null;
                    console.log("Track unsubscribed, clearing stream...");
                });
                console.log("Connecting to the server...");
                await room.connect(import.meta.env.VITE_LIVEKIT_HOST_URL, viewerToken);
                console.log("Server connection established");
            } catch (err) {
                console.error(err);
            }
        }

        SubscribeToStream();
    }, [viewerToken]);

    return (
        <div className="video-shadow max-w-[1280px]">
            <video className="h-full" ref={videoRef} autoPlay controls>
                <source src={blank_vid} />
            </video>
        </div>
    )
}