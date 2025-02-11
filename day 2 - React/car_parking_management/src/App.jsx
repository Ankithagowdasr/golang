import Carcreate from "./cars/Carcreate";
import Carlist from "./cars/Carlist";
import Carview from "./cars/Carview";
import Greetings from "./header/Greetings";
import {BrowserRouter,Routes,Route} from react-router-dom;


export default function App(){
  return(
    <>

      <BrowserRouter>
         <Routes>
           <Route path="" element={<Carlist/>}/>
           <Route path="/car/list" element={<Carlist/>}/>
           <Route path="/car/create" element={<CarCreate/>}/>
           <Route path="/car/view" element={<Carview/>}/>
         </Routes>
      
      </BrowserRouter>
      <h1><marquee>Car Parking Management</marquee></h1>
      <Greetings/>
      {/* <Carcreate/> */}
      {/* <Carlist/> */}
      <Carview/>

    </>
  );
}