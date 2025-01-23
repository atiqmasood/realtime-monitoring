// src/websocketServer.js
const WebSocket = require("ws");

const setupWebSocketServer = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("Client connected");

    // Send initial data to the client
    ws.send(
      JSON.stringify({
        type: "INITIAL_DATA",
        payload: {
          message: "Welcome to the WebSocket server!",
        },
      })
    );

    // Simulate real-time updates every 5 seconds
    const interval = setInterval(() => {
      const liveUpdate = {
        timestamp: new Date().toISOString(),
        control: {
          visitors: Math.floor(Math.random() * 10),
          conversions: Math.floor(Math.random() * 5),
          revenue: Math.floor(Math.random() * 100),
        },
        variantB: {
          visitors: Math.floor(Math.random() * 10),
          conversions: Math.floor(Math.random() * 5),
          revenue: Math.floor(Math.random() * 100),
        },
      };

      ws.send(
        JSON.stringify({
          type: "LIVE_UPDATE",
          payload: liveUpdate,
        })
      );
    }, 5000);

    // Clean up on disconnect
    ws.on("close", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
  });
};

module.exports = setupWebSocketServer;
