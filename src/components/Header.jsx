import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const gotoHome = () =>{
    navigate("/");
  }
  return (
    <nav className="headerDiv">
     <span className="homeGoTo" onClick={gotoHome}><HomeIcon/><span >Home</span></span>
      <h1>Account Settings</h1>
    </nav>
  );
}
export default Header;
