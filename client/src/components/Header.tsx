import React, { useMemo } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Header: React.FC = React.memo(() => {
  const lastUpdateTimestamp = useSelector(
    (state: RootState) => state.websocket.lastUpdateTimestamp
  );
  const formattedTime = useMemo(
    () =>
      lastUpdateTimestamp ? new Date(lastUpdateTimestamp).toLocaleString() : "",
    [lastUpdateTimestamp]
  );

  return (
    <AppBar
      position="static"
      className="!bg-gradient-to-r from-blue-500 to-teal-500 shadow-md"
    >
      <Toolbar className="flex justify-between items-center px-4 py-3">
        {/* Logo Section */}
        <Typography variant="h6" className="text-white text-xl font-bold">
          Evolv AI
        </Typography>

        {/* Last Updated Section */}
        <Typography
          variant="body2"
          className="text-white text-sm md:text-base font-semibold hidden md:block"
        >
          Last updated: {formattedTime}
        </Typography>

        {/* For Mobile view (responsive) */}
        <Typography variant="body2" className="text-white text-sm md:hidden">
          Last updated: {formattedTime}
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
