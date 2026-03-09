import React from 'react'
import SelectInput from './SelectInput'
import { fields } from '../data/Data'
import { Button, TagsInput } from '@mantine/core';
import RichTextEditer from './RichTextEditer';
import { IconArrowLeft } from '@tabler/icons-react';

const PostJob = () => {
    const select=fields;
  return (
    <div className='w-4/5 mx-auto'>
        <div className='text-2xl font-semibold mb-5'>Post a Job</div>
        <div className='flex flex-col gap-8'>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput {...select[0]}/>
                <SelectInput {...select[1]} />
            </div>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput {...select[2]}/>
                <SelectInput {...select[3]} />
            </div>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput {...select[4]}/>
                <SelectInput {...select[5]} />
            </div>
            <TagsInput label="Skills" placeholder='Enter skill' splitChars={[',',' ','|']}  acceptValueOnBlur/>
        </div>
        <div className='[&_button[data-active="true"]]:!text-amber-400 [&_button[data-active="true"]]:!bg-amber-50'>
            <div className='text-sm font-medium'>Job Description</div>
            <RichTextEditer/>
        </div>
        <div className='flex gap-4'>
              <Button  color='yellow' variant='light' >Publish job</Button>
              <Button color='yellow' variant='light' >Save as draft</Button>
        </div>
    </div> 
  )
}

export default PostJob
