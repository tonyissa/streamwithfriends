import placeholder_vid from "../assets/blank_vid.mp4";

export default function Home() {
    return (
        <video className="w-[1300px]" controls autoPlay>
            <source src={placeholder_vid} type="video/mp4" />
        </video>
    )
}