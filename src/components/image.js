import React from 'react';


export default class Image extends React.Component {
    state = {
        isLoaded: false
    }

    load(img) {
        console.log("End: ", new Date());
        var image = img;
        image.src = this.props.url;
        image.onload = () => {
            this.onImageLoaded();
        }

        image.onerror = () => {
            this.onImageLoadError(this.props.url);
        };
    }

    componentDidMount() {
        this.load(this.img);
    }


    onImageLoadError = () => {
        this.setState({
            isError: true
        });
    }

    onImageLoaded = () => {
        this.setState({
            isLoaded: true
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isLoaded ? null : <h3>Loading...</h3>}
                {this.state.isError && <h3>Error loading...</h3>}
                <img className="p-image" ref={(img) => this.img = img} alt="" />
            </React.Fragment>
        )
    }
}