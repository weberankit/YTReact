import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body"
import {Provider} from "react-redux"
import store from "./utils/store";
function App() {
  return (

   <Provider store= {store}> 
    <div className="App">

{
  /*
  Head
  body
  sidebar
   MenuItems
  MainContainer
   ButtonList
   VideoContainer
     videocard 
 
  */ 
}

<Head/>
<Body/>


</div>
</Provider>

  );
}

export default App;
