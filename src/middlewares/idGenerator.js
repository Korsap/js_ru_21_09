import {ADD_COMMENT} from "../constants";

let generateUUID = () => {
	return 'xxxxxxxxyxxxxxxxxxxxxxxx'.replace( /[xy]/g, ( char ) => {
		let random = Math.random() * 16 | 0;
		return ( char === 'x' ? random : ( random & 0x3 | 0x8 ) ).toString( 16 );
	} );
};


export default store => next => action => {
	if (action.type === ADD_COMMENT) {
		let newCommentID = generateUUID();
		action.payload.comment.id = newCommentID; //нужно передавать в объект {comment}
		console.log('--- new ID:', newCommentID);
		next(action);
	}
	next(action);
}