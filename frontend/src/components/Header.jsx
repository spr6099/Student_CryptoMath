import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand">CryptoMath</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/admin/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/viewTeacher">
                  Teacher
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/viewParents">
                  Parent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/viewStudent">
                  Student
                </Link>
              </li>
            </ul>
          </div>
          <div class="dropdown drop-lg-start pe-sm-0 pe-lg-5">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="25"
                height="25"
                class="rounded-circle"
              />
            </a>
            <ul class="dropdown-menu text-small">
              <li>
                <a class="dropdown-item" href="#">
                  Admin
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              {/* <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li> */}
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" >
                  Signout
                  {/* <sub className="text-dark p-2">admin</sub> */}
                </a>
              </li>
            </ul>
          </div>
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
//       <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary">
//         <div class="container">
//           <Link class="navbar-brand" to="/">CryptoMath</Link>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarText">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/admin/home">Home</Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/admin/viewTeacher">Teacher</Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/admin/viewParents">Parent</Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/admin/viewStudent">Student</Link>
//               </li>
//             </ul>

//             <div
//               // style={user === "admin" ? { display: "" } : { display: "none" }}
//             >
//               <div class="dropdown drop-lg-start pe-sm-0 pe-lg-5">
//                 <a
//                   href="#"
//                   class="d-block text-decoration-none dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <img
//                     src="https://github.com/mdo.png"
//                     alt="mdo"
//                     width="25"
//                     height="25"
//                     class="rounded-circle"
//                   />
//                 </a>
//                 <ul class="dropdown-menu text-small">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Admin
//                     </a>
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Settings
//                     </a>
//                   </li>
//                   {/* <li>
//                     <a class="dropdown-item" href="#">
//                       Profile
//                     </a>
//                   </li> */}
//                   <li>
//                     <hr class="dropdown-divider" />
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
