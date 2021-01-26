import React from "react";
import { Form } from "react-bootstrap";



const Sorting = ({sort, setSort}) => {
    //const [sorts, setSort] =useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        < >
            <Form onSubmit={submitHandler} inline>
                        <Form.Control
                        as='select'
                        className='filter-select'
                        value={sort}
                        checked
                        onChange={(e) => setSort(e.target.value)}
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
