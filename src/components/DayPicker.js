import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {
	state = {
		from: null,
		to: null
	};

	render(){
		const {from, to} = this.state;
		let dateOptions = {
			era: null,
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			weekday: null,
			timezone: 'UTC',
			hour: null,
			minute: null,
			second: null
		};
		return(
			<div>
				{!from && !to && <p>Please select the <strong>first day</strong>.</p>}
				{from && !to && <p>Please select the <strong>second day</strong>.</p>}
				{from && to &&
					<p>
						You chose from
						{' '}
						<strong>{(new Date(from)).toLocaleDateString(dateOptions)}</strong>
						{' '}
						to
						{' '}
						<strong>{(new Date(to)).toLocaleDateString(dateOptions)}</strong>
						.
						{' '}<a href="" onClick={this.handleResetClick}>Reset</a>
					</p>}
				<DayPicker numberOfMonths={2}
					selectedDays={[from, {from, to}]}
					onDayClick={this.handleDayClick}
					fixedWeeks
				/>
			</div>
		);

	}

	handleDayClick = day => {
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState(range);
	};

	handleResetClick = e => {
		e.preventDefault();
		this.setState({
			from: null,
			to: null
		});
	};
}

export default Calendar;