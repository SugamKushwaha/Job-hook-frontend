import React from 'react'
import { talentsdata } from '../Data/Data'
import TalentCard from './TalentCard'
import Sort from '../findJobs/Sort'


const Talents = () => {
  return (
    <div className='px-5 py-5'>
       <div className='flex justify-between mt-5'>
         <div>Talents</div>
        <Sort/>
       </div>
      <div className='mt-10 flex flex-wrap gap-5 '>
        {
          talentsdata.map((talent,index)=>
             <TalentCard key={index} {...talent} />
          )
        }
       
      </div>
    </div>
  )
}

export default Talents
