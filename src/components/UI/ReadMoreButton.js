import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styled from 'styled-components/macro'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }
}))

const ReadMoreButton = () => {
  const classes = useStyles();

  return (
    <Button
      size='small'
      className={classes.margin}
    >
      LÄS MER
    </Button>
  )
}

export default ReadMoreButton
