// Data
import { topicLinks } from "../data/Links";

// Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";

// MUI
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#172554",
        color: "#f9f9f9",
        position: "relative",
        px: "4rem",
        py: "2rem",
        zIndex: 1,
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Varit Tubim's Portfolio
        </Typography>
        <Typography variant="h6">Thank you for visiting my personal portfolio website.</Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Quick Links
        </Typography>
        <List>
          {topicLinks.map(({ topic }) => (
            <ListItem key={topic} disablePadding>
              <ListItemButton
                sx={{ px: 1, py: 0 }}
                onClick={() => {
                  const element = document.getElementById(topic);
                  const offset = 100;
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "24px",
                      height: "24px",
                      background: "white",
                      borderRadius: "24px",
                    }}
                  >
                    <ChevronRightIcon sx={{ fontSize: 20, color: "black" }} />
                  </Box>
                </ListItemIcon>
                <ListItemText primary={topic} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Contact Info
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneIcon sx={{ fontSize: 24, color: "blue" }} />
          <Typography variant="h6">xxx-xxx-xxxx</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmailIcon sx={{ fontSize: 24, color: "blue" }} />
          <Typography variant="h6">varit.tubtim@gmail.com</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <HomeIcon sx={{ fontSize: 24, color: "blue" }} />
          <Typography variant="h6">Samutprakan, Thailand</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
