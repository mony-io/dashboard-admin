import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import ResetPassword from "./components/ResetPassword";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Payments from "./components/Payments";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/payment" element={<Payments/>}/>
        </Route>
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
