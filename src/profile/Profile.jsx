import React, { useState } from 'react'
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
const Profile = (props) => {
    const select=fields;
    const [skills,setSkills] = useState(["react","java","mongo","pythono","go","venom"]);
    const [edit,setEdit]=useState([false,false,false,false,false]);
    const [addExp , setAddExp]=useState(false);
        const [addCerti , setAddCerti]=useState(false);

        const [certifications, setCertifications] = useState([
  {
    name: "Java Backend Development",
    issuer: "Coursera",
    issueDate: "Jan 2024",
    certificateId: "JAVA-1234"
  },{
    name: "Java Backend Development",
    issuer: "Coursera",
    issueDate: "Jan 2024",
    certificateId: "JAVA-1234"
  }
]);

    const handleEdit=(index)=>{
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit)
    }
    const [about, setAbout]=useState('thi si about section');
    const [experience, setExperience] = useState([
  {
    role: "Software Engineer",
    company: "ABC",
    duration: "2022-2024",
    description: "i worked in btps technologies as a software engineer"
  }
]);
  return (
    <div className='w-4/5 mx-auto mb-10'>
       <div className='relative px-5'>
           <img className='rounded-t-2xl h-70 w-full' src={bg} alt="" />
           <img className='w-48 h-48 rounded-full bottom-1/3 absolute left-3 border-zinc-500 border-8 mx-5 ' src={props.logo} alt="" />
           <div className='px-8 mt-10'>
              <div className='text-3xl font-semibold flex justify-between'>sugam kushwaha
               <ActionIcon onClick={()=>handleEdit(0)} size="lg" color='yellow' variant='subtle' aria-label='settinge'>
                {edit[0]?<IconDeviceFloppy className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
               </ActionIcon>
                </div>

            {
              edit[0]?<> <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput {...select[0]}/>
                <SelectInput {...select[1]} />
            </div>
               <SelectInput {...select[2]} />
              </>:<>
               <div className='text-xl flex gap-1 items-center'> <IconBriefcase className='h-5 w-5' stroke={1.5} /> {props.role} &bull; {props.company}</div>
              <div className='text-lg flex gap-1 items-center text-amber-50'>
                <IconMapPin className='h-5 w-5' stroke={1.5} />{props.location}
              </div>
              </>
            }

             
           </div>
       </div>
       <Divider my={2} mt={60} mb={10} />
       <div className='px-12 mt-12'>
          <div className='text-2xl flex justify-between font-semibold mb-3'>About <ActionIcon onClick={()=>handleEdit(1)} size="lg" color='yellow' variant='subtle' aria-label='settinge'>
                {edit[1]?<IconDeviceFloppy className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
               </ActionIcon></div>
               {
                edit[1]?<Textarea autosize placeholder='Enter about your self..'  value={about} onChange={(event)=>setAbout(event.currentTarget.value)} />:<div className='text-sm text-amber-50 text-justify'>
                  {about}
            </div>
               }
          
       </div>

       <Divider my={2} mt={60} />
       <div className='px-12 mt-12'>
  <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills <ActionIcon onClick={()=>handleEdit(2)} size="lg" color='yellow' variant='subtle' aria-label='settinge'>
                {edit[2]?<IconDeviceFloppy className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
               </ActionIcon></div>
               {
                edit[2]? <TagsInput value={skills} onChange={setSkills} placeholder='Add skill' splitChars={[',',' ','|']} />:<div className='flex flex-wrap gap-2'>
    {skills.map((skill, index) => 
      <div
        key={index}
        className='bg-amber-200 bg-opacity-15 rounded-3xl text-amber-600 px-3 py-1'>
        {skill}
      </div>
    )}
  </div>
 }
</div>
       <Divider mt={40}/>
       <div className='px-12 mt-10'>
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience <div className='flex gap-5'><ActionIcon onClick={()=>setAddExp(true)} size="lg" color='yellow' variant='subtle' aria-label='settinge'>
                <IconPlus className='h-4/5 w-4/5' />
               </ActionIcon>
               
               <ActionIcon onClick={()=>handleEdit(3)} size="lg" color='yellow' variant='subtle' aria-label='settinge'>
                {edit[3]?<IconDeviceFloppy className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
               </ActionIcon></div></div> 
         <div className='flex flex-col gap-8'>
      {
        experience.map((exp, index) => (
      <ExperienceCard key={index} {...exp} edit={edit[3]} />
     ))
    }
    {addExp && <ExpInput add setEdit={setAddExp} />}
</div>
       </div>

       
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
          certifications.map((certi,index)=>(
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
