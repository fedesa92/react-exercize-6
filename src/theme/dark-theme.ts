import { createTheme } from '@mui/material/styles';
import { grey, deepPurple, teal } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal[400],
      light: teal[300],
      dark: teal[700],
      contrastText: '#fff',
    },
    secondary: {
      main: deepPurple[400],
      light: deepPurple[300],
      dark: deepPurple[700],
      contrastText: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#ffffff',
      secondary: grey[400],
    }
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 500, fontSize: '1.75rem' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', color: grey[400] },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 0px 10px rgba(0, 255, 255, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    }
  }
});

export default darkTheme;