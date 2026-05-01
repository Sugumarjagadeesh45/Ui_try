import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, useScrollTrigger, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, User, Search, X } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['Explore', 'Features', 'Community', 'About'];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          background: trigger ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
          backdropFilter: trigger ? 'blur(15px)' : 'none',
          boxShadow: trigger ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: trigger ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: trigger ? 70 : 90, transition: 'height 0.4s' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  fontWeight: 900,
                  letterSpacing: '-1px',
                  background: 'linear-gradient(45deg, #FF4D4D, #FF8E53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '1.75rem'
                }}
              >
                SYNCZO
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#94a3b8',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    position: 'relative',
                    '&:hover': {
                      color: '#fff',
                      background: 'transparent',
                      '&::after': {
                        width: '100%'
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      background: '#FF4D4D',
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 2 } }}>
              <IconButton sx={{ color: '#fff', '&:hover': { background: 'rgba(255, 255, 255, 0.05)' } }}>
                <Search size={20} />
              </IconButton>
              
              {!isMobile && (
                <>
                  <IconButton sx={{ color: '#fff', '&:hover': { background: 'rgba(255, 255, 255, 0.05)' } }}>
                    <User size={20} />
                  </IconButton>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: '12px',
                      px: 3,
                      py: 1,
                      background: 'linear-gradient(45deg, #FF4D4D, #FF8E53)',
                      color: '#fff',
                      fontWeight: 700,
                      textTransform: 'none',
                      boxShadow: '0 8px 20px rgba(255, 77, 77, 0.25)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 25px rgba(255, 77, 77, 0.35)',
                        background: 'linear-gradient(45deg, #FF4D4D, #FF8E53)',
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </>
              )}

              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{ color: '#fff', ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '300px',
            background: '#0f172a',
            color: '#fff',
            p: 3
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
            <X size={24} />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding sx={{ mb: 2 }}>
              <Button
                fullWidth
                sx={{
                  color: '#fff',
                  justifyContent: 'flex-start',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  p: 1.5,
                  borderRadius: '12px',
                  '&:hover': { background: 'rgba(255, 255, 255, 0.05)' }
                }}
              >
                {item}
              </Button>
            </ListItem>
          ))}
          <Box sx={{ mt: 4 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                borderRadius: '12px',
                py: 2,
                background: 'linear-gradient(45deg, #FF4D4D, #FF8E53)',
                color: '#fff',
                fontWeight: 700,
                textTransform: 'none',
              }}
            >
              Get Started
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
