import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
	palette: {
		primary: {
			main: "rgba(255, 255, 255, 0.87)",
		},
		background: {
			default: "#1f1f1f",
		},
	},
	typography: {
		fontFamily: "Inter, Ubuntu",
	},
});

//TODO add light theme later
const lightTheme = createTheme({
	palette: {
		primary: {
			main: "#1f1f1f",
		},
		background: {
			default: "#E3E6E6",
		},
	},
	typography: {
		fontFamily: "Ubuntu",
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<App />
	</ThemeProvider>
);
