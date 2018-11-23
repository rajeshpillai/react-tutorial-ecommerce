import React from 'react';

export default class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.saveRating =this.saveRating.bind(this);
        this.state={            
            rating:props.rating
        }    
        //this.maxRating =5;    
    }
    
    saveRating(val){
        this.setState({
            rating:val
        })
        this.props.onChangeRating(val);
    }

    render(){
        
        const startView=[1,2,3,4,5].map(d=>{
            var fontcolor = (d<=this.state.rating)?"orange":"white";
            return(<span key={d} className="pointer star" style={{color:fontcolor}} onClick={()=>this.saveRating(d)} >&#x2605;</span>)
        })            
        

        return(
            <div>
                {/* Rating - {this.state.rating}  */}
                {startView}
            </div>
        )
    }
}