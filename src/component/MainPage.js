import React from 'react';
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
import sneakers from '../shoes.json'
import Header from './Header';

function MainPage(props){


     const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
   

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };




  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };


  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };


  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };


    return(
      <div className="container">
        <div className="main">
          <Header></Header>
        </div>
    
           <div className="slide">
        <div className="ima">
            <img className='img' src="https://image.goat.com/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png"></img>
        </div>

        <div className='desc'>
            This is nike
        </div>
      </div>

    <div className='product'>
       <div className="gallery">
            {sneakers.map(shoes=>{
                return(
                    <div className="content" key={shoes.id}>
                        
                       <h3>{shoes.name}</h3>
                        <img className="shoes" src= {shoes.main_picture_url}></img>
                        <h4>{shoes.retail_price_cents *690} VND</h4>
                    </div>
                )
            })}
        </div>
            </div>
        </div>
        


        
        
    );
}


export default MainPage;