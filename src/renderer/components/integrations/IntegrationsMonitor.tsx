import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardHeader,
  CircularProgress,
  Collapse,
  Divider,
  List,
} from "@mui/material";
import {
  KeyboardArrowUpRounded,
  KeyboardArrowDownRounded,
} from "@mui/icons-material";
import { IntegrationState } from "./types";
import "./status.css";

const integrationStateMap: {
  [key: string]: string;
} = {
  ikea: "IKEA",
  govee: "Govee",
  hue: "Philips Hue",
  openRGB: "OpenRGB",
  homeAssistant: "Home Assistant",
  streamDeck: "Stream Deck",
  WLED: "WLED",
  MQTT: "MQTT",
  F1MV: "MultiViewer",
  F1TVLiveSession: "F1TV Live Session Found",
  update: "Auto Updater",
  webServer: "Webserver",
};

export function IntegrationsMonitor() {
  const [integrationStates, setIntegrationStates] = useState<
    IntegrationState[]
  >([]);
  const [open, setOpen] = useState(true);

  const handleToggleOpenClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    async function fetchIntegrationStates() {
      const newIntegrationStates =
        await window.f1mvli.utils.getIntegrationStates();
      setIntegrationStates([...newIntegrationStates]);
    }

    fetchIntegrationStates();
    const intervalId = setInterval(fetchIntegrationStates, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card
      sx={{
        width: "70%",
      }}
    >
      <CardActionArea onClick={handleToggleOpenClick}>
        <CardHeader
          title="Integration States"
          action={
            open ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />
          }
          sx={{
            "& .MuiCardHeader-action": {
              mt: 0,
              mr: 0,
              mb: 0,
              alignSelf: "center",
            },
          }}
        />
      </CardActionArea>

      <Collapse in={open}>
        <Divider />

        <List disablePadding>
          {integrationStates
            .filter(
              (integrationState: IntegrationState) =>
                !integrationState.disabled,
            )
            .map((integrationState: IntegrationState) => (
              <div key={integrationState.name}>
                <Divider />
                <CardHeader
                  title={integrationStateMap[integrationState.name]}
                  action={
                    <div
                      className={`status ${
                        integrationState.state ? "success" : "error"
                      }`}
                    ></div>
                  }
                  sx={{
                    "& .MuiCardHeader-action": {
                      mt: 0,
                      mr: 0,
                      mb: 0,
                      alignSelf: "center",
                    },
                  }}
                />
              </div>
            ))}
          {integrationStates.length === 0 && (
            <div
              style={{
                display: "grid",
                placeItems: "center",
                placeContent: "center",
                height: 80,
              }}
            >
              <CircularProgress />
            </div>
          )}
        </List>
      </Collapse>
    </Card>
  );
}
