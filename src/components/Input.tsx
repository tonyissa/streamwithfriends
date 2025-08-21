import { ChangeEvent } from "react"

interface InputProps {
    placeholder: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string;
}

export default function Input({ placeholder, handleChange, value }: InputProps) {
    return (
        <input
            className="w-full h-full input text-center bg-darkGrey rounded-2xl transition-all text-shadow"
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
        />
    );
}