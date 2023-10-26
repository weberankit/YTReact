import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body"
import {Provider} from "react-redux"
import store from "./utils/store";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import Error from "./components/Error";
import { lazy,Suspense } from "react";


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
 <Suspense fallback={<h1 className="text-center font-bold ">loading.......</h1>}>
 <VideoWatch/></Suspense>
}

         ]

}
])



function App() {

  

  return (

   <Provider store= {store}> 
    <div className="App">



<Head/>{/*header part is same erverywhere so used below router provider as we want to change that part only if something ched in url */}
{/*if something changes in url then componet changes a/c to router */}
<RouterProvider router={appRouter}></RouterProvider>



</div>
</Provider>

  );
}

export default App;
