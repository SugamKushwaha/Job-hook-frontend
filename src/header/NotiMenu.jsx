import { Avatar, CheckIcon, Indicator, Menu, Notification, Stack, Switch } from '@mantine/core'
import { IconBell, IconCheck, IconFileText, IconLogout2, IconMessageCircle, IconMoon, IconMoonStars, IconPhoto, IconSun, IconUserCircle } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getNotifications, readNotification } from '../UserServices/NotiService'

const NotiMenu = () => {
    const user= useSelector((state)=>state.user);
    const [opened,setOpened]=useState(false);
    const [notifications, setNotifications]=useState([]);
    const navigate =useNavigate();
    useEffect(() => {
  if (user?.id) {
    getNotifications(user.id)
      .then((res) => setNotifications(res))
      .catch((err) => console.log(err));
  }
}, [user]);

    const unread=(index)=>{
          let notis = [...notifications];
         notis= notis.filter((noti,i)=>i!=index);
          setNotifications(notis);

          readNotification(notifications[index].id).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }
  return (
    <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
      <Menu.Target>
                  <div className="bg-zinc-800 p-1.5 rounded-full">
                             <Indicator
                             disabled={notifications.length<=0}
                              offset={6} color="yellow" size={8} processing>
                           <IconBell stroke={1.5}/>
                           </Indicator>
                           </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
       <div>

        {
            notifications.map((noti,index)=> <Notification className=" hover:!bg-zinc-700 cursor-pointer" icon={<IconCheck size={16} />}
             onClose={()=>unread(index)}
             onClick={()=>{navigate(noti.route);
              setOpened(false);
              unread(index);

             }}
             key={index} withCloseButton 
             color="teal" title={noti.action} mt="md">
            {noti.message}
          </Notification>
        )}
        {
          notifications.length==0 && <div className="text-center text-zinc-500">No Notifications</div>
        }
         
       </div>
       
        <Menu.Divider />
       
      </Menu.Dropdown>
    </Menu>
  )
}

export default NotiMenu
