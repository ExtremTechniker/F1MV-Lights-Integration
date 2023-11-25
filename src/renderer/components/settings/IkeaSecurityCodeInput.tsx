import React, { useCallback } from "react";
import { TextField } from "@mui/material";
import { useConfig } from "../../hooks/useConfig";

export function IkeaSecurityCodeInput() {
  const { config, updateConfig } = useConfig();

  const handleInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value === "" ? undefined : event.target.value;
      await updateConfig({ ikeaSecurityCode: value });
    },
    [updateConfig],
  );

  return (
    <TextField
      defaultValue={config.ikeaSecurityCode}
      onChange={handleInputChange}
      label="Security Code"
      variant="outlined"
    />
  );
}
