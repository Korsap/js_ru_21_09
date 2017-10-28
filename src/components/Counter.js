import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'
import Localized from './Localized'

class Counter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3><Localized>Count</Localized>: {this.props.count} <button onClick = {this.handleIncrement}><Localized>Increment</Localized></button></h3>
            </div>
        )
    }

    handleIncrement = () => {
        const action = increment()
        this.props.dispatch(action)
    }
}

const mapStateToProps = (state) => ({
    count: state.counter
})

export default connect(mapStateToProps)(Counter)