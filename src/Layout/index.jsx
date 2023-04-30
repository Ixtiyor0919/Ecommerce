import React from "react"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Outlet } from "react-router-dom"
import { Box, CssBaseline } from "@mui/material"
import { AppToolbar, KeyboardFab, KeyboardIcon } from "./Styles"
import KeyboardScroll from "../Components/Scrolls/KeyboardScroll"

export default function UsersLayout(props) {
  return (
    <Box>
      <CssBaseline />
      <AppToolbar id="back-to-top-anchor">
        <Header />
      </AppToolbar>
      <Box>
        <CssBaseline />
        <KeyboardScroll {...props}>
          <KeyboardFab size="small" aria-label="scroll back to top">
            <KeyboardIcon />
          </KeyboardFab>
        </KeyboardScroll>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
