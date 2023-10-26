//import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"
import{Outlet} from "react-router-dom"
import Head from "./Head"
//import React from "react"
const Body=()=>{
    return(
<>


<div className="flex pt-24  ">
<Sidebar/>
{/*here we want dynamic routing as either we want maincontainer or watchpage so use outlet chilldren go to the outlet */}
<Outlet/>




</div>
</>


    )
}
export default Body