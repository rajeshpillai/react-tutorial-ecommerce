import React from 'react';

export default class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.saveRating = this.saveRating.bind(this);
        this.state = {
            rating: 0
        }
        // this.state = {
        //     rating: props.rating
        // }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props.rating, state.rating);
        if (props.rating !== state.rating) {
            return {
                rating: props.rating,
            };
        }
        // Return null if the state hasn't changed
        return null;
    }

    saveRating(val) {
        this.setState({
            rating: val
        })
        this.props.onChangeRating(val);
    }

    render() {

        const startView = [1, 2, 3, 4, 5].map(d => {
            var fontcolor = (d <= this.state.rating) ? "orange" : "white";
            return (<span key={d} className="pointer star" style={{ color: fontcolor }}
                onClick={() => this.saveRating(d)} >&#x2605;</span>)
        })


        return (
            <div>
                {/* Rating - {this.state.rating}  */}
                {startView}
            </div>
        )
    }
}