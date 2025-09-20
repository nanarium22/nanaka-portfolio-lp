import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// src/App.jsx
import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import CardSection from './components/CardSection';
import WorksSection from './components/WorksSection'; // 作品物セクション用

// テーマカラーを設定するためのThemeProviderとcreateThemeをインポート
import { ThemeProvider, createTheme } from '@mui/material/styles';

// カスタムテーマの定義
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
      'Noto Sans JP', // 日本語フォントを優先
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontSize: '1rem', // セクションタイトルのサイズ
      fontWeight: 'bold',
      color: '#1A2A44',
    },
  },
  components: {
    MuiPaper: { // Cardコンポーネントの親
      styleOverrides: {
        root: {
          borderRadius: '8px', // カードの角を丸く
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* MUIの基本CSSリセット */}
      <Box sx={{
        backgroundColor: '#EEEEEE', // 全体の背景色（ご提示のグレー部分）
        minHeight: '100vh',
        padding: '20px 0', // 上下にパディング
      }}>
        <Container maxWidth="sm"> {/* スマートフォンサイズに制限 */}
          <Header />
          <ProfileSection name="井口奈々花" handleName="/Mille" />
          <CardSection title="所属 / 活動">
            <Typography variant="body1">お茶の水女子大学</Typography>
          </CardSection>
          <WorksSection title="製作物" /> {/* 作品物セクション */}
          <CardSection title="スキル">
            {/* スキルの内容をここに追加 */}
          </CardSection>
          <CardSection title="働きたいこと">
            {/* 働きたいことの内容をここに追加 */}
          </CardSection>
          <CardSection title="働きたいこと" isLarge={true}> {/* 2つ目の「働きたいこと」は高さがあるため */}
            {/* 働きたいことの内容をここに追加 */}
          </CardSection>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
