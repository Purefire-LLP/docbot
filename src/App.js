import { Home } from "./pages/Home/Home";
import { Login } from "./pages/login/Login";
import { Users } from "./pages/users/Users";
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";
import { Calander } from "./pages/calander/Calander"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { userInputs } from "./formSource";
import { patientInputs } from "./formSource";
import './style/dark.scss'
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { getMonth } from './pages/calander/util'


function App() {
  console.table(getMonth())
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark":"app"}>
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element ={<Login/>}></Route>
        <Route path="users" >
          <Route index element={<Users/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs={userInputs} title= "Add New User"/>}/>
        </Route>
        <Route path="patients" >
          <Route index element={<Users/>}/>
          <Route path=":patientId" element={<Single/>}/>
          <Route path="new" element={<New inputs={patientInputs} title= "Add New Patient"/>}/>
        </Route>
        <Route path ="calander" element ={<Calander/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
