import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap, Globe, Rocket, Heart, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const WelcomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: '#0f172a', color: '#fff', overflow: 'hidden' }}>
      <Helmet>
        <title>Synczo | The Future of Connection</title>
        <meta name="description" content="Experience the next generation of social interaction. Fast, secure, and designed for you." />
      </Helmet>

      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 15, md: 25 }, 
          pb: { xs: 10, md: 20 }, 
          position: 'relative',
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 77, 77, 0.15) 0%, transparent 50%)'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7} data-aos="fade-right">
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                <Box sx={{ background: 'rgba(255, 77, 77, 0.1)', p: 0.5, borderRadius: 1, display: 'flex' }}>
                  <Sparkles size={16} color="#FF4D4D" />
                </Box>
                <Typography variant="subtitle2" sx={{ color: '#FF4D4D', fontWeight: 700, letterSpacing: 2 }}>
                  ELITE SOCIAL PLATFORM
                </Typography>
              </Stack>

              <Typography variant="h1" sx={{ 
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, 
                fontWeight: 900, 
                lineHeight: 1.1,
                mb: 3,
                background: 'linear-gradient(to right, #fff, #94a3b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Elevate Your <br />
                <span style={{ 
                  background: 'linear-gradient(45deg, #FF4D4D, #FF8E53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Digital Presence</span>
              </Typography>

              <Typography variant="h6" sx={{ color: '#94a3b8', mb: 5, fontWeight: 400, maxWidth: '600px', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                Join the most exclusive community of creators and visionaries. Secure, lightning-fast, and breathtakingly beautiful.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth={isMobile}
                  endIcon={<ArrowRight />}
                  sx={{
                    background: 'linear-gradient(45deg, #FF4D4D, #FF8E53)',
                    px: 4,
                    py: 2,
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 10px 20px rgba(255, 77, 77, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 15px 25px rgba(255, 77, 77, 0.4)',
                    }
                  }}
                >
                  Join the Elite
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth={isMobile}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    px: 4,
                    py: 2,
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#fff',
                      background: 'rgba(255, 255, 255, 0.05)',
                    }
                  }}
                >
                  Explore Features
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5} data-aos="zoom-in" data-aos-delay="200">
              <Box 
                sx={{ 
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '120%',
                    height: '120%',
                    background: 'radial-gradient(circle, rgba(255, 77, 77, 0.15) 0%, transparent 70%)',
                    zIndex: 0
                  }
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                  alt="Elite Experience"
                  sx={{
                    width: '100%',
                    borderRadius: '32px',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
                    position: 'relative',
                    zIndex: 1,
                    transform: { md: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' },
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Features Grid */}
          <Box sx={{ mt: { xs: 10, md: 20 } }}>
            <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 10 }} data-aos="fade-up">
              Why Choose <span style={{ color: '#FF4D4D' }}>Synczo</span>?
            </Typography>
            <Grid container spacing={4}>
              {[
                { icon: <Zap color="#FFD700" size={32} />, title: 'Ultra Speed', desc: 'Experience instantaneous interactions with our edge-optimized network.', delay: 0 },
                { icon: <Shield color="#4ade80" size={32} />, title: 'End-to-End Encryption', desc: 'Your privacy is our priority. Your data never leaves your sight.', delay: 100 },
                { icon: <Globe color="#60a5fa" size={32} />, title: 'Global Connectivity', desc: 'Reach anyone, anywhere, with seamless translation and low latency.', delay: 200 },
                { icon: <Rocket color="#f472b6" size={32} />, title: 'Advanced Tools', desc: 'Professional grade tools for creators to amplify their message.', delay: 300 },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} data-aos="fade-up" data-aos-delay={feature.delay}>
                  <Paper
                    sx={{
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '24px',
                      height: '100%',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        transform: 'translateY(-10px)',
                        borderColor: 'rgba(255, 77, 77, 0.3)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                      }
                    }}
                  >
                    <Box sx={{ mb: 3, background: 'rgba(255, 255, 255, 0.05)', width: 'fit-content', p: 2, borderRadius: '16px' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>{feature.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.6 }}>{feature.desc}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Social Proof Section */}
          <Box sx={{ mt: { xs: 15, md: 25 }, pb: 10 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} data-aos="fade-right">
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 4 }}>
                  Trusted by over <br />
                  <span style={{ color: '#FF4D4D' }}>2 Million</span> Visionaries
                </Typography>
                <Typography sx={{ color: '#94a3b8', fontSize: '1.1rem', mb: 4 }}>
                  Join the movement that is redefining digital connection. Our users are at the heart of everything we build.
                </Typography>
                <Stack direction="row" spacing={4}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>99.9%</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>Uptime</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>4.9/5</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>Rating</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>24/7</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>Support</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-left">
                <Paper sx={{ p: 4, borderRadius: '32px', background: 'linear-gradient(135deg, rgba(255, 77, 77, 0.1) 0%, rgba(255, 142, 83, 0.1) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Stack spacing={3}>
                    {[1, 2, 3].map((i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'center', p: 2, background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px' }}>
                        <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: '#334155' }} />
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Visionary User #{i}</Typography>
                          <Typography variant="caption" sx={{ color: '#64748b' }}>"The best platform I've ever used. Simply stunning."</Typography>
                        </Box>
                        <Box sx={{ ml: 'auto', display: 'flex' }}>
                          {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="#FFD700" color="#FFD700" />)}
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WelcomePage;
