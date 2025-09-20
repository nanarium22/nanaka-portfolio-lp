// src/components/ProfileSection.jsx
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

function ProfileSection({ name, handleName }) {
  return (
    <Box sx={{
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '-60px', // ヘッダーと少し重なるように調整
    }}>
      <Avatar
        alt={name}
        src="/your_profile_image.jpg" // あなたのプロフィール画像パス
        sx={{
          width: 100,
          height: 100,
          margin: '0 auto 10px auto',
          border: '3px solid #1A2A44', // 濃い青の枠線
        }}
      />
      <Typography variant="h6" sx={{ color: '#1A2A44', fontWeight: 'bold' }}>
        {name} {handleName}
      </Typography>
    </Box>
  );
}

export default ProfileSection;