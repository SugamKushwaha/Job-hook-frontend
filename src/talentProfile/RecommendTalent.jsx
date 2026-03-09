import React from 'react'
import { talentsdata } from '../data/Data'
import TalentCard from '../findTelent/TalentCard'

const RecommendTalent = () => {
  return (
    <div>
      <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
      <div className='flex flex-col flex-wrap gap-5'>
        {talentsdata.map((talent,index)=>index<4 &&<TalentCard key={index} {...talent} />)}
      </div>
    </div>
  )
}

export default RecommendTalent
