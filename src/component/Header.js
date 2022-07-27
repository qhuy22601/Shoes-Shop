import AppsIcon from "@mui/icons-material/Apps";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import SearchInput from "../component/SearchInput";
import "./styles/Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';

import { IconContext } from 'react-icons';






function Header(){


    const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);

    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
   

  const handleMouseOver = () => {
 
    setIsHovering(!isHovering);
    setIsHovering1(false);
    setIsHovering2(false);
    setIsHovering3(false);
  };

  const handleMouseOver1 = () => {
    setIsHovering1(!isHovering1);
    setIsHovering2(false);
    setIsHovering3(false);
    setIsHovering(false);
  };



  const handleMouseOver2 = () => {
    setIsHovering2(!isHovering2);
    setIsHovering(false);
    setIsHovering3(false);
    setIsHovering1(false);
  };




  const handleMouseOver3 = () => {
    setIsHovering3(!isHovering3);
    setIsHovering(false);
    setIsHovering1(false);
    setIsHovering2(false);
  };

  const styles ={
    test:{
      color:'black',
    }
  }


    return(
      <div className="container">
        <div className="main">
        <Container>
          <div className="header">
            <SearchIcon color="primary" fontSize="large"/>
            <SearchInput />
  
            <div className="header_center">
              {/* <div className="header_option header_option--active"> */}
                <Link to="/mainpage" className="home">
                  {" "}
                  <HomeOutlinedIcon fontSize="large" />
                </Link>
              {/* </div> */}
              
            </div>
  
            <div className="header_right">
              <div className="header_info">
                <Link to="/signin" className="header_info_text">
                    Đăng nhập/Đăng kí
                </Link>
               
              </div>
  
              <div className="iconButton">
                  <Link to="/cart" className="iconButton">
                    <ShoppingCartIcon fontSize="large"/>
                  </Link>
               
              </div>
                    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
  
              {/* <div className="iconButton" onClick={handleSignOut}>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </div> */}
            </div>
          </div>
</Container>    
        </div>
        <div className="menu">
          <ul className="item-container">
            <div className="item-nav">
                <div>
              <li className="item">Trang Chủ</li>
              </div>
              <KeyboardArrowDownIcon fontSize="small" style={styles.test}
                  onClick={handleMouseOver}
              >
                </KeyboardArrowDownIcon>
                <div className="popp">
              {isHovering &&  <div className="pop">
                  <h5>brand</h5>
                  </div>}
            </div>
            </div>

            <div className="item-nav">
              <div>
              <li className="item">Sản Phẩm</li>
              </div>
               <KeyboardArrowDownIcon fontSize="small" style={styles.test}
                  onClick={handleMouseOver1}
               >
                  
                </KeyboardArrowDownIcon>
                <div className="popp">
              {isHovering1 &&  <div className="pop">
                  <h5>brand</h5>
                  </div>}
            </div>
              </div>

            <div className="item-nav">
              <div>
                <li className="item">Nam</li>
              </div>
               <KeyboardArrowDownIcon fontSize="small" style={styles.test}
                  onClick={handleMouseOver2}
              >
                  
                </KeyboardArrowDownIcon>
                <div className="popp">
              {isHovering2 && 
                   <div className="pop">
                  <h5>brand</h5>
                  </div>
              }
            </div>
              </div>


            <div className="item-nav">
              <div>
                  <li className="item">Nữ</li>

              </div>
               <KeyboardArrowDownIcon fontSize="small" style={styles.test}
                  onClick={handleMouseOver3}
             >
                  
                </KeyboardArrowDownIcon>
                <div className="popp">
              {isHovering3 &&  <div className="pop">
                  <h5>brand</h5>
                  </div>}
            </div>
              </div>
          </ul>
        </div>
        </div>
    );
}

export default Header;