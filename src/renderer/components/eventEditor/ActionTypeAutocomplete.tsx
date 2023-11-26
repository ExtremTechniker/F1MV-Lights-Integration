import * as React from "react";
import { Autocomplete, FormControl, TextField } from "@mui/material";
import {
  ActionType,
  actionTypeReadableMap,
} from "../../../shared/config/config_types";

interface ActionTypeAutocompleteProps {
  selectedActionType: ActionType;
  onChange: (newValue: ActionType) => void;
}

export function ActionTypeAutocomplete({
  selectedActionType,
  onChange,
}: ActionTypeAutocompleteProps) {
  return (
    <FormControl fullWidth margin="normal">
      <Autocomplete
        autoComplete
        autoSelect
        autoHighlight
        fullWidth
        clearIcon={false}
        options={Object.values(ActionType)}
        value={selectedActionType}
        getOptionLabel={(key) => actionTypeReadableMap[key]}
        onChange={(_event, newValue) => {
          onChange(newValue ?? ActionType.On);
        }}
        renderInput={(params) => <TextField {...params} label="Type" />}
      />
    </FormControl>
  );
}
