import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-kasa/LOGO.png";
import "../../style/Navbar/NavBar.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

const LinkStyled = styled(Link)`
  color: #fe605f;
  text-decoration: none;
  margin: 20px;
  font-size: 27px;
  ${(props) => (props.$focused ? `border-bottom: 1px solid #fe605f` : null)}
`;

export function NavBar() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <div className="navbar-container">
        <img src={logo} alt="logo-Kasa" />
        <nav>
          <ul className="nav-ul">
            <li>
              <LinkStyled to={"/"} $focused={currentRoute === "/"}>
                Accueil
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to={"/propos"} $focused={currentRoute === "/propos"}>
                À Propos
              </LinkStyled>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
