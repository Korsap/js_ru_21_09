import React from 'react'
import PropTypes from 'prop-types'
import Localized from './Localized'

function Loader(props) {
    return (
        <h3>
			<Localized>Loading...</Localized>
        </h3>
    )
}

Loader.propTypes = {
}

export default Loader