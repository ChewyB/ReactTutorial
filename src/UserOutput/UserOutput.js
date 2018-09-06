import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>User Output: {props.userName}</p>
            <p>User Output {props.userName}</p>
        </div>
    );
}

export default userOutput;