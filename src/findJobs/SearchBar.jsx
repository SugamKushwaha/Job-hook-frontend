import React, { useState } from 'react'
import MultiInput from './MultiInput'
import { dropdownData, searchFields } from '../Data/Data'
import {  RangeSlider } from '@mantine/core'

const SearchBar = () => {
   const [value, setValue] = useState([1, 50]);
  

  return (
    <div className="flex gap-4 items-center">

      {dropdownData.map((item, index) => (
        <div key={index} className="w-1/5">
          <MultiInput {...item} />
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

export default SearchBar;
