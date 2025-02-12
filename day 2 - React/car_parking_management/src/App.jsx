import CarView from "./cars/CarView"
import CarList from "./cars/CarList"
import CarCreate from "./cars/CarCreate"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="" element={<CarList/>}/>
            <Route path="/list" element={<CarList/>}/>
            <Route path="/create" element={<CarCreate/>}/>
            <Route path="/view" element={<CarView/>}/>
            {/* <Route path="/view" element={<CarView/>}/>
            <Route path="car/car/view" element={<CarView/>}/>
            <Route path="car/car/create" element={<CarCreate/>}/> */}
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App