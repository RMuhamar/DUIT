import {createStore} from 'redux';
import {reducerCounter} from './Home/reducer';
const storeState = createStore(reducerCounter);
export default storeState;
