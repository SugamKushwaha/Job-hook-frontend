import { ActionIcon } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import ExpInput from "./ExpInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Experience = ()=>{
 
    const profile = useSelector((state)=>state.profile);
    const [addExp , setAddExp]=useState(false);
    const [edit , setEdit]=useState(false);
    const handleClick =()=>{
        setEdit(!edit);
    }

    return <div className='px-12 mt-10'>
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience <div className='flex gap-5'><ActionIcon onClick={()=>setAddExp(true)} size="lg" color='yellow' variant='subtle' aria-label='settinge'>
                <IconPlus className='h-4/5 w-4/5' />
               </ActionIcon>
               
               <ActionIcon onClick={handleClick}size="lg" color={edit?"red.8":"yellow.7"} variant='subtle' aria-label='settinge'>
                {edit?<IconX className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
               </ActionIcon></div></div> 
         <div className='flex flex-col gap-8'>
      {
        profile?.experience?.map((exp, index) => (
      <ExperienceCard key={index} {...exp} index={index} edit={edit} />
     ))
    }
    {addExp && <ExpInput add setEdit={setAddExp} />}
</div>
       </div>
}

export default Experience;