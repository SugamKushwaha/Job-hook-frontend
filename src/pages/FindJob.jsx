import React from 'react'
import SearchBar from '../findJobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from '../findJobs/Jobs'

const FindJob = () => {
  
  return (
    <div  className='min-h-[100vh] bg-zinc-900 '>
      <Divider size="xs" mx="md" mb="lg"/>
      <SearchBar/>
      <Jobs/>
    </div>
  )
}

export default FindJob
