const express = require("express");
const { createServer } = require("http");
const cors = require("cors");
const setupWebSocketServer = require("./websocketServer");

const app = express();
app.use(cors());
app.get("/", (_, res) => res.send("WebSocket Server is running!"));
const experimentData = {
  experimentId: "exp_live_001",
  variants: [
    {
      name: "Control",
      visitors: 1200,
      conversions: 250,
      revenue: 4800,
    },
    {
      name: "Variant B",
      visitors: 1100,
      conversions: 290,
      revenue: 5200,
    },
  ],
  liveUpdates: [
    {
      timestamp: "2024-12-27T14:00:00Z",
      control: {
        visitors: 20,
        conversions: 5,
        revenue: 100,
      },
      variantB: {
        visitors: 22,
        conversions: 6,
        revenue: 120,
      },
    },
  ],
};

// GET /api/experiments/live
app.get("/api/experiments/live", (req, res) => {
  res.json(experimentData);
});

// GET /api/experiments/:id/metrics
app.get("/api/experiments/:id/metrics", (req, res) => {
  const { id } = req.params;
  if (id === experimentData.experimentId) {
    res.json(experimentData);
  } else {
    res.status(404).json({ error: "Experiment not found" });
  }
});

// POST /api/experiments/:id/logs
app.post("/api/experiments/:id/logs", express.json(), (req, res) => {
  const { id } = req.params;
  if (id === experimentData.experimentId) {
    // In real implementation, save logs to a database or logging system
    console.log("Experiment logs:", req.body);
    res.status(200).json({ message: "Logs received" });
  } else {
    res.status(404).json({ error: "Experiment not found" });
  }
});

const server = createServer(app);
setupWebSocketServer(server);

const PORT = 3001;
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
