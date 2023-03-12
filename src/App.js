import { Routes, Route } from "react-router-dom"

import "./App.css";
import AddUser from "./pages/AddUser/AddUser.container";
import ShowUser from "./pages/ShowUser/ShowUser.container";

function App() {
  return (
    <Routes>
      <Route path='/register' element={<AddUser />}>
      </Route>
      <Route path='/' element={<ShowUser />}>
      </Route>
    </Routes>
  );
}

export default App;
