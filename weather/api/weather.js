export default async function handler(req, res) {
    // Extract the city from the incoming request (e.g., /api/weather?city=London)
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: { message: "City is required" } });
    }

    // Pull the API key from Vercel's secure environment variables
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: { message: "WEATHER_API_KEY is not configured on the server." } });
    }

    try {
        // Contact the Weather API securely from the backend
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6`
        );

        const data = await response.json();

        // Forward the API response back down to frontend
        return res.status(response.status).json(data);
    } catch (error) {
        console.error("WeatherAPI Fetch Error:", error);
        return res.status(500).json({ error: { message: "Failed to fetch weather data" } });
    }
}
