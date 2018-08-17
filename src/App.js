import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ImageComponent from "./ImageComponent/ImageComponent";
import PreviewComponent from "./PreviewComponent/PreviewComponent";


class App extends Component {
    render() {
        return (
            <div className="App">
                    <Router>
                        <div>
                            <Route path="/" exact component={ImageComponent} />
                            <Route path="/preview" component={PreviewComponent} />
                        </div>
                    </Router>
            </div>
        );
    }
}

export default App;
