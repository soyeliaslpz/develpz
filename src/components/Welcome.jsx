import React from "react";
import { Box, Typography } from "@mui/material";

export const Welcome = () => {
  return (
    <Box
      id='home'
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        margin: "2rem",
      }}
    >
      <Typography variant='h3'>Hi all, I am</Typography>
      <Typography variant='h1'>Elias Lopez</Typography>
      <Typography sx={{ color: "#4D5BCE" }} variant='h2'>
        &gt; Front - End Developer
      </Typography>
      <br />
      <br />

      <Typography variant='h6'>
        <span style={{ color: "#4D5BCE" }}>const</span>{" "}
        <span style={{ color: "#43D9AD" }}>GITHUB</span> ={" "}
        <a
          href='https://github.com/soyeliaslpz'
          style={{ color: "#E99287" }}
          target='_blank'
        >
          &quot;https://github.com/soyeliaslpz&quot;
        </a>{" "}
      </Typography>
      <Typography variant='h6'>
        <span style={{ color: "#4D5BCE" }}>const</span>{" "}
        <span style={{ color: "#43D9AD" }}>LINKEDIN</span> ={" "}
        <a
          href='https://www.linkedin.com/in/elias-lopez-402673211'
          style={{ color: "#E99287" }}
          target='_blank'
        >
          &quot;https://www.linkedin.com/in/elias-lopez-402673211&quot;
        </a>{" "}
      </Typography>
    </Box>
  );
};
