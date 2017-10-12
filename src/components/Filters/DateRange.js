import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { connect } from 'react-redux';
import { changeDateRange } from "../../AC/index";
import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    render() {
        const { from, to } = this.props.dateRange;
        console.log('====', this.props);
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
					numberOfMonths={2}
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

	handleDayClick = day => {
    	const {range, changeDateRange} = this.props;
		changeDateRange(DateUtils.addDayToRange(day, range));
	};
}

function mapStateToProps(state) {
	return {
		dateRange: state.filters.dateRange
	}
}

export default connect(mapStateToProps, { changeDateRange })(DateRange);