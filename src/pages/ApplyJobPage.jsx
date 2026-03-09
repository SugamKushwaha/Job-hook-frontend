import React from 'react'
import ApplyJobs from '../applyJob/ApplyJobs'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'

const ApplyJobPage = () => {
  return (
    <div className='min-h-[90vh] bg-zinc-900 '>
        <Link to="/jobs" className='my-5 inline-block p-4'>
         <Button color='yellow' variant='light'leftSection={<IconArrowLeft size={20} />} >Back</Button>
         </Link>
      <ApplyJobs/>
    </div>
  )
}

export default ApplyJobPage
