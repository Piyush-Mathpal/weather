# Goal Description

The goal is to revamp the weather application by adding a fully modern, interactive weather map that visualizes wind, temperature, and precipitation. We will elevate the design from a standard layout to an ultra-modern, fully responsive "Glassmorphism" interface overlaying a beautiful animated wind map.

## Proposed Changes

### 1. Integrate Windy.com Interactive Map
- Add a full-screen or prominent embedded map using **Windy.com's embed API**. 
- The map will display beautiful, animated wind particles (or radar/temperature layers) that feel deeply premium and interactive.
- Whenever a user searches for a location (or clicks a default location), the map will dynamically center on that location using the `lat` and `lon` coordinates retrieved from the WeatherAPI.

### 2. Ultra-Modern Glassmorphic UI Redesign
- **Layout Overhaul**: Instead of generic flat colored boxes, the application will use "Glassmorphism". The background will be the animated map, and the weather widgets (search bar, current weather, hourly, forecast) will be floating, semi-transparent frosted glass panels overlaying the map.
- **Dynamic Adaptability**: Ensure the glass panels are positioned smartly so the user can interact freely with the weather map. On mobile devices, the glass panels will tuck beautifully so the map is visible.
- **Enhanced Typography and Styling**: Make font spacing, weights, and colors highly legible and striking to match modern Dribbble-style UI standards.

## Specific Files Modified

### [MODIFY] `index.html`
- Move existing UI elements into absolutely positioned glass layers.
- Inject the `<iframe>` for the Windy embed at the lowest z-index so it acts as the primary background or a large primary widget.
- Update the layout CSS to utilize `backdrop-filter: blur()`, `rgba()` white borders, and soft shadows for the glass effect.
- Update `getWeather()` in JavaScript to extract `data.location.lat` and `data.location.lon` and automatically update the `src` of the Windy map iframe so the wind map navigates alongside the weather dashboard.

## Open Questions

- By default, the Windy map will show animated wind particles. Are you okay with wind particles being the default layer (it looks incredibly modern), or would you prefer a classic rain/radar default?
- I will structure the UI so the dashboard floats over the map. Should the map cover the *entire background of the screen*, or should it just be a *large card* next to the weather details? (I recommend covering the entire screen for the "wow" factor).

## Verification Plan

### Automated/Code Verification
- Code structures remain valid HTML/CSS/JS.
- Fetch API will retrieve coordinates correctly and bind them to the map iframe URL cleanly.

### Manual Verification
- Visual inspection to ensure the layout does not cut or overlap unreadably across screen sizes.
- Search for a new city, map flies to that city with live wind details matching the search query.
