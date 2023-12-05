import React from 'react';

const ChildComponent = ({ data, callback }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>Data received from Parent: {data}</p>
            <button onClick={() => callback("Hello from Child")}>
                Send Feedback to Parent
            </button>
        </div>
    );
};

export default ChildComponent;
