import React, { useState } from 'react'
import { dropdownData, searchFields } from '../Data/Data'
import {  Input, RangeSlider } from '@mantine/core'
import MultiInput from '../findJobs/MultiInput';
import { IconUserCircle } from '@tabler/icons-react';

const SearchTelent = () => {
   const [value, setValue] = useState([1, 50]);
  

  return (
    <div className="px-5 py-8 !text-amber-50 flex gap-4 items-center">

      <div className='flex items-center'>
        <div className='text-amber-400 bg-zinc-800 rounded-full p-1 mr-2'><IconUserCircle size={20} /></div>
      </div>

       <Input className="[&_input]:!placeholder-zinc-500" variant='unstyled' placeholder="Talent Name" />

      {searchFields.map((item, index) => (
        <div key={index} className="w-1/5">
          <MultiInput title={item.title} icon={item.icon} options={item.options} />
        </div>
      ))}

      <div className="w-1/5 ">
      <div className='flex justify-between'>
        <div>Selley</div>
        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
      </div>
        <RangeSlider color='yellow'  size="xs" value={value} labelTransitionProps={{transition:'skew-down',duration:150,
          timingFunction:'linear'
        }} onChange={setValue} />
      </div>

    </div>
  );
};

export default SearchTelent;
