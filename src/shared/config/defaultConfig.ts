import { ActionType, IConfig, EventType } from "./config_types";

export const defaultConfig: IConfig = {
  autoTurnOffLightsWhenSessionEnds: true,
  defaultBrightness: 100,
  hideLogs: true,
  startMultiViewerWhenAppStarts: false,
  events: [
    {
      id: 0,
      name: "Back to static",
      triggers: [EventType.goBackToStatic],
      enabled: true,
      actions: [
        {
          type: ActionType.on,
          color: {
            r: 255,
            g: 255,
            b: 255,
          },
          brightness: 100,
        },
      ],
      amount: 1,
    },
    {
      id: 1,
      name: "Green Flag",
      triggers: [EventType.greenFlag],
      enabled: true,
      actions: [
        {
          type: ActionType.on,
          color: {
            r: 0,
            g: 255,
            b: 0,
          },
          brightness: 100,
        },
      ],
      amount: 1,
    },
    {
      id: 2,
      name: "Yellow Flag",
      triggers: [EventType.yellowFlag],
      enabled: true,
      actions: [
        {
          type: ActionType.on,
          color: {
            r: 255,
            g: 150,
            b: 0,
          },
          brightness: 100,
        },
      ],
      amount: 1,
    },
    {
      id: 3,
      name: "Red Flag",
      triggers: [EventType.redFlag],
      enabled: true,
      actions: [
        {
          type: ActionType.on,
          color: {
            r: 255,
            g: 0,
            b: 0,
          },
          brightness: 100,
        },
      ],
      amount: 1,
    },
    {
      id: 4,
      name: "Safety Car",
      triggers: [EventType.safetyCar],
      enabled: true,
      actions: [
        {
          type: ActionType.on,
          color: {
            r: 255,
            g: 150,
            b: 0,
          },
          brightness: 100,
        },
      ],
      amount: 1,
    },
    {
      id: 5,
      name: "Virtual Safety Car",
      triggers: [EventType.virtualSafetyCar],
      enabled: true,
      actions: [
        {
          type: ActionType.on,
          color: {
            r: 255,
            g: 150,
            b: 0,
          },
          brightness: 100,
        },
      ],
      amount: 1,
    },
    {
      id: 6,
      name: "Virtual Safety Car Ending",
      triggers: [EventType.virtualSafetyCarEnding],
      enabled: true,
      actions: [
        {
          type: ActionType.on,
          color: {
            r: 255,
            g: 150,
            b: 0,
          },
          brightness: 100,
        },
      ],
      amount: 1,
    },
    {
      id: 7,
      name: "Fastest Lap",
      triggers: [EventType.fastestLap],
      enabled: true,
      actions: [
        {
          type: ActionType.on,
          color: {
            r: 91,
            g: 0,
            b: 166,
          },
          brightness: 100,
        },
        {
          type: ActionType.delay,
          delay: 1000,
        },
        {
          type: ActionType.go_back_to_current_status,
        },
      ],
      amount: 1,
    },
  ],
  multiviewerLiveTimingURL: "http://localhost:10101",
  multiviewerCheck: true,
  philipsHueEnabled: false,
  philipsHueBridgeIP: undefined,
  philipsHueDeviceIDs: [],
  philipsHueEntertainmentZoneIDs: [],
  philipsHueToken: undefined,
  philipsHueThirdPartyCompatiblityMode: false,
  philipsHueEnableFade: false,
  philipsHueEnableFadeWithEffects: false,
  ikeaEnabled: false,
  ikeaSecurityCode: "",
  ikeaIdentity: undefined,
  ikeaPreSharedKey: undefined,
  ikeaDeviceIDs: [],
  goveeEnabled: false,
  openrgbEnabled: false,
  openrgbServerIp: "localhost",
  openrgbServerPort: 6742,
  homeAssistantEnabled: false,
  homeAssistantHost: "",
  homeAssistantPort: 8123,
  homeAssistantToken: "",
  homeAssistantDevices: [],
  wledEnabled: false,
  wledDevices: [],
  mqttEnabled: false,
  mqttHost: "",
  mqttPort: 1883,
  mqttUsername: "",
  mqttPassword: "",
  streamdeckEnabled: false,
  discordRPCEnabled: false,
  discordRPCAvoidSpoilers: true,
  webserverEnabled: false,
  webserverPort: 20202,
  debugMode: false,
  updateChannel: "latest",
  analytics: true,
};
