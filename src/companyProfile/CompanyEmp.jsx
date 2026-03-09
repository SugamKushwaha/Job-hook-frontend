import React from 'react'
import { talentsdata } from '../data/Data'

const CompanyEmp = () => {
  return (
   <div className='mt-10 flex flex-wrap gap-5 '>
        {
          talentsdata.map((talent,index)=>
            index<6 && <TalentCard key={index} {...talent} />
          )
        }
       
      </div>
  )
}

export default CompanyEmp
