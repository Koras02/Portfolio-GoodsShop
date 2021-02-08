import { combinReducres } from 'redux';
import counter from './counter';


const rootrReducer = combinReducres({ counter });

export default rootrReducer;