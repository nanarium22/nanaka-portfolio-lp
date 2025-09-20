import React, { useState } from 'react';
import { Box, Container, CssBaseline, Typography, Paper, AppBar, Toolbar, IconButton, Avatar, Drawer, List, ListItem, ListItemButton, ListItemText, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#243258',
    },
    secondary: {
      main: '#007df5',
    },
    background: {
      default: '#fcfdf9',
      paper: '#fcfdf9',
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#1A2A44',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

function Header({ toggleDrawer, sections }) {
  return (
    <AppBar position="static" sx={{ background: 'none', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'flex-end', paddingRight: 0 }}>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ color: '#1A2A44' }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={sections.drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {sections.names.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => {
                const element = document.getElementById(sections.ids[text]);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                toggleDrawer(false)();
              }}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

function ProfileSection({ name, handleName }) {
  return (
    <Box id="profile" sx={{ textAlign: 'center', marginBottom: '40px', marginTop: '-60px' }}>
      <Avatar
        alt={name}
        src="https://placehold.co/100x100/A2D2FF/000000?text=Profile"
        sx={{
          width: 100,
          height: 100,
          margin: '0 auto 10px auto',
          border: '3px solid #1A2A44',
        }}
      />
      <Typography variant="h6" sx={{ color: '#1A2A44', fontWeight: 'bold' }}>
        {name} {handleName}
      </Typography>
    </Box>
  );
}

function CardSection({ title, children, isLarge = false, id }) {
  return (
    <Box id={id} sx={{ marginBottom: '20px', position: 'relative' }}>
      <Typography variant="h6" sx={{
        position: 'absolute',
        top: '-15px',
        left: '20px',
        backgroundColor: 'background.paper',
        padding: '0 8px',
        zIndex: 1,
        fontSize: '0.9rem',
        color: '#1A2A44',
        fontWeight: 'normal',
      }}>
        {title}
      </Typography>
      <Paper sx={{
        padding: '30px 20px 20px',
        border: '2px solid #1A2A44',
        position: 'relative',
        minHeight: isLarge ? '250px' : '120px',
        backgroundColor: 'background.paper',
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: '5px',
          left: '5px',
          right: '5px',
          bottom: '5px',
          border: '2px solid #4A90E2',
          pointerEvents: 'none',
        },
      }}>
        {children}
      </Paper>
    </Box>
  );
}

function WorksSection({ title, id }) {
  const workItems = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <CardSection title={title} id={id}>
      <Grid container spacing={2}>
        {workItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={item}>
            <Box sx={{
              width: '100%',
              height: '150px',
              backgroundColor: '#D0D0D0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              <Typography variant="body2">作品 {item}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </CardSection>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const sections = {
    drawerOpen: drawerOpen,
    names: ['プロフィール', '所属 / 活動', '制作物', 'スキル', '働きたいこと'],
    ids: {
      'プロフィール': 'profile',
      '所属 / 活動': 'affiliation',
      '制作物': 'works',
      'スキル': 'skills',
      '働きたいこと': 'work-goals'
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        backgroundColor: '#EEEEEE',
        minHeight: '100vh',
        padding: { xs: '10px', sm: '20px 0' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Container maxWidth="lg">
          <Header toggleDrawer={toggleDrawer} sections={sections} />
          <ProfileSection name="井口奈々花" handleName="/Mille" />
          <CardSection id="affiliation" title="所属 / 活動">
            <Typography variant="body1">お茶の水女子大学</Typography>
          </CardSection>
          <WorksSection id="works" title="制作物" />
          <CardSection id="skills" title="スキル">
            <Typography variant="body1">ここにあなたのスキルを記述します。</Typography>
          </CardSection>
          <CardSection id="work-goals" title="働きたいこと">
            <Typography variant="body1">ここにあなたが働きたいことを記述します。</Typography>
          </CardSection>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
