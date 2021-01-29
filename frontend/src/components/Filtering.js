import React from "react";
import { Form } from "react-bootstrap";

const Filtering = ({location, setLocation, color, setColor, minPrice, setMinPrice, maxPrice, setMaxPrice}) => {
    
    const submitHandler = (e) => {
        e.preventDefault();
        
    };

    return (
        <Form onSubmit={submitHandler} inline>
                        <Form.Control
                        as='select'
                        className='filter-select'
                        title="Location" 
                        value={location}
                        checked
                        onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Location</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Gouda">Gauda</option>
                            <option value="Roterdam">Roterdam</option>
                            <option value="Utrecht">Utrecht</option>
                            <option value="Zwolle">Zwolle</option>
                        </Form.Control>

                        <>
                        <span>Price:</span>
                        <Form.Control
                        as='select'
                        className='filter-select filter-min'
                        title="Price" 
                        value={minPrice}
                        checked
                        onChange={(e) => setMinPrice(e.target.value)}
                        >
                            <option value="">min</option>
                            <option value="10">10</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                            <option value="350">350</option>
                            <option value="550">550</option>
                        </Form.Control>
                        <span>-</span>
                        <Form.Control
                        as='select'
                        className='filter-select filter-max'
                        title="Price" 
                        value={maxPrice}
                        checked
                        onChange={(e) => setMaxPrice(e.target.value)}
                        >
                            <option value="">max</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                            <option value="350">350</option>
                            <option value="550">550</option>
                            <option value="650">650</option>
                        </Form.Control>
                        </>
                        
                        <Form.Control
                        as='select'
                        className='filter-select'
                        label="Filltering"
                        title="Color" 
                        value={color}
                        checked
                        onChange={(e) => setColor(e.target.value)}
                        >
                            <option value="">Color</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Black">Black</option>
                        </Form.Control>


                        

        </Form>
        
    );
};

export default Filtering;
