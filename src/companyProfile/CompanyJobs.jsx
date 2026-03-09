import React from 'react'
import { jobList } from '../data/Data'


const CompanyJobs = () => {
  return (
   <div className='mt-10 flex flex-wrap gap-5'>
         {
        jobList.map((job,index)=>(<JobCard key={index} {...job} />))
       }
       <JobCard/>
      </div>
  )
}

export default CompanyJobs
