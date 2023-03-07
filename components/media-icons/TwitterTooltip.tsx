import { Tooltip, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

export function TwitterTooltip() {
  return (
    <Tooltip title="Twitter" placement="top" arrow>
      <IconButton>
        <TwitterIcon sx={{ fontSize: "45px", color: "#4d8cff" }} />
      </IconButton>
    </Tooltip>
  );
}
