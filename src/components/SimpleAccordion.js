import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components/macro'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const SimpleAccordion = ({ children }) => {
  const classes = useStyles()

  return (

    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>
            Tidigare sevärdheter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PostItContainer>
            {children}
          </PostItContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default SimpleAccordion

const PostItContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
`