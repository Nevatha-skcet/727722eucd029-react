import React, { useState } from 'react';
import ChildComponent from './Exercise9Child';

const ParentComponent = () => {
    const [parentData, setParentData] = useState("Data from Parent");
    const [childFeedback, setChildFeedback] = useState("");

    const handleChildCallback = (childData) => {
        setChildFeedback(childData);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent 
                data={parentData} 
                callback={handleChildCallback} 
            />
            {childFeedback && <p>Feedback from Child: {childFeedback}</p>}
        </div>
    );
};

export default ParentComponent;
