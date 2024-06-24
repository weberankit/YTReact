import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body"
import {Provider} from "react-redux"
import store from "./utils/store";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer"
//import WatchPage from "./components/WatchPage"
import Error from "./components/Error";
import { lazy,Suspense,useState,useContext } from "react";
import  { WatchShimmer } from "./components/ShimmerEffect";
import { dartModeFlag } from "./utils/useContexts";

const VideoWatch=lazy(()=>import("./components/WatchPage"))


//import '@fortawesome/fontawesome-free/css/all.css';
const appRouter=createBrowserRouter([
  {

path:"/",
element:<Body/>,
errorElement:<Error/>,

children:[

{
path:"/",
element:<MainContainer/>
},

{
 path:"watch",
 element:
 <Suspense fallback={ <div className="flex justify-center items-center p-2 text-center"><div><h1 className="font-bold text-4xl text-shadow text-center" >Loading....</h1><WatchShimmer/></div></div> }>
 <VideoWatch/></Suspense>
}

         ]

}
])



function App() {
   const {flag} = useContext(dartModeFlag)
   console.log(flag.mode)
  const [modeFlag,setModeflag] =useState(flag.mode)


  return (
   <dartModeFlag.Provider value={{modeFlag ,setModeflag}}>
   <Provider store= {store}> 
    <div className="App">



<Head/>{/*header part is same erverywhere so used below router provider as we want to change that part only if something ched in url */}
{/*if something changes in url then componet changes a/c to router */}
<RouterProvider router={appRouter}></RouterProvider>



</div>
</Provider>
</dartModeFlag.Provider>
  );
}

export default App;
