import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Accordians.css';

const DynamicAccordian = () => {
  return (
    <div>
      <h2>Accordians Using MUI</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant='h6'>React Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

           <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useState Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
         Allows Functional components to manage local state.
         Syntax:const[state,setState]=useState()
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useEffect Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
            The useEffect Hook in react is essential for handling the side effect in Functional
            components.
            {/* syntax:useEffect(()=>{
                //Block of Code
            },[]) */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useContext Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
            Introduced in react version 16.3 the context api provides a way
            to share values like theme,local preference or authentication status
            three stages
            1.create Context
            2.Provider
            3.components
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useRef Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
            Basically used for doing some Manipulation in the dom
            {/* syntax:const VariableName=useRef(initialState) */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useCallback Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
            Is a react hook that returns a memoized version of a callback funtion
            that only changes if one of the dependency has changed
            Avoiding unnessarry re-renders and optimizing the speed of application.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useMemo Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
           UseMemo is a react hook that return a<br>
           </br>
           it is also optimizing the speed of the application
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useReducer Hook</Typography>
        </AccordionSummary>
        <AccordionDetails className='Hooks'>
          <Typography>
            useReducer is a react hook that is used for managing state logic in more complex manner.
            {/* const[state,dispatch]=useReducer(reducer,initialState) */}
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant='h6'>React-router-dom</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
          <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useParam Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
            The useParam hook Allows us to access URL Parameters within our components.
            {/* syntax:const{variableName}=useParam() */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useLocation Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
           It allows you to helps to access the current location objects which respresents
           where the app is currently in terms of the URL.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>useNavigate Hook</Typography>
        </AccordionSummary>
        <AccordionDetails  className='Hooks'>
          <Typography>
            It Provides a function that allows you to programatically navigate to different
            pages in your applications
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default DynamicAccordian
