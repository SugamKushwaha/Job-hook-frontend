import React, { useEffect, useState } from 'react'
import { jobList } from '../data/Data'
import JobCard from '../findJobs/JobCard'
import { useParams } from 'react-router-dom'
import { getAllJobs } from '../UserServices/JobService'

const RecommendedJobs = () => {
  const {id} = useParams();
  const [jobList,setJobList]=useState(null);
  
  useEffect(()=>{
     getAllJobs().then((res)=>{
      setJobList (res);
     }).catch((err)=>{
      console.log(err);
     })
  },[]);
  return (
    <div>
      <div className='text-xl font-semibold mb-5'>Recommended Jobs</div>
      <div className='flex flex-col flex-wrap gap-5'>
         {
        jobList?.map((job,index)=>index<6 && id!=job.id && <JobCard key={index} {...job} />)
       }
      </div>
    </div>
  )
}

export default RecommendedJobs
