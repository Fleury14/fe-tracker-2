'use client'

import { useParams } from "next/navigation"

export default function Page() {
    const params = useParams<{ flags: string; bgColor: string;}>()
    console.log('params', params)
    return (
        <h1>Tracker</h1>
    )
}