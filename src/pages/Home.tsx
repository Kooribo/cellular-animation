import { useEffect, useState } from "react";
import { Box, Grid, Link, Stack, Typography, Button } from "@mui/material";

function Home() {
	const [adapter, setAdapter] = useState(true);

	useEffect(() => {
		const getAdapter = async () => {
			if (!("gpu" in navigator)) {
				console.error("User agent doesn't support WebGPU.");
				return setAdapter(false);
			}

			const adapter = await navigator.gpu.requestAdapter({
				powerPreference: "high-performance",
			});
			const device = await adapter?.requestDevice();
			//set context current device

			console.log(adapter?.requestAdapterInfo());
			return setAdapter(true);
		};
		getAdapter();
	}, []);

	const webGpuLink =
		"https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API#browser_compatibility";

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			mt={3}
		>
			<Typography
				textAlign="center"
				color="primary.main"
				gutterBottom
				sx={{ typography: { xs: "h4", md: "h2" } }}
			>
				Cellular Automata
			</Typography>
			<Stack m={{ xs: 4, md: 6 }} gap={6}>
				{!adapter && (
					<Typography
						fontSize="large"
						border="5px solid #242424"
						color="warning.light"
						textAlign="center"
					>
						It seems like your current browser does not support{" "}
						<Link
							href={webGpuLink}
							underline="hover"
							target="_blank"
							rel="noreferrer"
							color="error.light"
						>
							WebGPU
						</Link>
					</Typography>
				)}
				<Grid container direction="row" spacing={{ xs: 4, md: 7 }}>
					<Grid item xs={12} md={6}>
						<Button
							style={{ height: "125px" }}
							variant="contained"
							href="game-of-life"
							fullWidth
						>
							<Typography textAlign="center">Game of life</Typography>
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Button
							style={{ height: "125px" }}
							variant="contained"
							disabled
							fullWidth
						>
							<Typography textAlign="center">Wolfram</Typography>
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Button
							style={{ height: "125px" }}
							variant="contained"
							disabled
							fullWidth
						>
							<Typography textAlign="center">Langton</Typography>
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Button
							style={{ height: "125px" }}
							variant="contained"
							disabled
							fullWidth
						>
							<Typography textAlign="center">Nagelschreckenberg</Typography>
						</Button>
					</Grid>
				</Grid>
			</Stack>
		</Box>
	);
}

export default Home;
