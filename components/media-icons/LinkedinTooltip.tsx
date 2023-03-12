import { Tooltip, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function LinkedinTooltip() {
  return (
    <Tooltip title="LinkedIn" placement="top" arrow>
      <IconButton>
        <LinkedInIcon sx={{ fontSize: "45px", color: "#4d8cff" }} />
      </IconButton>
    </Tooltip>
  );
}
