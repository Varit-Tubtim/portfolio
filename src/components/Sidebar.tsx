// External Dependencies
import * as React from "react";

// Icons
import BookIcon from "@mui/icons-material/Book";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import HomeIcon from "@mui/icons-material/Home";

// Logos
import Logo from "../assets/images/Logo.png";

// MUI
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme, type CSSObject, type Theme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { topicLinks } from "../data/Links";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  zIndex: 0,
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`, // ขนาด Sidebar ที่ปิดอยู่
    width: `calc(100% - (${theme.spacing(7)} + 1px))`, // ลดความกว้าง AppBar ลงด้วย
    [theme.breakpoints.up("sm")]: {
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
      width: `calc(100% - (${theme.spacing(8)} + 1px))`,
    },
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    { props: ({ open }) => open, style: { ...openedMixin(theme), "& .MuiDrawer-paper": openedMixin(theme) } },
    { props: ({ open }) => !open, style: { ...closedMixin(theme), "& .MuiDrawer-paper": closedMixin(theme) } },
  ],
  "& .MuiDrawer-paper": {
    boxShadow: `
    inset 0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 0 10px rgba(255, 255, 255, 0.05),
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 1px 3px rgba(0, 0, 0, 0.1)`,
    backgroundColor: "#f8fafc",
  },
}));

function Sidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("About Me");
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      let currentSection = "";
      const offset = 120;

      for (const item of topicLinks) {
        const section = document.getElementById(item.topic);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = item.topic;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ marginRight: 2 }, open && { display: "none" }]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: 2,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, height: "80px" }}>
            <img
              srcSet={`${Logo}`}
              src={`${Logo}`}
              alt="Logo"
              loading="lazy"
              style={{ width: "32px", height: "auto" }}
            />
            <Box sx={open ? { opacity: 1 } : { opacity: 0 }}>
              <Typography sx={{ fontWeight: "bold", whiteSpace: "normal", wordBreak: "break-word", fontSize: 14 }}>
                Varit Tubtim
              </Typography>
              <Typography sx={{ fontWeight: "bold", whiteSpace: "normal", wordBreak: "break-word", fontSize: 14 }}>
                Computer Science, KMITL
              </Typography>
            </Box>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          {topicLinks.map(({ topic, icon }) => (
            <ListItem
              key={topic}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                const element = document.getElementById(topic);
                const offset = 100;
                if (element) {
                  const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
                  setIsScrolling(true);

                  window.scrollTo({ top: y, behavior: "smooth" });

                  setTimeout(() => {
                    setIsScrolling(false);
                    setActiveSection(topic);
                  }, 700);
                }
              }}
            >
              <ListItemButton
                sx={[
                  { minHeight: 48, px: 2.5, transition: "background-color 0.6s ease, color 0.6s ease" },
                  open ? { justifyContent: "initial" } : { justifyContent: "center" },
                  {
                    "&:hover": {
                      background: "#93c5fd",
                      color: "white",
                      "& .MuiListItemIcon-root": {
                        color: "white",
                      },
                    },
                  },
                  activeSection === topic && {
                    backgroundColor: "#60a5fa",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "#3b82f6",
                      fontWeight: "bolder",
                    },
                  },
                ]}
              >
                <ListItemIcon
                  sx={[
                    { minWidth: 0, justifyContent: "center", transition: "color 0.6s ease" },
                    open ? { mr: 3 } : { mr: "auto" },
                    activeSection === topic && { color: "#f9f9f9" },
                  ]}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={topic} sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "start",
            p: 2,
          }}
        >
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {open ? <ViewSidebarIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
      </Drawer>
      <Box component="main" sx={{ background: "#f7f7f7" }}>
        {children}
      </Box>
    </Box>
  );
}

export default Sidebar;
