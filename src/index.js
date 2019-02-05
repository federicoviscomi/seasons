import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.tsx';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: undefined, errorMessage: undefined};

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }

    renderContent() {
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
                <Spinner message="Please accept location permission"/>
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
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
