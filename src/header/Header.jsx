import React from "react";
import { IconBell } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { IconAnchor } from "@tabler/icons-react";
import { Avatar,Button,Indicator } from '@mantine/core';
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import Profile from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const user=useSelector((state)=>state.user);
  const location = useLocation();
  return (
    location.pathname!="/signup"&& location.pathname!="/login" ? <div className="w-full items-center bg-zinc-900 justify-between px-6 text-white flex h-28">

      <div className="flex gap-1 items-center text-amber-500 ">
        <IconAnchor className="h-10 w-10 " stroke={2.5}  />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>

     <NavLinks/>

      <div className="flex gap-5 items-center">
       
        
    {user?<Profile/>:<Link to="/login"> <Button variant="subtle" color="yellow" >Login</Button> </Link>}
        <div className="bg-zinc-800 p-1.5 rounded-full">
          <IconSettings stroke={1.5}/>
          </div>

           <div className="bg-zinc-800 p-1.5 rounded-full">
            <Indicator offset={6} color="yellow" size={8} processing>
          <IconBell stroke={1.5}/>
          </Indicator>
          </div>

      </div>

    </div>:<></>
  );
};

export default Header;
