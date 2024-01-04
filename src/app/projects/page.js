"use client";

import * as React from "react";
import { Box } from "@mui/material";
import { Projects } from "@/components/Projects";

export default function ProjectPage() {
  return (
    <Box
      className='slider-container'
      item
      sx={{
        width: "100%",
        display: "grid",
      }}
    >
      <Projects />
    </Box>
  );
}
