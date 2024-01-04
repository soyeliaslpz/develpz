"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import { Menu } from "@/components/Menu";
import { styled } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Develpz Portafolio",
  description: "Descripción de ejemplo",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "Tasks", href: "/tasks", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function RootLayout({ children }) {
  useEffect(() => {
    document.title = metadata.title;
  }, []);
  // El segundo argumento asegura que se ejecute solo una vez al montar el componente

  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeRegistry>
          <Box sx={{ display: "flex" }}>
            <Menu />
            <Box component='main' sx={{ flexGrow: 1, p: 0 }}>
              <DrawerHeader />
              <Provider store={store}> {children} </Provider>
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>

    // <html lang='en'>
    //   <body>
    //     <ThemeRegistry>
    //       <AppBar position='fixed' sx={{ zIndex: 2000 }}>
    //         <Toolbar sx={{ backgroundColor: "background.paper" }}>
    //           <DashboardIcon
    //             sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
    //           />
    //           <Typography variant='h6' noWrap component='div' color='black'>
    //             Develpz
    //           </Typography>
    //         </Toolbar>
    //       </AppBar>
    //       <Drawer
    //         sx={{
    //           width: DRAWER_WIDTH,
    //           flexShrink: 0,
    //           "& .MuiDrawer-paper": {
    //             width: DRAWER_WIDTH,
    //             boxSizing: "border-box",
    //             top: ["48px", "56px", "64px"],
    //             height: "auto",
    //             bottom: 0,
    //           },
    //         }}
    //         variant='permanent'
    //         anchor='left'
    //       >
    //         <Divider />
    //         <List>
    //           {LINKS.map(({ text, href, icon: Icon }) => (
    //             <ListItem key={href} disablePadding>
    //               <ListItemButton component={Link} href={href}>
    //                 <ListItemIcon>
    //                   <Icon />
    //                 </ListItemIcon>
    //                 <ListItemText primary={text} />
    //               </ListItemButton>
    //             </ListItem>
    //           ))}
    //         </List>
    //         <Divider sx={{ mt: "auto" }} />
    //         <List>
    //           {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
    //             <ListItem key={text} disablePadding>
    //               <ListItemButton>
    //                 <ListItemIcon>
    //                   <Icon />
    //                 </ListItemIcon>
    //                 <ListItemText primary={text} />
    //               </ListItemButton>
    //             </ListItem>
    //           ))}
    //         </List>
    //       </Drawer>
    //       <Box
    //         component='main'
    //         sx={{
    //           flexGrow: 1,
    //           bgcolor: "background.default",
    //           ml: `${DRAWER_WIDTH}px`,
    //           mt: ["48px", "56px", "64px"],
    //           p: 3,
    //         }}
    //       >
    //         <Provider store={store}>{children}</Provider>
    //       </Box>
    //     </ThemeRegistry>
    //   </body>
    // </html>
  );
}
