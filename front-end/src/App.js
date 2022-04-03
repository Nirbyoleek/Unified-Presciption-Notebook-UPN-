import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Loginin";
import LoginDoc from "./Components/LogininDoc";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import Canvas from "./Components/Admin/Canvas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          <Route path="/" element={<Signup />} />

          <Route path="/login/patient" element={<Login />} />

          <Route path="/login/admin" element={<LoginDoc />} />

          <Route path="/canvas" element={<Canvas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
