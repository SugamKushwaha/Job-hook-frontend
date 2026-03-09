import React from 'react'
import SearchTelent from '../findTelent/SearchTelent'
import { Divider } from '@mantine/core'
import Talents from '../findTelent/Talents'

const FindTelent = () => {
  return (
    <div className='min-h-[90vh] bg-zinc-900 '> 
    <Divider />
     <SearchTelent/>
     <Divider />
     <Talents/>
    </div>
  )
}

export default FindTelent
