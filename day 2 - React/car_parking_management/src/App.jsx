import Carcreate from "./cars/Carcreate";
import Carlist from "./cars/Carlist";
import Carview from "./cars/Carview";
import Greetings from "./header/Greetings";


export default function App(){
  return(
    <>

      
      <h1><marquee>Car Parking Management</marquee></h1>
      <Greetings/>
      <Carcreate/>
      <Carlist/>
      <Carview/>

    </>
  );
}