import React, { useEffect, useState } from 'react'
import bg from "../assets/tv-bg.png"
import logo from "../assets/profile_logo.png"
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from '@tabler/icons-react'
import { ActionIcon, Button, Divider, TagsInput, Textarea} from '@mantine/core'
import ExperienceCard from './ExperienceCard'
import CertificationCard from './CertificationCard'
import SelectInput from './SelectInput'
import fields from '../data/profile'
import ExpInput from './ExpInput'
import CertiInput from './CertiInput'
import { getProfile } from '../UserServices/ProfileService'
import { useDispatch, useSelector } from 'react-redux'
import Info from './Info'
import { setProfile } from '../slices/ProfileSlice'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'

const Profile = (props) => {
  const dispatch = useDispatch();
    const user = useSelector((state)=>state.user);
    const profile = useSelector((state)=>state.profile);
    const [edit,setEdit]=useState([false,false,false,false,false]);
    
        const [addCerti , setAddCerti]=useState(false);

 
    const handleEdit=(index)=>{
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit)
    }
useEffect(()=>{
  if(user?.profileId){
    getProfile(user.profileId)
      .then((data)=>{
        dispatch(setProfile(data));
      })
      .catch((error)=>{
        console.log(error);
      });
  }
},[user])

   
  
  return (
    <div className='w-4/5 mx-auto mb-10'>
       <div className='relative px-5'>
           <img className='rounded-t-2xl h-70 w-full' src={bg} alt="" />
           <img className='w-48 h-48 rounded-full bottom-1/3 absolute left-3 border-zinc-500 border-8 mx-5 ' src={props.logo} alt="" />
           <div className='px-8 mt-10'>

             <Info/>

           </div>
       </div>
       <Divider my={2} mt={60} mb={10} />
      <About/>

       <Divider my={2} mt={60} />
      <Skills/>
       <Divider mt={40}/>
       <Experience/>
        <Divider mt={40}/>
       <div className='px-12 mt-10'>
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Certificatons<div className='flex gap-5'><ActionIcon onClick={()=>setAddCerti(true)} size="lg" color='yellow' variant='subtle' aria-label='settinge'>
                <IconPlus className='h-4/5 w-4/5' />
               </ActionIcon>
               
               <ActionIcon onClick={()=>handleEdit(4)} size="lg" color='yellow' variant='subtle' aria-label='settinge'>
                {edit[4]?<IconDeviceFloppy className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
               </ActionIcon></div></div>
              <div className='flex flex-col gap-8'>
                 {
          profile?.certification?.map((certi,index)=>(
          <CertificationCard key={index}  {...certi} edit={edit[4]} />)
        )}{
         addCerti && <CertiInput setEdit={setAddCerti} />
        }
              </div>
       </div>
    </div>
  )
}

export default Profile
