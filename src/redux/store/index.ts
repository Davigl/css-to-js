import { createWrapper } from 'next-redux-wrapper';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({});

const store = createStore(rootReducer);
const storeWrapper = createWrapper(() => store);
const { dispatch } = store;

export type RootState = ReturnType<typeof rootReducer>;
export { storeWrapper, dispatch };
