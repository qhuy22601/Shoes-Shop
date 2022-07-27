import React, { useState, useEffect } from "react";
import Header from "./Header"
import MenuBar from "./MenuBar"
import "./styles/HomePage.css";
import { Slide } from 'react-slideshow-image';
import './styles/Slide.css'

import sneakers from "../shoes.json"


function HomePage(){

const [data,setData]=useState([]);


    return(
        <div className='container'>
            <div className='head'>
                <Header/>
            </div>
     
      <div className="slide">
        <div className="ima">
            <img className='img' src="https://image.goat.com/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png"></img>
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
                        
                       <h3>{shoes.brand_name}</h3>
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

export default HomePage;