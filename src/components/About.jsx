import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box
      id='about'
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar>
          <Typography variant='h6' component='div'>
            Scroll to hide App bar
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ margin: "2rem" }}>
        <Typography variant='h3'>About me</Typography>
        <Typography variant='h1'>Elias Lopez</Typography>
        <Typography sx={{ color: "#4D5BCE" }} variant='h2'>
          &gt; Front - End Developer
        </Typography>
      </Box>
    </Box>
  );
};
