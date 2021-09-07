import React, { useState, useEffect } from 'react';

import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { saveShippingAddress } from '../actions/cartActions';
import FormContainer from '../components/FormContainer';
import CheckOutSteps from '../components/checkoutSteps';

const ShippingScreen = ({history}) => {
    
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,postalCode,country}))
        history.push('/payment')
    }

    return (
       <FormContainer>
           <CheckOutSteps step1 step2/>
           <h1>Shipping</h1>
           <Form onSubmit={submitHandler}>
           <Form.Group controlid='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter address'
						value={address ? address : ''}
						onChange={(e) => setAddress(e.target.value)}
					></Form.Control>
				</Form.Group>
                <Form.Group controlid='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter City'
						value={city ? city : ''}
						onChange={(e) => setCity(e.target.value)}
					></Form.Control>
				</Form.Group>
           
           <Form.Group controlid='postalCode'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Postal Code'
						value={postalCode ? postalCode : ''}
						onChange={(e) => setPostalCode(e.target.value)}
					></Form.Control>
				</Form.Group>
                <Form.Group controlid='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Country'
						value={country ? country : ''}
						onChange={(e) => setCountry(e.target.value)}
					></Form.Control>
				</Form.Group>    
                <Button type='submit' variant='primary'>
                    Continue
                    </Button>        
           </Form>
       </FormContainer>
    );
};

export default ShippingScreen;