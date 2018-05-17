// import { combineReducers } from 'redux'
//
// /* Actions Redux ----> */
// import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_PREV, REGISTER_NEXT, REGISTER_RESET,
// 			MENU_TOGGLE_CLOSE, MENU_TOGGLE_OPEN, LANG_CHANGE,
// }		from '../actions';
// /* <---- Actions Redux */
//
// const authDefaultState = {
// 	isSuccess: false,
// 	isFetching: false,
// 	activeStep: 0,
// 	user: {},
// 	success: {},
// 	isError: false,
// };
//
// function auth(state = authDefaultState, action) {
// 		switch (action.type) {
// 			case REGISTER_RESET:
// 				return Object.assign({}, state, authDefaultState)
// 			case REGISTER_REQUEST:
// 				return Object.assign({}, state, {
// 					isFetching: action.isFetching,
// 					error: {},
// 					success: {},
// 				})
// 			case REGISTER_SUCCESS:
// 				return Object.assign({}, state, {
// 					isFetching: action.isFetching,
// 					user: action.data,
// 					error: {},
// 					success: action.success,
// 					isSuccess: action.isSuccess,
// 					isError: action.isError,
// 					activeStep: action.activeStep,
// 				})
// 			case REGISTER_FAIL:
// 				return Object.assign({}, state, {
// 					isFetching: action.isFetching,
// 					error: action.error,
// 					success: {},
// 					isSuccess: action.isSuccess,
// 					isError: action.isError,
// 					activeStep: action.activeStep,
// 				})
// 			case REGISTER_NEXT:
// 				return Object.assign({}, state, {
// 					isFetching: action.isFetching,
// 					isError: action.isError,
// 					activeStep: action.activeStep,
// 				})
// 			case REGISTER_PREV:
// 				return Object.assign({}, state, {
// 					isFetching: action.isFetching,
// 					activeStep: action.activeStep,
// 				})
// 			default:
// 				return state
// 		}
// };
//
// function sideMenu(state = {open: false}, action) {
// 		switch (action.type) {
// 			case MENU_TOGGLE_OPEN:
// 				return Object.assign({}, state, {
// 					open: action.open,
// 				})
// 			case MENU_TOGGLE_CLOSE:
// 				return Object.assign({}, state, {
// 					open: action.open,
// 				})
// 			default:
// 				return state
// 		}
// };
//
// function language(state = {lang: "FR"}, action) {
// 		switch (action.type) {
// 			case LANG_CHANGE:
// 				return Object.assign({}, state, {
// 					lang: action.lang,
// 				})
// 			default:
// 				return state
// 		}
// };
//
// const myReducers = combineReducers({
// 	auth,
// 	sideMenu,
// 	language,
// })
//
// export default myReducers
