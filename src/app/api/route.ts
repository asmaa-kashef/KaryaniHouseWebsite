import { NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

export async function GET() {
    if (!API_KEY || !PLACE_ID) {
        return NextResponse.json({ error: 'Missing API key or Place ID.' }, { status: 500 });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

    try {
        const response = await axios.get(url);
        const reviews = response.data.result.reviews;
        if (reviews) {
            return NextResponse.json({ reviews });
        } else {
            return NextResponse.json({ error: 'No reviews found.' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching Google reviews:', error);
        return NextResponse.json({ error: 'Failed to fetch reviews.' }, { status: 500 });
    }
}