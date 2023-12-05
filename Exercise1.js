import React, { Component } from 'react';

class LifecycleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        // API call or other initialization tasks
        this.setState({ data: 'Data fetched' });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.data !== prevState.data) {
            console.log('Component data updated');
        }
    }

    componentWillUnmount() {
        // Clean-up tasks
        console.log('Component will unmount');
    }

    render() {
        return (
            <div>
                <h1>React Lifecycle Example</h1>
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default LifecycleExample;
