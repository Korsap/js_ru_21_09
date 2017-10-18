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
		action.payload.comment.id = newCommentID;
		console.log('--- new ID:', newCommentID);
		//next(action); //В этом месте не совсем понял. В этом случае action вызывается еще раз?? Как результат
		// комментарий добавляется дважды, но c одинаковым ID
	}
	next(action);
}