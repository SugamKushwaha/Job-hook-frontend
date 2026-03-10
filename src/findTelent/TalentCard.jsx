import React, { useRef, useState } from 'react'
import logo1 from "../FindIcons/micro.jpg";
import { IconCalendar, IconHeart, IconMapPin, IconClock } from '@tabler/icons-react';
import { Button, Divider, Modal, Text, ActionIcon } from '@mantine/core';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/dates/styles.css';

const TalentCard = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState(null);
  const ref = useRef(null);

  const pickerControl = (
    <ActionIcon variant="subtle" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} />
    </ActionIcon>
  );

  return (
    <div className='bg-zinc-800 p-4 w-87 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-400'>
      
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-zinc-800 rounded-full'>
            <img className='h-7' src={logo1} alt="" />
          </div>
          <div> 
            <div className='font-semibold text-lg'>{props.name}</div>
            <div className='text-sm text-amber-50'>
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className='text-zinc-400 cursor-pointer' stroke={1.5} />
      </div>

      <div className='flex gap-2'>
        {props.topSkills?.map((skill, index) => (
          <div key={index} className='p-2 py-1 bg-zinc-700 text-amber-300 rounded-lg text-xs'>
            {skill}
          </div>
        ))}
      </div>

      <Text className='!text-xs text-justify !text-amber-50' lineClamp={3}>
        {props.about}
      </Text>

      {
        props.invited?<div className='flex gap-5'>
          <IconCalendar stroke={1.5}/>Interview: august 27, 2024 10:00 pm
        </div>:<div className='flex justify-between'>
        <div className='font-semibold text-zinc-100'>
          {props.expectedCtc}
        </div>
        <div className='flex gap-1 text-xs items-center text-zinc-500'>
          <IconMapPin className='h-5 w-5' stroke={1.5} /> {props.location}
        </div>
      </div>
      }
      

      <Divider/>

      <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
      {
       !props.invited &&<>
          <Link to="/talent-profile">
          <Button color='yellow' variant='outline' fullWidth>Profile</Button>
        </Link>

      <div>
          {props.posted ?
          <Button 
            onClick={open} 
            rightSection={<IconCalendar className='h-5 w-5' />} 
            color='yellow' 
            variant='light' 
            fullWidth
          >
            Schedule
          </Button>:<Button color='yellow' variant='light' fullWidth>
            Message
          </Button>
        }
      </div>
        </>
      }{
         props.invited && <>
          <div><Button color='yellow' variant='outline' fullWidth>
            Accept
          </Button></div>
          <div><Button color='yellow' variant='light' fullWidth>
            Reject
          </Button></div>
         </>
      }
       
      </div>

      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className='flex flex-col gap-4'>
          <DatePickerInput
            label="Pick date"
            placeholder="Enter date"
            value={value}
            onChange={setValue}
          />

          <TimeInput
            label="Pick time"
            ref={ref}
            rightSection={pickerControl}
            onClick={() => ref.current?.showPicker()}
          />

          <Button color='yellow' variant='light' fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>

    </div>
  )
}

export default TalentCard