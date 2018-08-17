import React, {Component} from 'react';
import logo from '../logo.svg';
import {cropifyService} from '../_services';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSaved: false,
            theInputKey: '',
            file: '',
            imagePreviewUrl: '',
            width: 100,
            height: 100,
            isLoading: false
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSaveImage = this._handleSaveImage.bind(this);
        this._removeImage = this._removeImage.bind(this);
        this._printPreview = this._printPreview.bind(this);
        this._onChangeWidth = this._onChangeWidth.bind(this);
        this._onChangeHeight = this._onChangeHeight.bind(this);
    }

    _onChangeWidth(e) {
        e.preventDefault();
        this.setState({
            width: e.target.value
        });
    }

    _onChangeHeight(e) {
        e.preventDefault();
        this.setState({
            height: e.target.value
        });
    }

    _handleSaveImage(e) {
        e.preventDefault();
        this.setState({
            isSaved: true,
            isLoading: true,
            imagePreviewUrl: ''
        });
        cropifyService.saveImage().then(
            data => {
                this.setState({
                    imagePreviewUrl: data.text,
                    isLoading: false
                });
                localStorage.setItem('img', JSON.stringify(data.text));
            }
        );

    }

    _handleImageChange(e) {
        e.preventDefault();
        if ((e.target.files[0].size / 1024) <= 1024) {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {
                const tempImg = new Image();
                tempImg.src = reader.result;
                tempImg.onload = () => {
                    const MAX_WIDTH = 800;
                    const MAX_HEIGHT = 100;
                    console.log(this.state.height + ' ' + this.state.width);
                    let tempW = this.state.width;
                    let tempH = this.state.height;
                    if (tempW > tempH) {
                        if (tempW > MAX_WIDTH) {
                            tempW = MAX_WIDTH;
                        }
                    } else {
                        if (tempH > MAX_HEIGHT) {
                            tempH = MAX_HEIGHT;
                        }
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = tempW;
                    canvas.height = tempH;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(tempImg, 0, 0, tempW, tempH);
                    const dataURL = canvas.toDataURL("image/jpeg");
                    console.log(dataURL);
                    this.setState({
                        file: file,
                        isSaved: false,
                        imagePreviewUrl: dataURL
                    });
                };
            };
            reader.readAsDataURL(file)
        } else {
            this._errorOnMaxLimit();
        }

    }

    _errorOnMaxLimit() {
        this.randomString = Math.random().toString(36);
        alert('Maximum Limit of 1 mb my friend!');
        this.setState({
            theInputKey: this.randomString,
            imagePreviewUrl: ''
        });
    }

    _removeImage(e) {
        e.preventDefault();
        this.randomString = Math.random().toString(36);
        this.setState({
            theInputKey: this.randomString,
            isSaved: false,
            imagePreviewUrl: ''
        });
        console.log(this.randomString);
    }

    _printPreview(e) {
        e.preventDefault();
        if (this.state.isSaved) {
            console.log('hello');
            window.open('/preview');
        }
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="mt-4" alt="hello" src={imagePreviewUrl}/>);
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="mt-2 App-logo" alt="logo"/>
                    <h1 className="App-title mt-5">Welcome to Cropify</h1>
                </header>
                <p className="App-intro pt-5">
                    To get started, upload an image.
                </p>
                <div className="pt-3">
                    <form>
                        <input title="width" placeholder="Width" type="number" onChange={this._onChangeWidth}/>
                        <input title="height" placeholder="Height" type="number" onChange={this._onChangeHeight}/>
                        <input type="file" onChange={this._handleImageChange} key={this.state.theInputKey || ''}/>
                        <button className="mx-2" onClick={this._removeImage}>Remove Image</button>
                        <button onClick={this._handleSaveImage}>Save Image</button>
                        <button className="mx-2" disabled={!this.state.isSaved} onClick={this._printPreview}>Print
                            Preview
                        </button>
                    </form>
                    {$imagePreview}
                </div>
                <div> {this.state.isLoading && (
                    <p className="circle">
                   <span className="ouro">
                       <span className="left">
                           <span className="anim"></span></span>
                         <span className="right">
                           <span className="anim"></span></span>
                    </span>
                    </p>
                )}
                </div>
            </div>
        );
    }
}

export default ImageComponent;
