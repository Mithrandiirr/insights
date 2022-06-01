import React from 'react'
import { styled } from '@mui/material/styles';

import MuiAccordion from '@mui/material/Accordion';

import MuiAccordionSummary from '@mui/material/AccordionSummary';

import MuiAccordionDetails from '@mui/material/AccordionDetails';

import PlusIcon from './FAQ/PlusIcon';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  color: 'white',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)' ,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<PlusIcon  />}
    {...props}
  />
))(({ theme }) => ({

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
 
 
}));
 
function FAQ() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className='mt-[307.2px] mb-[26.9725rem]'>
        <div className='mx-[17.885625rem] faq'>
          <h1 className='text-center text-[36px] font-bold leading-[55px] tracking-[-1.5px] mb-[104px]'>Frequently Asked Questions</h1>
          <div>
            
          <Accordion className='bg-transparent'  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className='mb-[21.26px]' aria-controls="panel1d-content" id="panel1d-header">
          <h4 className='ml-[16.53px] text-[21.26px] font-ibm font-medium leading-[35px] tracking-[-0.590498px] '>Question Numero 1</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p className='text-[18.8959px] font-normal leading-[35px] tracking-[-0.590498px] text-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-transparent' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary className='mb-[21.26px] mt-[33.7px]' aria-controls="panel2d-content" id="panel2d-header">
          <h4 className='ml-[16.53px] text-[21.26px] font-ibm font-medium leading-[35px] tracking-[-0.590498px]'>Question Numero 2</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p className='text-[18.8959px] font-normal leading-[35px] tracking-[-0.590498px] text-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-transparent' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary className='mb-[21.26px] mt-[33.7px]' aria-controls="panel3d-content" id="panel3d-header">
          <h4 className='ml-[16.53px] text-[21.26px] font-ibm font-medium leading-[35px] tracking-[-0.590498px]'>Question Numero 3</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p className='text-[18.8959px] font-normal leading-[35px] tracking-[-0.590498px] text-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-transparent' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary className='mb-[21.26px] mt-[33.7px]' aria-controls="panel3d-content" id="panel3d-header">
          <h4 className='ml-[16.53px] text-[21.26px] font-ibm font-medium leading-[35px] tracking-[-0.590498px]'>Question Numero 4</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p className='text-[18.8959px] font-normal leading-[35px] tracking-[-0.590498px] text-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

          </p>
        </AccordionDetails>
      </Accordion>
      </div>
        </div>
    </div>
  )
}

export default FAQ