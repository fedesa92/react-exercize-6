import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import darkTheme from "./dark-theme";

export default function ThemeProvider({ children }) {
    return (
        <MuiThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
}