import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Details from "../Page/Details";


function Navigation() {
return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
    </Routes>
  );
}
export default Navigation;