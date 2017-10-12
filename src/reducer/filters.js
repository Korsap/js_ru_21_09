import {CHANGE_SELECTION, CHANGE_DATE_RANGE, DELETE_ARTICLE} from "../constants";

const defaultFilters = {
	selected: [],
	dateRange: {
		from: null,
		to: null
	}
};

export default (filtersState = defaultFilters, action) => {
	const { type, payload } = action;
	switch (type) {
		case CHANGE_SELECTION:
			return {...filtersState, selected: payload.selected};
		case CHANGE_DATE_RANGE:
			return {...filtersState, dateRange: payload.dateRange};
		//case DELETE_ARTICLE:
		//	return {...filtersState, selected: filtersState.filter()};
		default: return filtersState;
	}
}