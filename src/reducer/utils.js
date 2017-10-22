import {OrderedMap, Record} from 'immutable'

export function arrToMap(arr, ItemRecord) {
    return arr.reduce((acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item), new OrderedMap({}))
}

export function mapToArr(obj) {
    return Object.values(obj)
}

export const ReducerRecord = Record({
	entities: new OrderedMap({}),
	loading: false,
	loaded: false
})