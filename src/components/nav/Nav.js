import React from 'react';

class Nav extends React.Component {

    render() {
        return(
            <div>
                <h3>Click Me!</h3>
                <ul>
                    <li>Score: {this.props.score} </li>
                    <li>Top Score: </li>
                </ul>
            </div>
        ) //return closes
    } //render closes
}

export default Nav;