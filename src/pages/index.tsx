import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import AppHeader from '../components/Header'
import UploadButtons from '../components/Upload/uploadButton'

export const Index = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppHeader />
      <main>
        {/* Hero unit */}
        <HeroContentDiv>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              File Upload Test
            </Typography>
            <HeroButtonDiv>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <UploadButtons></UploadButtons>
                </Grid>
              </Grid>
            </HeroButtonDiv>
          </Container>
        </HeroContentDiv>
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
const HeroButtonDiv = styled.div`
  margintop: ${(props) => props.theme.spacing(4)};
`

export default Index
