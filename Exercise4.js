import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

class ButtonComponent extends Component {
    render() {
        const style = {
            button: {
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '15px 32px',
                textAlign: 'center',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                cursor: 'pointer',
                ':hover': {
                    backgroundColor: '#45a049'
                }
            },
            // Media query example
            '@media (max-width: 600px)': {
                button: {
                    width: '100%'
                }
            }
        };

        return (
            <StyleRoot>
                <button style={style.button}>Click Me!</button>
            </StyleRoot>
        );
    }
}

export default Radium(ButtonComponent);
