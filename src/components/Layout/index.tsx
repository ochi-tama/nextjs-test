import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import AppHeader from '../Header'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppHeader />
      <main>
        {/* Hero unit */}
        <HeroContentDiv>{children}</HeroContentDiv>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  )
}

const HeroContentDiv = styled.div`
  backgroundcolor: ${(props) => props.theme.palette.background.paper};
  padding: ${(props) => props.theme.spacing(8, 0, 6)};
`
export default Layout
