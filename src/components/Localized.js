import React, {Component} from 'react'
import PropTypes from 'prop-types'

function Localized(props, context) {
	console.log("---", 25, context.dictionary[props.children])
	return <span>{context.dictionary[props.children]}</span>
}

Localized.propTypes = {
	children: PropTypes.string
}

Localized.contextTypes = {
	dictionary: PropTypes.object.isRequired
}

export default Localized;