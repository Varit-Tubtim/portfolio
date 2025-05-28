// Components
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Education from "./components/Education";

// MUI
import Typography from "@mui/material/Typography";
import Sidebar from "./components/Sidebar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/icons-material/Link";

// Icons
import icons from "./icons";

// Images
import image1 from "./assets/images/image1.jpg";
import Me from "./assets/images/Me.jpg";
import RWBLogo from "./assets/images/RWB.png";
import KMITLLogo from "./assets/images/KMITL.png";
import RWBPlace from "./assets/images/RWB-place.jpg";
import KMITLPlace from "./assets/images/KMITL-place.jpg";
import Ascend from "./assets/images/Ascend.png";

function App() {
  const logosContact = [
    { label: "Facebook", value: "facebook", color: "#1877F2", link: "https://www.facebook.com/varit.tubtim" },
    { label: "Instagram", value: "instagram", color: "#E4405F", link: "https://www.instagram.com/vxrrubyy" },
    { label: "Linkedin", value: "linkedin", color: "#0A66C2", link: "https://www.linkedin.com/in/varit-tubtim" },
    { label: "Github", value: "github", color: "#000000", link: "https://github.com/Varit-Tubtim" },
  ];
  const logosSkill = [
    { label: "AWS", value: "aws" },
    { label: "Bootstrap", value: "bootstrap" },
    { label: "CSS3", value: "css" },
    { label: "Docker", value: "docker" },
    { label: "Figma", value: "figma" },
    { label: "Flask", value: "flask" },
    { label: "Git", value: "git" },
    { label: "Github", value: "github" },
    { label: "HTML", value: "html" },
    { label: "Java", value: "java" },
    { label: "Javascript", value: "javascript" },
    { label: "Jira", value: "jira" },
    { label: "MySQL", value: "mysql" },
    { label: "Node.js", value: "nodejs" },
    { label: "PHP", value: "php" },
    { label: "PostgreSQL", value: "postgresql" },
    { label: "Postman", value: "postman" },
    { label: "Python", value: "python" },
    { label: "React", value: "react" },
    { label: "Tailwind CSS", value: "tailwindcss" },
    { label: "Typescript", value: "typescript" },
    { label: "Vite", value: "vitejs" },
  ];
  return (
    <>
      <Sidebar>
        {/* Home */}
        <Box
          sx={{
            background: "#60a5fa",
          }}
        >
          <Box
            id="Home"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: "2rem",
              px: "9rem",
              gap: 5,
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  Hi, I'm
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fbbf24" }}>
                  Varit Tubtim
                </Typography>
              </Box>
              <Typography variant="h5">
                I recently graduated with a degree in Computer Science from King Mongkut's Institute of Technology
                Ladkrabang. I have hands-on experience in full-stack development, which has increased my passion for
                software development.
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                {logosContact.map((icon) => (
                  <a
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={icon.value}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      component="img"
                      src={icons[icon.value]}
                      sx={{ width: "3rem", height: "3rem", "&:hover": { opacity: 0.95 } }}
                    ></Box>
                  </a>
                ))}
              </Box>
            </Box>
            <Box
              component="img"
              src={Me}
              sx={{
                height: "93vh",
                borderRadius: "24px",
                boxShadow: "10px 10px 10px 2px rgba(15, 23, 42, 0.5)",
              }}
            ></Box>
          </Box>
        </Box>

        {/* About Me */}
        <Box sx={{ px: "9rem", py: "2rem" }}>
          <Typography id="About Me" variant="h3" sx={{ fontWeight: "bold" }}>
            About Me
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            I recently graduated with a degree in Computer Science from King Mongkut's Institute of Technology
            Ladkrabang. I have hands-on experience in full-stack development, which has increased my passion for
            software development. I am excited to learn new skills, take on challenges and continuously improving. I
            believe my passion and commitment will make me a great addition to your team.
          </Typography>
        </Box>

        {/* Skills */}
        <Box id="Skills" sx={{ background: "#3b82f6" }}>
          <Box sx={{ px: "9rem", py: "2rem" }}>
            <Typography variant="h3" sx={{ color: "#f9f9f9", fontWeight: "bold" }}>
              Skills
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(6, 1fr)",
                },
                py: "2rem",
                gap: "1rem",
              }}
            >
              {logosSkill.map((icon) => (
                <Skill iconLabel={icon.label} iconValue={icon.value} />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Work Experience */}
        <Box sx={{ px: "9rem", py: "2rem" }}>
          <Typography id="Work Experience" variant="h3" sx={{ fontWeight: "bold", pb: "2rem" }}>
            Work Experience
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#fecaca",
              border: "2px solid #fef2f2",
              borderRadius: "1rem",
              py: "4rem",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30%" }}>
              <Box component="img" src={Ascend} sx={{ width: "60%", height: "60%", borderRadius: "50%" }}></Box>
            </Box>
            <Box sx={{ width: "70%" }}>
              <List sx={{ listStyleType: "disc" }}>
                <ListItem sx={{ display: "list-item" }}>
                  Developed a backend to compare AWS machine usage with baselines, enabling the DevOps team to reduce
                  unnecessary resource usage by 10-15%.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Developed a frontend dashboard to visualize AWS machine usage and pricing, delivering clear insights
                  and automatic baseline comparisons, improving decision-making speed by 30-40% for DevOps and CloudOps
                  teams.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Collaborated on a Centralized CI platform that gathered and displayed CI/CD data from 10+ Business
                  Units, streamlining monitoring and operations into a single system.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Collaborated on developing a web platform for developer issue reporting, reducing contact time and
                  improving task assignment accuracy to the appropriate team
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>

        {/* Projects */}
        <Box id="Projects" sx={{ background: "#1d4ed8", color: "white" }}>
          <Box sx={{ px: "9rem", py: "2rem" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Projects
            </Typography>
            <List sx={{ listStyleType: "disc" }}>
              <ListItem sx={{ display: "list-item" }}>
                Collected and unified CI/CD data from all Business Units to generate actionable insights through a
                full-stack web application, enhancing operational efficiency.
              </ListItem>
            </List>
          </Box>
        </Box>

        {/* Education */}
        <Box sx={{ px: "9rem", py: "2rem" }}>
          <Typography id="Education" variant="h3" sx={{ fontWeight: "bold", pb: "2rem" }}>
            Education
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Education
              logo={KMITLLogo}
              university="King Mongkut's Institute of Technology Ladkrabang, Bangkok"
              program="Bachelor of Science Program in Computer Science"
              period="Aug 2021 – Mar 2025"
              gpax="GPAX: 3.72 (First Class Honors)"
            />
            <Education
              logo={RWBLogo}
              university="Ratwinit Bangkaeo School, Bang Phli, Samut Prakan"
              program="Science-Mathematics Program"
              period="May 2018 – Mar 2021"
              gpax="GPAX: -"
            />
          </Box>
        </Box>

        {/* Soft Skill */}
        <Box sx={{ px: "9rem", py: "2rem" }}>
          <Typography id="Soft Skill" variant="h3" sx={{ fontWeight: "bold" }}>
            Soft Skill
          </Typography>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              Key Strengths: Collaboration, Integrity, Patience, Eager to learn
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>Languages: English (B2 Certificate)</ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Typing Skill: 80 words / min (Thai) | 82 words / min (English)
            </ListItem>
          </List>
        </Box>
        <Footer />
      </Sidebar>
    </>
  );
}

export default App;
