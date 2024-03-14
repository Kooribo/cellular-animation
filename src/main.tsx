import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import GameOfLife from "./pages/game-of-life/GameOfLife";

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

export default function App() {
	return (
		<BrowserRouter basename="/cellular-animation">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/game-of-life" element={<GameOfLife />} />
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<App />
	</ThemeProvider>
);
