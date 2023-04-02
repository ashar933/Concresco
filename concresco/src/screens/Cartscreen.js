import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../actions/cartActions";
import { useNavigate } from 'react-router-dom';



export default function Cartscreen() {
    const cartstate = useSelector((state) => state.cartReducer);
    const cartItems = cartstate.cartItems;
    var subtotal = cartItems.reduce((x,item)=>x+item.price, 0);
    const navigate=useNavigate()
    const navigateToHome=()=>{
        navigate("/")
        
    }

    

    const dispatch = useDispatch();
    function paid()
    {
        alert("Order Successful");
        localStorage.clear();
        navigateToHome()
        window.location.reload();
        
        
    }
    return (
        <div className='bkg'>
            <div className="row justify-content-center">

                <div style={{ marginTop: "125px" }}></div>
                <div className="col-md-6 ">
                    <center><h2 style={{ fontSize: "40px" }}>My Cart</h2></center>
                    <hr />

                    {cartItems.map(item => {
                        return (
                            <div className="flex-container">

                                <div className="text-left m-1 w-100">
                                    <h4 style={{ display: 'inline' }}>{item.name}  [ {item.variant} ]</h4>
                                    <h5>Price: ₹{item.price}/-</h5>
                                    <hr />
                                </div>
                                <div className="m-1">
                                    <img src={item.image} style={{ height: "60px", width: "60px", borderWidth: "12px", borderColor: "red" }} alt="img" />
                                </div>
                                <div className="m-3">
                                    <button onClick={() => dispatch(deleteFromCart(item))} style={{ background: "transparent", border: "0px" }}>
                                        <i className="fa-solid fa-trash" aria-hidden="true"></i>
                                    </button>
                                </div>

                            </div>

                        )
                    })}



                </div>

                <div className="bkg col-md-4">
                    <br/>
                    <h2 style={{fontSize:"30px", marginLeft:"250px", marginRight:"50px"}}>Total: ₹{subtotal}/-</h2>
                    <button className="btn" style={{marginLeft:"275px", marginRight:"50px", alignSelf:"right"}} onClick={paid}>PAY NOW</button>
                </div>

            </div>
        </div>
    );
}