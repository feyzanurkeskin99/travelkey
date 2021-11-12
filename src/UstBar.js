import { render } from '@testing-library/react';
import React from 'react'
import ReactDOM from 'react-dom'

class UstBar extends React.Component{
    render(){
        return(
            <div className="ustbar">
                <div className="ustbar-button three-line"><img src={this.props.image}></img></div>
                <div className="ustbar-button"><div>TRAVELBAG</div></div>
            </div>
        )
    }
}

export default UstBar;