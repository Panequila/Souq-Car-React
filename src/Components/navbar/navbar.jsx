// import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import "./navbar.css";

// export default function NavigationBar(props) {
//   return (
//     <>
//       <div className="row justify-content-between align-content-between main" style={{ height: "100%" }}>
//         <nav
//           className="navbar navbar-expand-lg navbar-light w-100% m-auto  p-3 mb-3 rounded flex-fill justify-content-between bg-white"
//           dir="rtl"
//         >
//           <a className="logo d-sm-block d-none" href="https://souq.car/ar" title="سوق كار">
//             <img
//               className="light w-100 animate_animated animate_fadeInDown duration_2s"
//               src="https://souq.car/imgs/logo.png"
//               style={{ height: "35px" }}
//               alt="سوق كار"
//             />
//           </a>

//           <div>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-expanded="false"
//               aria-label="Toggle
//                       navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
//               <div className="navbar-nav flex-fill justify-content-end ">
//                 <a id="link" className="nav-link fw-bolder text-black mx-3 " aria-current="page" href="./">
//                   الرئيسية
//                 </a>

//                 <Nav.Link as={Link} to="/SalePage" id="link" className="nav-link fw-bolder text-black mx-3 " aria-current="page" >
//                   شراء
//                 </Nav.Link>

//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="./SalePage">
//                   شراء
//                 </a>
//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="#">
//                   تأجير
//                 </a>
//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="#">
//                   صيانة
//                 </a>
//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="#">
//                   قطع الغيار
//                 </a>
//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="#">
//                   ونش إنقاذ
//                 </a>
//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="#">
//                   الأخبار
//                 </a>
//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="#">
//                   <i class="fa-regular fa-heart"></i>
//                 </a>
//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="#">
//                   <i class="fa-regular fa-moon"></i>
//                 </a>
//                 <a id="link" className="nav-link fw-bolder text-black mx-3" href="#">
//                   <i class="fa-solid fa-earth-americas"></i>
//                 </a>
//               </div>
//               <button className="btn btn-primary">أضف اعلان</button>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }
