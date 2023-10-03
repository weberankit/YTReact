//import React from "react"

import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
const Sidebar=()=>{

const isMenuOption=useSelector(store => store.app.isMenuopen)

//early return
if(!isMenuOption) return null

    return(


<div className="p-5 shadow-lg w-48" >
<h1 className="font-bold pt-5">{<Link to={"/"}>Home</Link>}</h1>
<ul>
<li>Music</li>
<li>Sports</li>
<li>Gaming</li>
<li>Movies</li>
</ul>

<h1 className="font-bold pt-5">watch later</h1>
<ul>
<li>Music</li>
<li>Sports</li>
<li>Gaming</li>
<li>Movies</li>
</ul>
<h1 className="font-bold pt-5">Subscriptions</h1>
<ul>
<li>Music</li>
<li>Sports</li>
<li>Gaming</li>
<li>Movies</li>
</ul>



</div>
    )
}
export default Sidebar