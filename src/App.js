import "./App.scss";
import Header from "./components/header";

import ProfileConfig from "./pages/profile-config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditProfile from "./pages/edit-profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProfileConfig />} />
        <Route path="/edit" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
