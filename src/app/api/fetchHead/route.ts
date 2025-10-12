// src/app/api/fetchHead/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const url = req.url ? new URL(req.url).searchParams.get("url") : null;
    if (!url) return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });

    try {
        const res = await fetch(url);
        const html = await res.text();
        return NextResponse.json({ html });
    } catch (err) {
        return NextResponse.json({ error: "Failed to fetch page" }, { status: 500 });
    }
}
