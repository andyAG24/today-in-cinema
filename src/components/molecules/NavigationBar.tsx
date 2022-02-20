import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { navigationLinks } from 'utils/constants/navigationLinks';

export const NavigationBar = () => {
  const navigateTo = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2 }}
          >
            АФИША
          </Typography>
          <Box>
            {navigationLinks.map(({ title, key, path }) => (
              <Button
                key={key}
                onClick={() => navigateTo(path)}
                sx={{ my: 2, color: 'white', }} 
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
