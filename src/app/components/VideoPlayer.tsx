// components/VideoPlayer.tsx
'use client';

import React from 'react';

interface VideoPlayerProps {
    video: string;
    name: string;
}

export default function VideoPlayer({ video, name }: VideoPlayerProps) {
    return (
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', overflow: 'hidden', borderRadius: '12px', border: '3px solid #ff914d', boxShadow: '0 6px 15px rgba(0,0,0,0.2)' }}>
            <iframe
                src={video}
                title={name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>
    );
}