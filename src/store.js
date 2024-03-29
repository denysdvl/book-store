import { createStore, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import reducer from './reducers'

const rootReducer = combineReducers({
    bookReduser :reducer,
    form: formReducer
  })

const store = createStore(rootReducer);
export default store; 