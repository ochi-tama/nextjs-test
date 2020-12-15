import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import styled from 'styled-components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    input: {
      display: 'none'
    }
  })
)

export default function UploadButtons() {
  const classes = useStyles()

  return (
    <RootDiv>
      <HiddenInput
        accept="*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </RootDiv>
  )
}
const HiddenInput = styled.input`
  display: 'none';
`
const RootDiv = styled.div`
  '& > *': {
    margin: ${(props) => props.theme.spacing(1)};
  }
`
