import { Tooltip, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export function GithubTooltip() {
  return (
    <Tooltip title="Github" placement="top" arrow>
      <IconButton>
        <GitHubIcon sx={{ fontSize: "45px", color: "#4d8cff" }} />
      </IconButton>
    </Tooltip>
  );
}
