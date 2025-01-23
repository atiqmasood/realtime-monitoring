import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
// internal
import Header from "../components/Header";
import MetricsPanel from "../components/MetricsPanel";
import Visualizations from "../components/Visualizations";
import EventLogPanel from "../components/EventLogPanel";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import useWebSocket from "../hooks/useWebSocket";

const Dashboard = () => {
  useWebSocket();
  const isLoading: boolean = useSelector(
    (state: RootState) => state.experiment.isLoading
  );
  const liveUpdates = useSelector(
    (state: RootState) => state.websocket.liveUpdates
  );

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="spinner-border animate-spin border-4 border-blue-500 border-t-transparent rounded-full h-16 w-16"></div>
          </div>
        ) : (
          <Grid container spacing={2}>
            {/* Metrics Panel */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <Box p={2} bgcolor="background.paper" borderRadius={2}>
                    <MetricsPanel data={liveUpdates} />
                  </Box>
                </Grid>
                {/* Visualizations */}
                <Grid size={{ xs: 12, md: 12 }}>
                  <Box p={2} bgcolor="background.paper" borderRadius={2}>
                    <Visualizations data={liveUpdates} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Event Logs */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box p={2} bgcolor="background.paper" borderRadius={2}>
                <EventLogPanel data={liveUpdates} />
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
