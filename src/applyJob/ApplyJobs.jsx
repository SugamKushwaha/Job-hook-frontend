import { Button, CheckIcon, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconCheck, IconPaperclip } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ApplyJobs = () => {

  const [preview,setPreview]=useState(false);
  const [submit,steSubmit] = useState(false);
  const [sec,setSec] = useState(5);
  const navigate = useNavigate();
  const handlePreview=()=>{
    setPreview(!preview);
    window.scrollTo({top:0,behavior:'smooth'})
  }
  const handleSubmit =()=>{
    steSubmit(true);
    let x=5;
    setInterval(()=>{
      x--;
      setSec(x);
      if(x==0)navigate('/find-jobs');
        },1000)
  }
  
  return (
    <><div className='w-2/3 mx-auto'>
       <LoadingOverlay
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'yellow', type: 'bars' }}
        />
      <div className='flex justify-between'>
         <div className='flex gap-2 items-center'>
           <div className='p-3 bg-zinc-800 rounded-xl'>
            <img className='h-14' src="" alt="" /></div>
           <div className='flex flex-col gap-1'> 
             <div className='font-semibold text-2xl'>engineer</div>
             <div className='text-lg text-amber-50'>google&bull; 48 Applicants</div>
           </div>
         </div>
       </div>
       <Divider my="xl"/>
       <div className='text-xl font-semibold mb-5'>Submit your application </div>
       <div className='flex flex-col gap-5'>
         <div className='flex gap-10 [&>*]:w-1/2'>
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} label="Full name" placeholder="Enter Name" />
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} label="Email" placeholder="Enter Email" />
         </div>
         <div className='flex gap-10 [&>*]:w-1/2'>
            <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} label="Phone no." placeholder="Enter phone" hideControls min={0} max={9999999999} clampBehavior='strict' />
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} label="Personal website" placeholder="Enter URL" />
         </div>
         <FileInput readOnly={preview} variant={preview?"unstyled":"default"} withAsterisk leftSection={<IconPaperclip stroke={1.5} />} label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents='none' />

         <Textarea readOnly={preview} variant={preview?"unstyled":"default"} withAsterisk placeholder='Type something about your self' label="Coner Letter" autosize minRows={4} />  
          {
           !preview && <Button onClick={handlePreview} color='yellow' variant='light' >Preview</Button>
          }{
            preview && <div className='flex gap-10 [&>*]:w-1/2'>
              <Button fullWidth onClick={handlePreview} color='yellow' variant='light' >Edit</Button>
              <Button fullWidth onClick={handleSubmit} color='yellow' variant='light' >Submit</Button>
            </div>
          }
       </div>
    </div>
    <Notification className={`border !border-amber-400 -translate-y-20  !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20 "}`} icon={<IconCheck style={{width:20,height:20}} />} color='teal'title="Application submitted" mt="md" withCloseButton={false} >
    Redirecting in {sec} secondes...
    </Notification>
 </>
  )
}

export default ApplyJobs
