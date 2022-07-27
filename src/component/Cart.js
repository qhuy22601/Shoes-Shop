import Header from "./Header";
import buy from '../cart.json'
import React, { useState} from 'react';
import './styles/Cart.css'
import payment from "../payment.json"
import { shouldForwardProp } from "@mui/styled-engine";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import shipper from '../shipping.json'

function Cart(){

    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);


    const [show, setShow]= useState(false);
    const [show1, setShow1]= useState(false);

    const click = () =>{
        
        setShow(!show);
        console.log("clicked");
    }
    const click1 = () =>{
        
        setShow1(!show1);
        console.log("clicked");
    }



    const choose = ()=>{
        setCheck(!check);
        console.log("checked");
    }
    
    const choose1 = ()=>{
        setCheck1(!check1);
        console.log("checked");
    }
    

    return(
        <div className="container">
            <Header/>
            <div className="title">
                <h2>Giỏ hàng của bạn</h2>
            </div>
            <div className="prod">
               
            {buy.map(shoes=>{
                return(
                    <div className= "buying-item"  key={shoes.id}>
                        <div className="img-wrapper">
                            <img className="img" src= {shoes.main_picture_url}/>
                        </div>
                        <div className="namee">

                            <h4 className="fixx">tên </h4>
                            <h4 className="fixx">{shoes.name}</h4>
                        </div>
                        <div className="price">
                            <h4 className="fixx">giá </h4>
                            <h4 className="fixx">{shoes.retail_price_cents *690}</h4>
                        </div>
                        <div className="amount">
                            <h4 className="fixx">số lượng </h4>
                            <h4 className="fixx"> {shoes.amount}</h4>
                        </div>
                        <div className="total">
                            <h4 className="fixx">thành tiền</h4>
                            <h4 className="fixx">{shoes.retail_price_cents*shoes.amount*690}</h4>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className = "payment-shipping">
            <div className = "payment">
                 <h3>Phương thức thanh toán</h3>
                 <button className="bnn" onClick={click}>clickhere</button>
                 {show?(
                <div className = "payment-show" 
                // onMouseLeave={dis}
                >
                    {payment.map(method=>{
                        return (
                            <div className = "payment-method" key = {method.id}>
                                <img className="jpg" src = {method.image}></img>
                                <h5>{method.name}</h5>
                                <h6 >{method.balance}</h6>

                                {!check?
                                 (
                                 <div>
                                 <CheckCircleOutlineIcon onClick={choose}  className="unchecked" fontSize=""/>
                                 </div>
                                 )
                                
                                :
                                (
                                <div>
                                <CheckCircleIcon onClick={choose} classname = "checked" fontSize="" />
                                </div>
                                )
                                }
                               
                            </div>

                        )
                    })}
                </div>
                 ):(
                    <div></div>
                 )}
            </div>
                {/* {show?(
                        <div className="hien" onMouseLeave={dis}>true</div>
                    ):
                    (
                        <div className="an">false</div>
                    )} */}
            <div className = "shipping">
                        <h2>Shipping</h2>
            
                            <button className="bnn" onClick={click1}>clickhere</button>
                            {show1?(
                            <div className = "payment-show" 
                            // onMouseLeave={dis}
                            >
                                {shipper.map(method=>{
                                    return (
                                        <div className = "payment-method" key = {method.id}>
                                            <img className="jpg" src = {method.image}></img>
                                            <h5>{method.name}</h5>
                                            <h6 >{method.price}</h6>
                                            {!check1?(
                                            <div>
                                            <CheckCircleOutlineIcon onClick={choose1}  className="unchecked" fontSize=""/>
                                            </div>
                                            ):(
                                            <div>
                                            <CheckCircleIcon onClick={choose1} classname = "checked" fontSize="" />
                                            </div>
                                            )
                                            }
                                        
                                        </div>

                                    )
                                })}

                                
                            
                            </div>
                            ):(
                                <div></div>
                            )}
                                    
            </div>
        </div>
        <div className = "pay">
            <button className = "buyy">Thanh toan</button>
        </div>
        </div> 
    );
}

export default Cart;