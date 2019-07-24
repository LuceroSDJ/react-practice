import React from 'react';

class TechCard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {isClicked: true};
    //     // This binding is necessary to make `this` work in the callback
    //     this.handleClick = this.handleClick.bind(this);
    // }

    render() {
        return(
            <div className="card" style={{width: "18rem"}}>
                <img 
                    className="card-img-top" 
                    src={this.props.source} 
                    alt={this.props.name}
                    onClick={this.props.handleClick} 
                />
            </div>
        )  //return closes
    }  //render closes
}

export default TechCard;