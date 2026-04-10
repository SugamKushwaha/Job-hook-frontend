import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconPaperclip } from '@tabler/icons-react';
import React, { useState } from 'react'

const ApplicationForm = () => {

    const [preview,setPreview]=useState(false);
      const [submit,steSubmit] = useState(false);

    
  const handleSubmit =()=>{
  }
  const handlePreview=()=>{
        // form.validate();
        // if(!form.isValid()) return;
        const result = form.validate();
        if (result.hasErrors) return;
    window.scrollTo({top:0,behavior:'smooth'})
       setPreview(!preview);
  }

  const form = useForm({
    mode:'controlled',
    validateInputOnChange:true,
    initialValues:{
        name:'',
        email:'',
        phone:'',
        website:'',
        resume:'',
        coverLetter:''
    },
    validate:{
        name:isNotEmpty('Cannot be empty'),
        email:isNotEmpty('Cannot be empty'),
        phone:isNotEmpty('Cannot be empty'),
        website:isNotEmpty('Cannot be empty'),
        resume:isNotEmpty('Cannot be empty')
    }
  });
   

  return <div>
        <LoadingOverlay
                  visible={submit}
                  zIndex={1000}
                  overlayProps={{ radius: 'sm', blur: 2 }}
                  loaderProps={{ color: 'yellow', type: 'bars' }}
                />
       <div className='text-xl font-semibold mb-5'>Submit your application </div>
    <div className='flex flex-col gap-5'>
         <div className='flex gap-10 [&>*]:w-1/2'>
            <TextInput {...form.getInputProps('name')} readOnly={preview} variant={preview?"unstyled":"default"} label="Full name" placeholder="Enter Name" />
            <TextInput {...form.getInputProps('email')}  readOnly={preview} variant={preview?"unstyled":"default"} label="Email" placeholder="Enter Email" />
         </div>
         <div className='flex gap-10 [&>*]:w-1/2'>
            <NumberInput {...form.getInputProps('phone')}  readOnly={preview} variant={preview?"unstyled":"default"} label="Phone no." placeholder="Enter phone" hideControls min={0} max={9999999999} clampBehavior='strict' />
            <TextInput {...form.getInputProps('website')}  readOnly={preview} variant={preview?"unstyled":"default"} label="Personal website" placeholder="Enter URL" />
         </div>
         <FileInput accept='application/pdf' {...form.getInputProps('resume')}  readOnly={preview} variant={preview?"unstyled":"default"} withAsterisk leftSection={<IconPaperclip stroke={1.5} />} label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents='none' />
...
         <Textarea {...form.getInputProps('coverLetter')}  readOnly={preview} variant={preview?"unstyled":"default"} withAsterisk placeholder='Type something about your self' label="Coner Letter" autosize minRows={4} />  
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
}

export default ApplicationForm
