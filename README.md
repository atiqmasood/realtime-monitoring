# WebSocket Real-Time Dashboard Implementation

This project implements a real-time dashboard for monitoring live updates using WebSocket communication. The dashboard includes data visualizations, filtering options, and Redux Toolkit for state management, all built with TypeScript, React, and TailwindCSS.

---

## Features

1. **WebSocket Integration**:

   - Real-time updates for live experiment data.
   - Automatic rendering of new data in visualizations.

2. **Redux Toolkit**:

   - Centralized state management for WebSocket connection status and live updates.
   - Tracks the timestamp of the latest update.

3. **Data Visualizations**:

   - Bar and line charts using Recharts for performance and trend visualization.
   - Fully responsive design for different screen sizes.

4. **UI Components**:

   - Event Log Panel with filtering options.
   - Fancy responsive UI using TailwindCSS.

5. **TypeScript Support**:
   - Strong type-checking for safer and more maintainable code.

---

## Setup Instructions

### Prerequisites

- **Node.js**: v16 or above.
- **npm** or **yarn**.
- A WebSocket server (or mock server) for testing real-time updates.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/atiqmasood/realtime-monitoring.git
   cd realtime-monitoring
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Run the WebSocket server :

   ```bash
   npm install
   # or
   npm run server
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## Code Overview

### Architecture Decisions

1. **WebSocket Integration**:

   - Implemented in both the backend and frontend to ensure seamless real-time updates.
   - Redux Toolkit manages WebSocket data for scalability and improved state handling.

2. **State Management**:

   - Redux Toolkit slices (`websocketSlice`) handle connection status, live updates, and the last update timestamp.

3. **Data Visualization**:

   - Used Recharts for easy-to-integrate, customizable charts.
   - Bar and Line charts provide insights into performance metrics.

4. **TypeScript**:

   - Defined strong types for experiment data, live updates, and state interfaces.
   - Improved developer experience with clear type definitions and IntelliSense support.

5. **TailwindCSS**:
   - Simplified styling with utility-first CSS classes.
   - Ensured a consistent, responsive design.

---

## Suggestions for Future Improvements

1. **WebSocket Enhancements**:

   - Add reconnection logic for resilient WebSocket communication.
   - Include authentication for secure connections.

2. **Advanced Visualizations**:

   - Support for more chart types, like pie charts or heatmaps.
   - Add zooming and panning functionality for trend analysis.

3. **Testing**:

   - Add unit and integration tests for WebSocket handlers and Redux slices.
   - Use tools like Jest and React Testing Library.

4. **Backend Improvements**:
   - Implement a database to store historical data for analysis.
   - Add RESTful endpoints for fetching aggregated metrics.

---
