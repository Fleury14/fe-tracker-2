'use client'

import { useSearchParams } from "next/navigation"

export default function Page() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)

    const flags = params.get("flags");
    const bgColor = params.get("bgColor")
    console.log('params', flags, bgColor)
    return (
        <h1>Tracker</h1>
    )
}