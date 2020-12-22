import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Wrapper>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        component="h1"
        variant="subtitle1"
        align="center"
        color="textSecondary"
      >
        Something here to give the footer a purpose!
        <Copyright />
      </Typography>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  backgroundcolor: ${(props) => props.theme.palette.background.paper};
  margintop: ${(props) => props.theme.spacing(6)};
`
export default Footer
