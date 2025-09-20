// src/components/CardSection.jsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function CardSection({ title, children, isLarge = false }) {
  return (
    <Box sx={{ marginBottom: '20px', position: 'relative' }}>
      {/* セクションタイトル */}
      <Typography variant="h6" sx={{
        position: 'absolute',
        top: '-15px', // カードの上部に配置
        left: '20px',
        backgroundColor: 'white', // 背景を白にして下のカードが見えないように
        padding: '0 8px',
        zIndex: 1, // カードより手前に表示
        fontSize: '0.9rem', // 少し小さめのフォント
        color: '#1A2A44', // 濃い青
        fontWeight: 'normal',
      }}>
        {title}
      </Typography>

      {/* カード本体 (MUIのPaperコンポーネントを使用) */}
      <Paper sx={{
        padding: '30px 20px 20px', // タイトルスペース分パディングを調整
        border: '2px solid #1A2A44', // 濃い青の枠線
        position: 'relative',
        minHeight: isLarge ? '250px' : '120px', // isLargeがtrueの場合、高さを高くする
        backgroundColor: 'background.paper', // 背景色を白に
        '&::before': { // 水色の枠線風の装飾
          content: '""',
          display: 'block',
          position: 'absolute',
          top: '5px',
          left: '5px',
          right: '5px',
          bottom: '5px',
          border: '2px solid #4A90E2', // 水色の枠線
          pointerEvents: 'none', // クリックイベントを妨げないように
        },
      }}>
        {children} {/* ここに子要素（中身）が表示されます */}
      </Paper>
    </Box>
  );
}

export default CardSection;