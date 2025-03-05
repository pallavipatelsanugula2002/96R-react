
import { Component } from "react"
import Button from "./components/buttoncomponent/button-component"
import Listcomponent from "./components/listcomponent/list"
import Orderedlist from "./components/listcomponent/orderedlist"
import HeadingComponent1, { HeadingComponent2, HeadingComponent3 } from "./components/heading/head"
function App(){
     return(
      <div>
       {/* <Button/> 
      <Listcomponent/>
       <Orderedlist/>  */}
       <HeadingComponent1/>
       <HeadingComponent2/>
       <HeadingComponent3/>








      </div>
      
     )
}
export default App
