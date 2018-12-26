import './ImageCard.css';
import React, {Component} from 'react';

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        //creates a React reference for our jsx image element so we can access it via the DOM
        this.imageRef = React.createRef();
    }

    //waits for image to load and invokes callback, otherwise image height will be set to 0 due to order of operations
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }   

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10 + 4);

        this.setState({ spans });
    }

    render() {
        const {description, urls} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img 
                className="card"
                alt={description} 
                src={urls.regular}
                ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;