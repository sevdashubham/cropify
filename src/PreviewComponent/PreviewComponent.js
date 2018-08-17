import React, {Component} from 'react';

class PreviewComponent extends Component {
    render() {
        const src = JSON.parse(localStorage.getItem('img'));
        console.log(src);
        return (
            <div className="text-center">
                <img alt="localImage" src={src}/>
            </div>);
    }
}

export default PreviewComponent
