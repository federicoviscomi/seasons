import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lat: undefined, errorMessage: undefined};
    }


    render() {
        console.log('render');
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    Latitude: {this.state.lat}
                </div>
            );
        }
        return (
            <div>
                Loading
            </div>
        );
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            positionError => this.setState({errorMessage: positionError.message})
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update!');
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
