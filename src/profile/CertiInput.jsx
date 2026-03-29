import { Button, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import SelectInput from './SelectInput'
import { certifications } from '../data/profile'
import { MonthPickerInput } from '@mantine/dates'

const CertiInput = (props) => {
    const select = certifications;
  const [issueDate, setIssueDate] = useState(null); 

  return (
    <div className='flex flex-col gap-3'>
      <div className='font-semibold text-lg'>Add Certifications</div>
      <div className='flex gap-10 [&>*]:w-1/2'>
        <TextInput label="title" withAsterisk placeholder='Enter title' />
         <SelectInput {...select[1]} />
      </div>
       <div className='flex gap-10 [&>*]:w-1/2'>
       <MonthPickerInput  
                 label="End Date"
                 placeholder="Pick month"
                 value={issueDate}
                 onChange={setIssueDate}
                maxDate={new Date()}
               />
        <TextInput withAsterisk label="Certificate Id" placeholder='Enter title' />
         
      </div>
      <div className='flex gap-5'>
        <Button onClick={()=>props.setEdit(false)} color='yellow' variant='outline'>Save</Button>
         <Button onClick={()=>props.setEdit(false)} color='red.8' variant='light'>Cancel</Button>
      </div>
    </div>
  )
}

export default CertiInput
