import React from 'react'
import logo1 from "../FindIcons/micro.jpg";
import { IconHeart, IconMapPin } from '@tabler/icons-react';
import { Button, Divider, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const TalentCard = (props) => {
  return (
       <div className='bg-zinc-800 p-4 w-87 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-400'>
       <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-2 bg-zinc-800 rounded-full'>
            <img className='h-7' src={logo1} alt="" /></div>
           <div> 
             <div className='font-semibold text-lg'>{props.name}</div>
             <div className='text-sm text-amber-50'>{props.role} &#x2022; {props.company}</div>
           </div>
         </div>
         <IconHeart className='text-zinc-400 cursor-pointer text-zinc-700' stroke={1.5}  />
       </div>
       <div className='flex gap-2'>

          {
            props.topSkills?.map((skill,index)=><div key={index} className=' p-2 py-1  bg-zinc-700 text-amber-300 rounded-lg     text-xs'>
             {skill} </div>)
          }
                
       </div>
       <Text className='!text-xs text-justify !text-amber-50' lineClamp={3}>
        {props.about}
       </Text>
       <div className='flex justify-between'>
         <div className='font-semibold text-zinc-100'>
          {props. expectedCtc}
         </div>
         <div className='flex gap-1 text-xs items-center text-zinc-500'>
          <IconMapPin className='h-5 w-5' stroke={1.5} /> {props.location}
         </div>
       </div>
       <Divider/>
       <div className='flex justify-between' >
         <Link to="/talent-profile">
         <Button color='yellow' variant='outline' fullWidth>Profile</Button>
         </Link>
        <div>
          <Button color='yellow' variant='light' fullWidth>Message</Button>
        </div>
       </div>
    </div>
  )
}

export default TalentCard
