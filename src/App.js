import { Home } from "./pages/Home/Home";
import { Login } from "./pages/login/Login";
import { Users } from "./pages/users/Users";
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element ={<Login/>}></Route>
        <Route path="users" >
          <Route index element={<Users/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path="patients" >
          <Route index element={<Users/>}/>
          <Route path=":patientId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;