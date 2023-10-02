//import React from "react"

import {useSelector} from "react-redux"
const Sidebar=()=>{

const isMenuOption=useSelector(store => store.app.isMenuOpen)

//early return
if(!isMenuOption) return null

    return(


<div className="p-5 shadow-lg w-48" >
<h1 className="font-bold pt-5">Home</h1>
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