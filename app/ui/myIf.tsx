'use client'
import { ReactNode } from "react";

export default function myIf({
    showWhen,
    children
}:
    {
        showWhen: boolean;
        children: ReactNode;
    }) {
    return (
        <>
            {showWhen && (<>{children}</>)}
        </>




    )
}