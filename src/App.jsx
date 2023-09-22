import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";


const App = () =>{
return(
  <div className="app">
    < Navigation />


    <Routes>
      
      <Route path="products" element={<Products />} />
      

    </Routes>
  </div>
)

}

export default App