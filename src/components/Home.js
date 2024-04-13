import Hrader1 from "./header/header1"
import Hrader2 from "./header/header2"
import Main from "./maincontent/Main"
import Hero from "./herocontent/hero"
import { Box } from "@mui/material"
import Footer from "./footer/footer"
import Scrollbar from "../scroll/scrol"
import Lastheader from "./header/lastheader"
import { CssBaseline } from "@mui/material";
import {ColorModeContext, useMode } from "./../them";
import { ThemeProvider } from "@emotion/react"

export default function Home() {
    const [theme, colorMode] = useMode();
    return(
        <>
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Hrader1/>
            <Hrader2/>
            <Lastheader/>
            <Box bgcolor={theme.palette.bg.main}> 
                <Hero/>
                <Main/>
            </Box>
            <Footer/>
            <Scrollbar/>
        </ThemeProvider>
        </ColorModeContext.Provider>
        </>
    )
}