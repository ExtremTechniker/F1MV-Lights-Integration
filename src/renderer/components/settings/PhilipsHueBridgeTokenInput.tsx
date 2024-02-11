import React, { useCallback } from "react";
import { Button, Stack, TextField, Tooltip } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useConfig } from "../../hooks/useConfig";

export function PhilipsHueBridgeTokenInput() {
  const { config, updateConfig } = useConfig();

  const handleInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value === "" ? undefined : event.target.value;
      await updateConfig({ philipsHueBridgeAuthToken: value });
    },
    [updateConfig],
  );

  const handleGenerateToken = useCallback(async () => {
    const data =
      await window.f1mvli.integrations.philipsHue.generateAuthToken();
    if (data.status === "success" && data.username) {
      await updateConfig({ philipsHueBridgeAuthToken: data.username });
      enqueueSnackbar("Token generated", { variant: "success" });
      window.location.reload();
    } else if (data.status === "link_button_not_pressed") {
      enqueueSnackbar("Link button not pressed", { variant: "error" });
    } else {
      enqueueSnackbar("Error generating token", { variant: "error" });
    }
  }, [updateConfig]);

  return (
    <Stack direction="row" spacing={2}>
      <Tooltip
        title="Make sure to press the link button on your bridge before clicking this."
        arrow
      >
        <Button
          variant="contained"
          onClick={handleGenerateToken}
          sx={{ height: "80%", alignSelf: "center" }}
        >
          Generate Token
        </Button>
      </Tooltip>
      <TextField
        defaultValue={config.philipsHueBridgeAuthToken}
        onChange={handleInputChange}
        label="Bridge Token"
        variant="outlined"
      />
    </Stack>
  );
}
