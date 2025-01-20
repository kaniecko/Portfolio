import { connectToDatabase } from './utils/mongodb';

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method not allowed' }),
        };
    }

    try {
        // Get IP address from Netlify's event object
        const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'];

        // Connect to MongoDB
        const { db } = await connectToDatabase();

        // Get geolocation data
        const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
        const geoData = await geoResponse.json();

        // Store visitor data
        const visitorCollection = db.collection('visitors');
        await visitorCollection.insertOne({
            ip: ip,
            timestamp: new Date(),
            location: {
                country: geoData.country,
                city: geoData.city,
                region: geoData.regionName,
                lat: geoData.lat,
                lon: geoData.lon
            },
            userAgent: event.headers['user-agent'],
            page: event.headers.referer || 'Unknown'
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Visitor tracked successfully' })
        };
    } catch (error) {
        console.error('Error tracking visitor:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to track visitor' })
        };
    }
}