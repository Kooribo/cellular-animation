import { useEffect, useState } from "react";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";

function App() {
	const [adapter, setAdapter] = useState(false);

	useEffect(() => {
		const getAdapter = async () => {
			if (!("gpu" in navigator)) {
				console.error("User agent doesn’t support WebGPU.");
				return setAdapter(false);
			}

			const adapter = await navigator.gpu?.requestAdapter({
				powerPreference: "high-performance",
			});
			const device = await adapter?.requestDevice();
			//set context current device

			console.log(adapter.requestAdapterInfo());
			return setAdapter(true);
		};
		getAdapter();
	}, []);

	//https://developer.chrome.com/docs/web-platform/webgpu?hl=de

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
				variant="h2"
				textAlign="center"
				color="primary.main"
				gutterBottom
			>
				Cellular Automata
			</Typography>
			<Stack sx={{ m: 2 }} gap={6}>
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
				<Grid container spacing={3} direction="row">
					<Grid item xs={12} md={6}>
						<Box sx={{ p: 2, border: "1px dashed grey" }}></Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box sx={{ p: 2, border: "1px dashed grey" }}></Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box sx={{ p: 2, border: "1px dashed grey" }}></Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box sx={{ p: 2, border: "1px dashed grey" }}></Box>
					</Grid>
				</Grid>
			</Stack>
		</Box>
	);
}

export default App;
