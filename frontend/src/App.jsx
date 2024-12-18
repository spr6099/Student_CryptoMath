import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Header from "./components/Header";
import ParentSignup from "./modules/parent/ParentSignup";
import LandingPage from "./pages/LandingPage";
import AdminHome from "./modules/admin/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";
import ProtecterRoute from "./ProtecterRoute";
import AdminLayout from "./layout/AdminLayout";
import AddTeacher from "./modules/admin/AddTeacher";
import TeachersList from "./modules/admin/TeachersList";
import StudentsList from "./modules/admin/StudentsList";
import ParentsList from "./modules/admin/ParentsList";
import ParentLayout from "./layout/ParentLayout";
import ParentHome from "./modules/parent/Home";
import AddStudent from "./modules/parent/AddStudent";
import Profile from "./modules/parent/Profile";
import StudentProfile from "./modules/admin/StudentProfile";
import TeacherLayout from "./layout/TeacherLayout";
import TeacherHome from "./modules/teacher/Home";
import TeacherProfile from "./modules/teacher/Profile";
import TeacherStudentList from "./modules/teacher/StudentsList";
import TeacherStudentProfile from "./modules/teacher/StudentProfile";
import NotFound from "./pages/NotFound";
import Childrens from "./modules/parent/ChildProfile";
import EditChildren from "./modules/parent/EditChildren";
import StudentLayout from "./layout/StudentLayout";
import StudentHome from "./modules/student/Home";
import ChatContainer from "./components/chat/ChatContainer";
import Games from "./modules/student/Games";
import Typing from "./modules/student/gamePages/typing";
import Guess from "./modules/student/gamePages/guess";
import Fruit from "./modules/student/gamePages/fruit";
import Snake from "./modules/student/gamePages/snakeReact/snake";
import PaymentComponent from "./components/RazorPay";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("user"));
    setUser(sessionUser);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/parentSignup" element={<ParentSignup />} />
          {/* .....Admin...... */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="home" index element={<AdminHome />} />
            <Route path="AddTeacher" element={<AddTeacher />} />
            <Route path="teacherslist" element={<TeachersList />} />
            <Route path="studentslist" element={<StudentsList />} />
            <Route path="parentslist" element={<ParentsList />} />
            <Route path="studentProfile/:id" element={<StudentProfile />} />
          </Route>
          {/* .....Parent......... */}
          <Route path="/parent" element={<ParentLayout />}>
            <Route path="home" index element={<ParentHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addstudent" element={<AddStudent />} />
            <Route path="children/:id" element={<Childrens />} />
            <Route path="editchildren/:id" element={<EditChildren />} />
            <Route path="payment" element={<PaymentComponent   />} />
            <Route
              path="chat/:chatId"
              element={<ChatContainer />}
            />
          </Route>
          {/* ......Teacher....... */}
          <Route path="/teacher" element={<TeacherLayout />}>
            <Route path="home" element={<TeacherHome />} />
            <Route path="profile" element={<TeacherProfile />} />
            <Route path="studentlist" element={<TeacherStudentList />} />
            <Route
              path="studentprofile/:id"
              element={<TeacherStudentProfile />}
            />
            <Route
              path="chat/:chatId"
              element={<ChatContainer />}
            />
          </Route>
          <Route path="/student" element={<StudentLayout />}>
            <Route path="home" element={<StudentHome />} />
            <Route path="games" element={<Games />} />
            {/* <======games=====> */}
            <Route path="typing" element={<Typing />} />
            <Route path="guess" element={<Guess />} />
            <Route path="fruit" element={<Fruit />} />
            <Route path="snake" element={<Snake />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
