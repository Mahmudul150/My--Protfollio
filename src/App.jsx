
// import { Outlet } from 'react-router'
// import './App.css'

// function App() {

//   return (
//     <>
     

//       <div className="text-2xl">HI World</div>

//       <Outlet></Outlet> 
//     </>
//   )
// }

// export default App






import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
     <Navbar />
  <Outlet />
  
    </>
  );
}

export default App;
