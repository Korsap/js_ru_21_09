import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {


	static contextTypes = {
		language: PropTypes.string,
		dictionary: PropTypes.object
	}

    handleDayClick = (day) => {
        const { changeDateRange, range } = this.props
        changeDateRange(DateUtils.addDayToRange(day, range))
    }

    getSelectedRange(selectedRange, selectedLocalRange) {
		if (this.context.language === 'ru') return selectedLocalRange
		return selectedRange
	}

    render() {
        const { from, to } = this.props.range;
        const { month, weekdaysLong, weekdaysShort, firstDayOfWeek } = this.context.dictionary;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
		const selectedLocalRange = from && to && `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
					locale={ this.context.language }
					months={ month }
					weekdaysLong={ weekdaysLong }
					weekdaysShort={ weekdaysShort }
					firstDayOfWeek={ firstDayOfWeek }
                />

				{this.getSelectedRange(selectedRange, selectedLocalRange)}
            </div>
        );
    }

}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange }, null, { pure: false })(DateRange)