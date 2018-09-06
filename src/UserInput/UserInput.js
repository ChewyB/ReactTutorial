import React from 'react';

const userInput = (props) => {
    return <input type="text" onChange={props.input} value={props.userName}/>
    
}

export default userInput;