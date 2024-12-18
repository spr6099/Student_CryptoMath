import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
function Header() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // console.log("!user");
      // console.log(user);
    }
  }, [user]);

  const Logout = () => {
    setUser("");
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container">
          {user && (
            <button className="btn " onClick={() => navigate(-1)}>
              <TiArrowLeftOutline className="fs-4" />
            </button>
          )}
          <Link className="navbar-brand">CryptoMath</Link>
          {user && (
            <button className="btn " onClick={() => navigate(1)}>
              <TiArrowRightOutline className="fs-4" />
            </button>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/admin/home"
                >
                  Home
                </Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/admin/viewTeacher">
                  Teacher
                </Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/admin/viewParents">
                  Parent
                </Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/admin/viewStudent">
                  Student
                </Link> */}
              </li>
            </ul>
          </div>
          {user ? (
            <div className="dropdown drop-lg-start pe-sm-0 pe-lg-5">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="25"
                  height="25"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    Admin
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                {/* <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={Logout}>
                    Logout
                    {/* <sub className="text-dark p-2">admin</sub> */}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;

// function Header() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(localStorage.getItem("user"));
//   const [openNavText, setOpenNavText] = useState(false);

//   const Logout = () => {
//     localStorage.clear();
//     // window.location.reload();
//     navigate("/");
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
//         <div className="container">
//           <Link className="navbar-brand" to="/">CryptoMath</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/admin/home">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin/viewTeacher">Teacher</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin/viewParents">Parent</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin/viewStudent">Student</Link>
//               </li>
//             </ul>

//             <div
//               // style={user === "admin" ? { display: "" } : { display: "none" }}
//             >
//               <div className="dropdown drop-lg-start pe-sm-0 pe-lg-5">
//                 <a
//                   href="#"
//                   className="d-block text-decoration-none dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <img
//                     src="https://github.com/mdo.png"
//                     alt="mdo"
//                     width="25"
//                     height="25"
//                     className="rounded-circle"
//                   />
//                 </a>
//                 <ul className="dropdown-menu text-small">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Admin
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Settings
//                     </a>
//                   </li>
//                   {/* <li>
//                     <a className="dropdown-item" href="#">
//                       Profile
//                     </a>
//                   </li> */}
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" onClick={Logout}>
//                       Signout
//                       {/* <sub className="text-dark p-2">admin</sub> */}
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
