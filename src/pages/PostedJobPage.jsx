import React from 'react'
import PostedJob from '../postedJob/PostedJob'
import PostedJObDesc from '../postedJob/PostedJObDesc'

const PostedJobPage = () => {
  return (
    <div className='min-h-[90vh]  bg-zinc-900 '>
      <div className='flex gap-5'>
         <PostedJob/>
       <PostedJObDesc/>
      </div>
    </div>
  )
}

export default PostedJobPage
