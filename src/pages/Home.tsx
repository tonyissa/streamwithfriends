import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import StreamPlayer from "@/components/StreamPlayer";
import type { WatchRequestResponse } from "@/types/Responses";

export default function Home() {
    const { serverURL } = useContext(AppContext);
    const [viewerToken, setViewerToken] = useState("");

    useEffect(() => {
        async function requestWatchAccess() {
            if (viewerToken)
                return;

            const response = await fetch(`${serverURL}/api/auth/request-watch-access`, { 
                headers: { 
                    "ngrok-skip-browser-warning": "true",
                },
                credentials: "include",
            });
            const data: WatchRequestResponse = await response.json();
            setViewerToken(data.viewerToken);
        }

        requestWatchAccess();
    }, [serverURL, viewerToken]);
    
    return ( <StreamPlayer viewerToken={viewerToken} /> )
}