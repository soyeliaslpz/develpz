"use client";

import * as React from "react";
import { Box } from "@mui/material";
import { About } from "@/components/About";

export default function AboutPage() {
  return (
    <Box
      className='slider-container'
      item
      sx={{
        width: "100%",
        display: "grid",
      }}
    >
      <About />
    </Box>
  );
}
