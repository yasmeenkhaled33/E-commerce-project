import { Route,Routes } from "react-router-dom";
import Buybage from "./components/Buybage";
import Home from "./components/Home";
import { useState } from "react";
import { Buynum } from "./contexts/buycontext";
import { Buypagecontext } from "./contexts/buybagecontext";


function App() {
  const initial=[]
  const[buynum,setbuynum]=useState("0")
  const[buybage,setbuypage]=useState(initial)
  return (
    <>
    <Buypagecontext.Provider value={{buybage,setbuypage}}>
        <Buynum.Provider value={{buynum,setbuynum}}>
            <Routes>
              <Route path="/buy" element={<Buybage/>}/>
              <Route path="/" element={<Home/>}/>
            </Routes>
        </Buynum.Provider>
    </Buypagecontext.Provider>
    </>
  );
}

export default App;
