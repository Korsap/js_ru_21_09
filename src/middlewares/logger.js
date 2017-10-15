export default store => next => action => {
    console.log('--- state before:', store.getState());
    console.log('---', action);

	let generateUUID = () => {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, ( char ) => {
			let r = Math.random() * 16 | 0;
			return ( char === 'x' ? r : ( r & 0x3 | 0x8 ) ).toString( 16 );
		} );
	};

	console.log('--- new ID:', generateUUID());
    next(action);
    console.log('--- state after', store.getState());
}