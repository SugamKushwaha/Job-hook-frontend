import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import JobDesc from '../jobDescription/JobDesc'
import RecommendedJobs from '../jobDescription/RecommendedJobs'

const JobDescriptionPage = () => {
  return (
    <div className='min-h-[90vh] bg-zinc-900 '> 
    <Divider />
     <Link to="/find-jobs" className='my-4 inline-block p-4'>
         <Button leftSection={<IconArrowLeft/>} color='yellow' variant='light' >Back</Button>
         </Link>
     
     <div className='flex gap-5'>
        <JobDesc/>
        <RecommendedJobs/>
     </div>
    </div>
  )
}

export default JobDescriptionPage
