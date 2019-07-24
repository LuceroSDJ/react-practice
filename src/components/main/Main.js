import React from 'react';
import TechCard from '../technology/TechCard';
import technologies from '../../technologies.json';
import Nav from '../nav/Nav';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            count: 0,
            topScore: 0
        };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        // this.increment = this.increment.bind(this);
    }

    // documentation: provide a listener when the element is initially rendered ..
    // a common pattern is for an event handler to be a method on the class
    // here I want to render cards with click event to increment the count when clicked
    // also I need the cards to shuffle when the user clicks on an already clicked card & reset the cards (clicked or not clicked)
    handleClick() {
        console.log(this.state.isClicked);
        this.setState( state => ({
            isClicked: !state.isClicked
        }));
        console.log(this.state.isClicked);
    }
    

    render(){
        return(
            //Adjacent JSX elements must be wrapped in an enclosing tag.
            <div>
                <h1>Main area</h1>
                <Nav 
                    score={this.state.count}
                />
                {/* loop through the array of object [json file] / map() method requires a key property */}
                {technologies.map(technology => (
                    <TechCard 
                    // pass in src & alt values to render the image
                    key={technology.id}
                    source={technology.src} 
                    name={technology.name}
                    handleClick={this.handleClick}
                />
                ))}
            </div>
        )  //return closes
    } //render closes
}

export default Main;