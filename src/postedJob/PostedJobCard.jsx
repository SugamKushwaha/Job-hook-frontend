import React from 'react'

const PostedJobCard = (props) => {
  return (
    <div className='bg-zinc-700 rounded-xl p-2 border-l-3 border-l-amber-400'>
      <div className='text-sm font-semibold'>{props.jobTitle}</div>
      <div className='text-xs text-zinc-50 font-medium'>{props.location}</div>
      <div className='text-xs text-zinc-100'>{props.posted}</div>
    </div>
  )
}

export default PostedJobCard
