import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Courses from "./components/courses";
import ContactForm from "./components/contact-form";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ManageCategories from "./pages/ManageCategories";
import ManageCourses from "./pages/ManageCourses";
function App() {
  return (
    <Router>
    <div className="w-screen max-w-screen min-h-screen bg-white overflow-x-hidden">
      <div className="w-full overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Courses />
              <ContactForm />
            </>
          }/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="categories" element={<ManageCategories />} />
          <Route path="courses" element={<ManageCourses />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
