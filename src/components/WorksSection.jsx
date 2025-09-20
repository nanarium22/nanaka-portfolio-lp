// src/components/WorksSection.jsx
import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardSection from './CardSection'; // CardSectionを再利用

function WorksSection({ title }) {
  return (
    <CardSection title={title}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80px', // プレースホルダーの高さ
      }}>
        <IconButton color="primary">
          <ArrowBackIosIcon />
        </IconButton>
        <Box sx={{
          width: '150px',
          height: '80px',
          backgroundColor: '#D0D0D0', // プレースホルダーの色
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

export default WorksSection;
