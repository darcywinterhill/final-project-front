import React from 'react'
/* import { useSelector } from 'react-redux' */
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
/* import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography' */
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const Pages = [
  {
  },
  {
  },
  {

  },
  {
  },
  {
  },
];



const useStyles = makeStyles((/* theme */) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
}))

const Stepper = () => {

  /* const messages = useSelector(store => store.messages.messages).length */

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Pages.length;


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  };

  return (
    <div className={classes.root}>
      <MobileStepper
        steps={maxSteps}
        position='static'
        variant='text'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Nästa
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button
            size='small'
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Tillbaka
          </Button>
        }
      />
    </div>
  )
}

export default Stepper