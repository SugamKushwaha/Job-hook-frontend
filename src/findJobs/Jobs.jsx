import React, { useEffect, useState } from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import { getAllJobs } from '../UserServices/JobService'

const Jobs = () => {
  const [jobList,setJobList]=useState([{}]);
  
  useEffect(()=>{
     getAllJobs().then((res)=>{
      setJobList(res);
     }).catch((err)=>{
      console.log(err);
     })
  },[]);
  return (
    <div className='px-5 py-5'>
       <div className='flex justify-between mt-5'>
         <div>Recommende jobs</div>
        <Sort/>
       </div>
      <div className='mt-10 flex flex-wrap gap-5'>
         {
        jobList.map((job,index)=>(<JobCard key={index}  {...job} />))
       }
       <JobCard/>
      </div>
    </div>
  )
}

export default Jobs
