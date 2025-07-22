import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <>
      
        <nav className="navbar navbar-expand-lg p-4 position-fixed top-0 start-0 end-0 ">
          <div className="container">
            <Link className="navbar-brand text-white fw-bold fs-3" to={'/'}>
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5  fw-bold "
                    aria-current="page"
                    to="about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5  fw-bold" to="Portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5 fw-bold" to="content">
                    Content
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      
      </>
    );
}
export default Navbar;
