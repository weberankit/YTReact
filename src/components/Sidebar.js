//import React from "react"

import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlingBall, faCircle, faFlag, faGamepad, faM, faMusic, faWallet} from '@fortawesome/free-solid-svg-icons';
const Sidebar=()=>{

const isMenuOption=useSelector(store => store.app.isMenuopen)

//early return
if(!isMenuOption) return null

    return(
<div className="sticky top-12  h-full ">

<div className="p-5 shadow-lg w-48 " >
<h1 className="font-bold pt-5">{<Link to={"/"}>Home</Link>}</h1>
<ul >
<li className="py-2"><FontAwesomeIcon icon={faMusic}  className="pr-4 text-xs "/> <span> Music</span></li>
<li className="py-2"> <FontAwesomeIcon icon={faBowlingBall}  className="pr-4  text-xs "/> <span >Sports</span></li>
<li className="py-2"><FontAwesomeIcon icon={faCircle}  className="pr-4  text-xs "/> <span >Gaming</span></li>
<li className="py-2"> <FontAwesomeIcon icon={faCircle}  className="pr-4  text-xs "/><span >Movies</span></li>
</ul>

<h1 className="font-bold pt-5">watch later</h1>
<ul>
<li>Music</li>
<li>Sports</li>
<li>Gaming</li>
<li>Movies</li>
</ul>
<h1 className="font-bold pt-5">Subscriptions</h1>

<ul >
<li className="py-2"><FontAwesomeIcon icon={faMusic}  className="pr-4 text-xs "/> <span> Music</span></li>
<li className="py-2"> <FontAwesomeIcon icon={faBowlingBall}  className="pr-4  text-xs "/> <span >Sports</span></li>
<li className="py-2"><FontAwesomeIcon icon={faCircle}  className="pr-4  text-xs "/> <span >Gaming</span></li>
<li className="py-2"> <FontAwesomeIcon icon={faCircle}  className="pr-4  text-xs "/><span >Movies</span></li>
</ul>



</div>
</div>
    )
}
export default Sidebar