import { LOGIN_FAILED, LOGIN_SUCCESS ,GET_USERS,REGISTER_FAILED,REGISTER_SUCCESS} from '../actions/types';
const initialState = {
    users:[],
    isAuthenticated: false,
    message: ""

  }
export default (state = initialState, action) => {
    console.log('---------------entered',action);
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    isAuthenticated: true,
                    message: action.payload,
                };
            case LOGIN_FAILED:
                return {
                    ...state,
                    isAuthenticated: false,
                    message: action.payload,
                };
            case REGISTER_FAILED:
                return {
                    ...state,
                    message: action.payload,
                };
            case REGISTER_SUCCESS:
                return {
                    ...state,
                    message: action.payload,
                };
        default:
            return state;
    }
}
