import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import {useSelector , useDispatch} from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function Cakes({ cake }) {
    
    const [variant, setvariant] = useState("Slice");
    const [choice, setchoice] = useState("Eggless");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch()

    /*if(cake.name==="Wedding Cake")
    {
        [variant, setvariant] = ["2kg", setvariant];
    }*/

    function addtocart()
    {
        alert(cake.name+" added to cart")
        dispatch(addToCart(cake, variant, choice))
    }

    return (
        <div className='div p-3 shadow-lg mb-5 bg-white rounded'>
            <center>
            <div onClick={handleShow}>
                <h1>{cake.name}</h1>
                <img src={cake.image} className='img-fluid' style={{ height: '200px', width: '200px' }} alt={cake.name} />
            </div>
            <div className='flex-container m-1'>
                <div className='w-100'>
                    <p>Variants</p>
                    <select className='form-control'  value={variant} onChange={(e) => { setvariant(e.target.value) }}>
                        {cake.variants.map(variant => {
                            return <option value={variant}>{variant}</option>
                        })}
                    </select>
                </div>

                <div className='w-100'>
                    <p>Choices</p>
                    <select className='form-control m-1' value={choice} onChange={(e) => { setchoice(e.target.value) }}>
                        {cake.choices.map(choice => {
                            return <option value={choice}>{choice}</option>
                        })}
                    </select>
                </div>
            </div>
            

            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1>Price: ₹{cake.prices[0][variant]}/-</h1>
                </div>

                <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>Add To Cart</button>
                </div>
            </div>
            </center>
            <Modal show = {show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{cake.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <center>
                        <img src = {cake.image} alt = {cake.name} className='img-fluid' style={{height:'300px !important'}}/>
                        <p>{cake.description}</p>
                    </center>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
