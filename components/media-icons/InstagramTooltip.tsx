import { Tooltip, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

export function InstagramTooltip() {
  return (
    <Tooltip title="Instagram" placement="top" arrow>
      <IconButton>
        <InstagramIcon sx={{ fontSize: "45px", color: "#4d8cff" }} />
      </IconButton>
    </Tooltip>
  );
}
