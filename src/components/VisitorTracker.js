import { useEffect } from 'react';

export default function VisitorTracker() {
    useEffect(() => {
        const trackVisit = async () => {
            try {
                await fetch('/.netlify/functions/track-visitor', {
                    method: 'POST',
                });
            } catch (error) {
                console.error('Error tracking visit:', error);
            }
        };

        trackVisit();
    }, []);

    return null;
}