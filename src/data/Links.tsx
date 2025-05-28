import * as React from "react";

// Icons
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

interface topicLinksProps {
  topic: string;
  icon: React.JSX.Element;
}

export const topicLinks: topicLinksProps[] = [
  { topic: "Home", icon: <HomeIcon /> },
  { topic: "About Me", icon: <PersonIcon /> },
  { topic: "Skills", icon: <PsychologyIcon /> },
  { topic: "Work Experience", icon: <WorkIcon /> },
  { topic: "Projects", icon: <BookIcon /> },
  { topic: "Education", icon: <SchoolIcon /> },
  { topic: "Soft Skill", icon: <FavoriteIcon /> },
];
