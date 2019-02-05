import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';

class App extends React.Component {
    state = {lat: undefined, errorMessage: undefined};

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
                    Latitude: <SeasonDisplay lat={this.state.lat}/>
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
