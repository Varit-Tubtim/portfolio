// Components
import icons from "../icons";

// MUI
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

interface SkillProps {
  iconLabel: string;
  iconValue: string;
}
function Skill({ iconLabel, iconValue }: SkillProps) {
  const iconPath = icons[iconValue];

  return (
    <Tooltip title={iconLabel} placement="top">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#e2e8f0",
          borderRadius: "1rem",
          width: "100%",
          height: "8rem",
          aspectRatio: "1 / 1",
          minWidth: { xs: "80px", sm: "100px", md: "120px" },
          minHeight: { xs: "80px", sm: "100px", md: "120px" },
          p: "1rem",
        }}
      >
        <Box component="img" src={iconPath} sx={{ p: "8px", width: "100%", height: "100%" }}></Box>
      </Box>
    </Tooltip>
  );
}

export default Skill;
