import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Details from "../Page/Details";
import AddPeople from "../Page/AddPeople";


function Navigation() {
return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path='/add' element={<AddPeople isEdit={false}/>}/>
        <Route path='/add/edit/:id' element={<AddPeople isEdit={true}/>}/>
    </Routes>
  );
}
export default Navigation;