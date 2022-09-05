import React from "react";
import Logo from "../assets/logo.png";
import { Box, AppBar, Toolbar, Typography, Grid, IconButton } from "@material-ui/core";
import {TwitterIcon,FacebookIcon,InstagramIcon,LinkedInIcon} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky"
      style={{ background: 'transparent' , justifyContent: 'center' }}>
        <Toolbar>
          <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
          className="footer_grid">
            <Typography variant="h6">
            Copyright © 2022 Team TechnoJam
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <TwitterIcon />
              </IconButton>

                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <LinkedInIcon />
              </IconButton>
            </div>

            <div style={{ paddingLeft: '200px', paddingRight: 'auto' }}>
              <Typography>

                Email us : <a href="mailto:technojam@galgotiasuniversity.edu.in" target="_top">technojam@galgotiasuniversity.edu.in</a>
              </Typography>
            </div>

          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
