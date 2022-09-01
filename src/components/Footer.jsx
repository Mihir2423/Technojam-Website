import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// icons for the footer

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky"
      style={{ background: 'transparent' }}>
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
