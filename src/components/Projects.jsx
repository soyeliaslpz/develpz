import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const Projects = () => {
  const projectsInfo = [
    {
      title: "Project // La Puente Advanced Dentistry",
      description:
        "At La Puente Advanced Dentistry, we are devoted to offering patients an unparalleled oral health experience. We believe in providing minimally invasive and comprehensive dentistry while maintaining a partnership with our patients to boost lifelong dental health",
      image:
        "https://images.unsplash.com/photo-1504349127815-111111111111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      link: "https://www.thelapuentedentist.com/",
    },
    {
      title: "Project // Mammo",
      description:
        "Mammo.com is a trusted partner for healthcare facilities seeking digital mammography solutions. We are powered by UMAC Radiology Sales and Service, a leading provider of radiology services, parts, and support",
      image:
        "https://images.unsplash.com/photo-1504349127815-111111111111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      link: "https://www.mammo.com/",
    },
    {
      title: "TBCC Dashboard",
      description:
        "Dashboard used as a tool for tbcc customers, where they can get information about their status with the company and notifications.",
      image:
        "https://images.unsplash.com/photo-1504349127815-111111111111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      link: "https://www.google.com",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://images.unsplash.com/photo-1504349127815-111111111111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      link: "https://www.google.com",
    },
  ];

  return (
    <Box
      id='projects'
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(30rem,1fr))",
        width: "100%",
        height: "100%",
        gap: "2rem",
        padding: "3rem",
      }}
    >
      {projectsInfo.map((project, index) => (
        <Box className='item' key={index}>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              component='img'
              height='250'
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {project.title}
              </Typography>
              <Typography variant='body2' color='text.secondary' component='p'>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='small'
                color='primary'
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                view-project
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}

      {/* <Typography variant='h3'>About me</Typography>
      <Typography variant='h1'>Elias Lopez</Typography>
      <Typography sx={{ color: "#4D5BCE" }} variant='h2'>
        &gt; Front - End Developer
      </Typography> */}
    </Box>
  );
};
