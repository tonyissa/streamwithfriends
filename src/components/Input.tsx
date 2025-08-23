import { ChangeEvent } from "react"

interface InputProps {
    placeholder: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string;
    password?: boolean;
}

export default function Input({ placeholder, handleChange, value, password = false }: InputProps) {
    return (
        <input
            className="w-full h-full input text-center bg-darkGrey rounded-2xl transition-all text-shadow px-2"
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
            type={password ? "password" : "text"}
        />
    );
}