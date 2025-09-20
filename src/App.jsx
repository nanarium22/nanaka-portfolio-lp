import React from 'react';
import { Box, Container, CssBaseline, Typography, Paper, AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ThemeProvider, createTheme } from '@mui/material/styles';

// カスタムテーマの定義
const theme = createTheme({
  palette: {
    primary: {
      main: '#243258', // 濃い青色
    },
    secondary: {
      main: '#007df5', // 水色
    },
    background: {
      default: '#fcfdf9', // 全体の背景色
      paper: '#fcfdf9', // カードの背景色
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

// 各セクションのコンポーネントを統合
function Header() {
  return (
    <AppBar position="static" sx={{ background: 'none', boxShadow: 'none', marginBottom: '20px' }}>
      <Toolbar sx={{ justifyContent: 'flex-end', paddingRight: 0 }}>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ color: '#1A2A44' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function ProfileSection({ name, handleName }) {
  return (
    <Box sx={{
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '-60px',
    }}>
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

function CardSection({ title, children, isLarge = false }) {
  return (
    <Box sx={{ marginBottom: '20px', position: 'relative' }}>
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

function WorksSection({ title }) {
  return (
    <CardSection title={title}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80px',
      }}>
        <IconButton color="primary">
          <ArrowBackIosIcon />
        </IconButton>
        <Box sx={{
          width: '150px',
          height: '80px',
          backgroundColor: '#D0D0D0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          borderRadius: '4px',
          margin: '0 10px',
        }}>
          <Typography variant="body2">作品プレビュー</Typography>
        </Box>
        <IconButton color="primary">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </CardSection>
  );
}

// メインのAppコンポーネント
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        backgroundColor: '#EEEEEE',
        minHeight: '100vh',
        padding: '20px 0',
      }}>
        <Container maxWidth="sm">
          <Header />
          <ProfileSection name="井口奈々花" handleName="/Mille" />
          <CardSection title="所属 / 活動">
            <Typography variant="body1">お茶の水女子大学</Typography>
          </CardSection>
          <WorksSection title="製作物" />
          <CardSection title="スキル">
            <Typography variant="body1">ここにあなたのスキルを記述します。</Typography>
          </CardSection>
          <CardSection title="働きたいこと">
            <Typography variant="body1">ここにあなたが働きたいことを記述します。</Typography>
          </CardSection>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
