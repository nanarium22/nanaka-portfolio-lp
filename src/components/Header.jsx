// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // MUIのメニューアイコン

function Header() {
  return (
    <AppBar position="static" sx={{ background: 'none', boxShadow: 'none', marginBottom: '20px' }}>
      <Toolbar sx={{ justifyContent: 'flex-end', paddingRight: 0 }}>
        <IconButton
          size="large"
          edge="end"
          color="inherit" // デフォルトのアイコン色
          aria-label="menu"
          sx={{ color: '#1A2A44' }} // アイコンの色を濃い青に設定
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;