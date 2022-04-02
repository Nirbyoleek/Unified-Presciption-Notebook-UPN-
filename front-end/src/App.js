import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Loginin";
import LoginDoc from "./Components/LogininDoc";
import AdminDashboard from "./Components/Admin/AdminDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login/patient" element={<Login />} />

          <Route path="/login/doctor" element={<LoginDoc />} />

          
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
