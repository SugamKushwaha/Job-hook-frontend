import React from 'react'
import logo1 from "../FindIcons/micro.jpg";
import { IconBookmark, IconClockHour3 } from '@tabler/icons-react';
import { Divider, Text } from '@mantine/core';
import { Link } from 'react-router-dom';


const JobCard = (props) => {
  return (
    <Link to="/jobs" className='bg-zinc-800 p-4 w-87 flex flex-col gap-4 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-400'>
       <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-2 bg-zinc-800'>
            <img className='h-7' src={logo1} alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold'>{props.jobTitle}</div>
             <div className='text-xs text-amber-50'>{props.company} &#x2022; {props.applicants} Applicants</div>
           </div>
         </div>
         <IconBookmark className='text-zinc-400 cursor-pointer' />
       </div>
       <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-zinc-700 [&>div]:text-amber-300 [&>div]:rounded-lg text-xs'>
           <div>{props.experience}</div>
           <div>{props.jobType}</div>
           <div>{props.location}</div>
       </div>
       <Text className='!text-xs text-justify !text-amber-50' lineClamp={3}>
        {props.description}
       </Text>
       <div className='flex justify-between'>
         <div className='font-semibold text-zinc-100'>
          &#8377;{props.package}
         </div>
         <div className='flex gap-1 text-xs items-center text-zinc-500'>
          <IconClockHour3 className='h-5 w-5' stroke={1.5} /> {props.postedDaysAgo} Day ago.
         </div>
       </div>
    </Link>
  )
}

export default JobCard
