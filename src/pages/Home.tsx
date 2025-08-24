import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import StreamPlayer from "@/components/StreamPlayer";
import type { WatchRequestResponse } from "@/types/Responses";

export default function Home() {
    const { serverURL } = useContext(AppContext);
    const [viewerToken, setViewerToken] = useState(localStorage.getItem("viewerToken"));
    const [tokenVersion, setTokenVersion] = useState<number>(0);

    useEffect(() => {
        async function requestWatchAccess() {
            if (viewerToken)
                return;

            const response = await fetch(`${serverURL}/api/auth/request-watch-access`, { 
                headers: { 
                    "ngrok-skip-browser-warning": "true",
                },
                credentials: "include",
            })
            const data: WatchRequestResponse = await response.json();
            localStorage.setItem("viewerToken", data.viewerToken);
            setViewerToken(data.viewerToken);
        }

        requestWatchAccess();
        // Don't add viewerToken to dep array since we only want to refetch token in specific scenarios
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewerToken, tokenVersion]);

    const handleInvalidToken = useCallback(() => {
        localStorage.removeItem("viewerToken");
        setViewerToken(null);
        setTokenVersion(v => v + 1);
    }, []);
    
    return ( <StreamPlayer serverURL={serverURL} viewerToken={viewerToken!} handleInvalidToken={handleInvalidToken} /> )
}