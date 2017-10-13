import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { connect } from 'react-redux';
import { changeDateRange } from "../../AC/index";
import 'react-day-picker/lib/style.css';

class DateRange extends Component {

	render(){
		const {from, to} = this.props.dateRange;
		return(
			<div>
				{!from && !to && <p>Please select the <strong>first day</strong>.</p>}
				{from && !to && <p>Please select the <strong>second day</strong>.</p>}
				{from && to &&
				<p>
					You chose from
					{' '}
					<strong>{from.toLocaleDateString()}</strong>
					{' '}
					to
					{' '}
					<strong>{to.toLocaleDateString()}</strong>
					.
					{' '}<a href="" onClick={this.handleResetClick}>Reset</a>
				</p>}
				<DayPicker numberOfMonths={2}
						   selectedDays={[from, {from, to}]}
						   onDayClick={this.handleDayClick}
				/>
			</div>
		);

	}

	handleDayClick = day => {
		const range = DateUtils.addDayToRange(day, this.props.dateRange);
		this.props.changeDateRange(range);
	};

	handleResetClick = e => {
		e.preventDefault();
		this.props.changeDateRange({
			from: null,
			to: null
		});
	};
}

function mapStateToProps(state) {
	return {
		dateRange: state.filters.dateRange
	};
}

export default connect(mapStateToProps, { changeDateRange })(DateRange);
