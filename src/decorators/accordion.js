import React from 'react';

export default Component => class Accordion extends React.Component {
    state = {
        openItemId: null
    };

	memorizedTogglers = new Map();

    render() {
        return <Component {...this.props} toggleOpenItem = {this.toggleOpenItemMemorized} openItemId = {this.state.openItemId}/>
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        });
    };

    toggleOpenItemMemorized = (openItemId) => {
        if (this.memorizedTogglers.get(openItemId)) return this.memorizedTogglers.get(openItemId);
        const toggler = this.toggleOpenItem(openItemId);
        this.memoizedTogglers.set(openItemId, toggler);
        return toggler;
    };
}