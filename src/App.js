import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import ResetPassword from "./components/ResetPassword";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Payments from "./components/Payments";
import Role from "./components/Role";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/payment" element={<Payments/>}/>
          <Route path="/role" element={<Role/>} />
        </Route>
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
