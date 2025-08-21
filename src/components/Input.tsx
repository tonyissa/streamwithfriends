import { ChangeEvent } from "react"

interface InputProps {
    placeholder: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    input: string;
}

export default function Input({ placeholder, handleChange, input }: InputProps) {
    return (
        <input
            className="w-full h-full input text-center bg-darkGrey rounded-2xl transition-all text-shadow"
            onChange={handleChange}
            value={input}
            placeholder={placeholder}
        />
    )
}