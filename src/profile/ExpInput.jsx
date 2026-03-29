import React, { useState } from 'react'
import SelectInput from './SelectInput'
import fields from '../data/profile'
import { Button, Checkbox, Textarea } from '@mantine/core'
import { MonthPickerInput } from '@mantine/dates'

const ExpInput = (props) => {
  const select = fields;

  const [stDate, setStDate] = useState(null); 
  const [endDate, setEndDate] = useState(null); 
  const [checked,setChecked]=useState(false);
  const [desc, setDesc] = useState(
    "i worked in btpas technologies as a software engineer"
  );

  return (
    <div className='flex flex-col gap-3'>
      <div className='text-lg font-semibold'>{props.add?"Add":"Edit"} Experience</div>

      <div className='flex gap-10 [&>*]:w-1/2'>
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>

      <SelectInput {...select[2]} />

      <Textarea
        autosize
        label="Summary"
        placeholder='Enter Summary...'
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
      />

      <div className='flex gap-10 [&>*]:w-1/2'>
        
        {/* Start Date */}
        <MonthPickerInput 
          label="Start Date"
          placeholder="Pick month"
          value={stDate}
          onChange={setStDate}
          maxDate={endDate||undefined}
        />

        {/* End Date */}
        <MonthPickerInput  disabled={checked}
          label="End Date"
          placeholder="Pick month"
          value={endDate}
          onChange={setEndDate}
        minDate={stDate||undefined}
         maxDate={new Date()}
        />
      </div>
       <Checkbox checked={checked} onChange={(event)=>setChecked(event.currentTarget.checked)} autoContrast label="Currently working here" />
        <div className='flex gap-5'>
           <Button onClick={()=>setEdit(false)} color='yellow' variant='outline'>Save</Button>
          <Button onClick={()=>setEdit(false)} color='red.8' variant='light'>Cancel</Button>
        </div>
    </div>
  )
}

export default ExpInput