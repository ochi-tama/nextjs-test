import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import UploadButtons from '../components/Upload/uploadButton'

export const Index = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

const HeroButtonDiv = styled.div`
  margintop: ${(props) => props.theme.spacing(4)};
`

export default Index
