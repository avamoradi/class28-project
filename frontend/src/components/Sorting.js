import React from "react";
import { Form } from "react-bootstrap";

const Sorting = ({  history, sorts, setSort }) => {
    
    const onChangeHandler = (e) => {
        e.preventDefault();
        if (e.target.value) {
            setSort(e.target.value);
            history.push(`/sortBy/${e.target.value}`);
        } else {
            history.push("/");
        } 
    }; 
    
    return (
        < >
            <Form  inline>
                        <Form.Control
                        type="text"
                        as='select'
                        className='filter-select'
                        value={sorts}
                        checked
                        onChange={onChangeHandler}
                        >
                            <option value="">Sort by:</option>
                            <option value="HighestPrice">Highest Price</option>
                            <option value="LowestPrice">Lowest Price</option>
                            <option value="BestRating">Best Rating</option>
                            <option value="Newest">Newest</option>
                        </Form.Control>
                        </Form>
        </>
    );
};

export default Sorting;
