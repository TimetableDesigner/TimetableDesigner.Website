import logo from "../../resources/logo.svg";
import Button from "react-bootstrap/Button";
import React, {Component} from "react";

type Properties = {
    counter: number;
};

class HomePage extends Component<{}, Properties> {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    onButtonClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render(){
        return (
            <div>
                <header>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Button onClick={this.onButtonClick}>counter: {this.state.counter}</Button>
                </header>
            </div>
        );
    }
}

export default HomePage;