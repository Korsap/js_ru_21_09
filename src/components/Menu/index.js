import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import Localized from '../Localized'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2><Localized>Main Menu</Localized></h2>
                {this.props.children}
            </div>
        )
    }
}

export {MenuItem}
export default Menu