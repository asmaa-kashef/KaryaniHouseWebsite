import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get("url");
    if (!url) {
        return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch URL");

        const html = await res.text();
        const $ = cheerio.load(html);

        const title = $("title").text() || null;
        const description = $('meta[name="description"]').attr("content") || null;

        return NextResponse.json({ title, description });
    } catch (err) {
        return NextResponse.json({ error: (err as Error).message }, { status: 500 });
    }
}
