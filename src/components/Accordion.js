import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toggler extends Component {
    state = {
        openItemId: null
    };

	memorizedTogglers = new Map();
    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        });
    };

    toggleOpenItemMemorized = (openItemId) => {
        if (this.memorizedTogglers.get(openItemId)) return this.memorizedTogglers.get(openItemId);
        const toggler = this.toggleOpenItem(openItemId);
        this.memorizedTogglers.set(openItemId, toggler);
        return toggler;
    };
}

export default Toggler;