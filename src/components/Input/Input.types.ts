import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    onChange: ChangeEventHandler
}