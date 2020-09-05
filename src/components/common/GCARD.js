import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Input = () => {
    return <input placeholder="Your input here" />;
};

const GCARD = () => {
    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Card style={{ width: '18rem' }}>
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>));
    };

    return (
        <div>
            <button onClick={onAddBtnClick}>Add input</button>
            {inputList}
        </div>
    );
};

export default GCARD;