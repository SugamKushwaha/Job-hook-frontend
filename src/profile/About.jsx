import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../UserServices/NotificationService";
import { changeProfile } from "../slices/ProfileSlice";

const About =()=>{
     const dispatch = useDispatch();
     const [edit, setEdit] = useState(false);
     const profile = useSelector((state)=>state.profile);
     const [about , setAbout]=useState("");
      const handleClick =()=>{
        if(!edit){
            setEdit(true);
            setAbout(profile.about);
        }else
            setEdit(false);
    }

    const handleSave=()=>{
       setEdit(false);
            let updatedProfile = {...profile, about:about};
            dispatch(changeProfile(updatedProfile));
             successNotification("Success","About Updated Successfully");
    } 

    return  <div className='px-12 mt-12'>
          <div className='text-2xl flex justify-between font-semibold mb-3'>About <div>
               {edit && <ActionIcon onClick={handleSave} size="lg" color="green.8" variant='subtle' aria-label='settinge'>
                {<IconCheck className='h-4/5 w-4/5' stroke={1.5} />}
               </ActionIcon>}
               <ActionIcon onClick={handleClick} size="lg" color={edit?"red.8":"yellow.7"} variant='subtle' aria-label='settinge'>
                {edit ? <IconX className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
               </ActionIcon></div></div>
               {
                edit?<Textarea autosize placeholder='Enter about your self..'  value={about} onChange={(event)=>setAbout(event.target.value)} />:<div className='text-sm text-amber-50 text-justify'>
                  {profile?.about}
            </div>
               }
          
       </div>
}

export default About;