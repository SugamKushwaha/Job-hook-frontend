import React from 'react'
import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { profiledata } from '../data/Data'
import Profile from '../talentProfile/Profile'
import RecommendTalent from '../talentProfile/RecommendTalent'

const TalentProfilePage = () => {
  return (
    <div className='min-h-[90vh] bg-zinc-900 '> 
    <Divider />
     <Link to="/find-talent" className='my-4 inline-block p-4'>
         <Button leftSection={<IconArrowLeft/>} color='yellow' variant='light' >Back</Button>
         </Link>
     
     <div className='flex gap-5'>
        <Profile {...profiledata} />
        <RecommendTalent/>
     </div>
    </div>
  )
}

export default TalentProfilePage
