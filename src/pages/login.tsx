import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import FirebaseAuth from '../components/Auth/FirebaseAuth'
import Layout from '../components/Layout'

export const Login = () => {
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
          Please Sign in
        </Typography>
        <HeroButtonDiv>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <FirebaseAuth />
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

export default Login
