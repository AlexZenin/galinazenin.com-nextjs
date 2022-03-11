import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "../Header"
import MobileHeader from '../MobileHeader'
import Footer from '../Footer'
import "typeface-open-sans"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  p {
    color: #646464;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 82px 1fr max-content;
  min-height: 100vh;
`

const theme = {
  lightOrange: "#EEB67F", 
  darkOrange: "#EC7F00", 
  headerGrey: "#4C4C4C", 
  logoGrey: "#9a9a9a",
  lightBackground: "#EAF0F3", 
  articleHeadingGrey: "#646464", 
  articleSubheadingGrey: "#979797"
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Grid>
        <Header />
        <main>
          <MobileHeader />
          { children }
        </main>
        <Footer />
      </Grid>
    </>
  </ThemeProvider>
)

export default Layout