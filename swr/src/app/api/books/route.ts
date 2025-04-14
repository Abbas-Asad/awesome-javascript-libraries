import { NextResponse } from "next/server"

export const GET = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books");
    const data = await response.json();

    return NextResponse.json(data);
}