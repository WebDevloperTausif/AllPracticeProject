import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Airline from "./Airline/Airline";
import AirlineDetails from "./Airline/AirlineDetails";
import UsersPhoto from "./Usersphoto/UsersPhoto";
import User from "./Usersphoto/User";
import Profiles from "./UsersProfile/Profiles";
import Profile from "./UsersProfile/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/airline" element={<Airline />} />
          <Route path="/airline/:id" element={<AirlineDetails />} />
          <Route path="/users" element={<UsersPhoto />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
