//import React from "react"
import { closeMenu } from "../utils/appSlice";
import { useContext, useEffect } from "react";
import { dartModeFlag } from "../utils/useContexts";
import {useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlingBall, faCircle, faFlag, faGamepad, faHome, faM, faMoon, faMusic, faWallet} from '@fortawesome/free-solid-svg-icons';
const Sidebar=()=>{
const dispatch=useDispatch()
const isMenuOption=useSelector(store => store.app.isMenuopen)

const {modeFlag,setModeflag} =useContext(dartModeFlag) 


let classValue;
(modeFlag==true)?classValue="bg-[#0f0f0f] text-white":classValue="bg-white text-black"


  useEffect(()=>{
    if (window.screen.width < 600) {
   dispatch(closeMenu())
}

  },[])


//early return
if(!isMenuOption) return null

    return(
<div className={`${classValue} sticky top-12  h-full`}>

<div className="p-5 shadow-lg w-48 " >
  <ul >  
<li className=" pt-5 flex pb-2 pl-5 rounded-lg font-serif hover:bg-black hover:text-white"><div><FontAwesomeIcon icon={faHome}  className="pr-4 text-xs "/></div>{<Link to={"/"}><div>Home</div></Link>}</li>

<li className="flex pb-2 font-serif pl-5 rounded-lg hover:bg-black hover:text-white" ><div><FontAwesomeIcon icon={faMusic}  className="pr-4 text-xs "/></div>  <div > music</div></li>
<li className="flex pb-2 font-serif  pl-5 rounded-lg hover:bg-black hover:text-white"> <div><FontAwesomeIcon icon={faBowlingBall}  className="pr-4  text-xs "/></div> <div >Sports</div></li>
<li className="flex pb-2 font-serif  rounded-lg pl-5 hover:bg-black hover:text-white"><div><FontAwesomeIcon icon={faCircle}  className="pr-4  text-xs "/></div> <div >Gaming</div></li>
<li className="flex font-serif rounded-lg  pl-5 hover:bg-black hover:text-white"> <div><FontAwesomeIcon icon={faCircle}  className="pr-4  text-xs "/></div><div >Movies</div></li>
</ul>


<ul>

  <li className=" font-serif p-2 pt-2 rounded-lg hover:bg-black hover:text-white">watch later</li>  
<li className=" font-serif  pl-5 rounded-lg hover:bg-black hover:text-white">Music</li>
<li className=" font-serif  pl-5 hover:bg-black hover:text-white rounded-lg">Sports</li>
<li className=" font-serif  pl-5 hover:bg-black hover:text-white rounded-lg">Gaming</li>
<li className="   font-serif  pl-5 hover:bg-black hover:text-white rounded-lg">Movies</li>
</ul>
<h1 className="font-bold pt-5 p-3 hover:bg-black hover:text-white rounded-lg">Subscriptions</h1>

<ul >
<li className="py-2 pl-2  hover:bg-black hover:text-white rounded-lg"><FontAwesomeIcon icon={faMusic}  className="pr-4 text-xs "/> <span> Music</span></li>
<li className="py-2 pl-2 hover:bg-black hover:text-white rounded-lg"> <FontAwesomeIcon icon={faBowlingBall}  className="pr-4  text-xs "/> <span >Sports</span></li>
<li className="py-2 pl-2  hover:bg-black hover:text-white rounded-lg"><FontAwesomeIcon icon={faCircle}  className="pr-4  text-xs "/> <span >Gaming</span></li>
<li className="py-2 pl-2  hover:bg-black hover:text-white rounded-lg"> <FontAwesomeIcon icon={faCircle}  className="pr-4  text-xs "/><span >Movies</span></li>
</ul>



</div>
</div>
    )
}
export default Sidebar