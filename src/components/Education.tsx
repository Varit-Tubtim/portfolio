// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface EducationProps {
  logo: string;
  university: string;
  program: string;
  period: string;
  gpax: string;
}

// function Education({ iconLabel, iconValue }: EducationProps) {
function Education({ logo, university, program, period, gpax }: EducationProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#e2e8f0",
        borderRadius: "1rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30%", height: "24rem" }}>
        <Box component="img" src={logo} sx={{ width: "80%", height: "80%", objectFit: "contain" }}></Box>
      </Box>
      <Box sx={{ width: "70%" }}>
        <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "bold" }}>
          {university}
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          {program}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {period}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {gpax}
        </Typography>
      </Box>
    </Box>
  );
}

export default Education;
