import { Badge, Tabs } from '@mantine/core'
import React from 'react'
import JobDesc from '../jobDescription/JobDesc'
import { talentsdata } from '../data/Data'
import TalentCard from '../findTelent/TalentCard'


const PostedJObDesc = () => {
  return (
    <div className='mt-5 w-3/4 px-5'>
       <div className='text-2xl flex items-center font-semibold mb-5'>Software Engineer <Badge variant='light' size='sm' ml="sm" color='yellow'>Badge</Badge></div>
     
     <div className='font-medium text-zinc-100'>new york,united states</div>
     <div>
         <Tabs radius="lg" defaultValue="overview">
                  <Tabs.List className='[&_button]:!text-lg mb-5 font-semibold [&_button[data-active="true"]]:!text-amber-400'>
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="overview" className='[&>div]:w-full'>
                      <JobDesc edit />
                  </Tabs.Panel>
                  <Tabs.Panel value="applicants">
                  <div className='flex flex-wrap mt-10 gap-5 justify-around'>
                     {
                      talentsdata.map((talent,index)=>
                        index<6 && <TalentCard key={index} {...talent} posted/>
                      )
                    }
                  </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="invited">
                <div className='flex flex-wrap mt-10 gap-5  justify-around'>
                     {
                      talentsdata.map((talent,index)=>
                        index<6 && <TalentCard key={index} {...talent} invited/>
                      )
                    }
                  </div>
                  </Tabs.Panel>
              </Tabs>
     </div>
    </div>
  )
}

export default PostedJObDesc
