import { render } from '@testing-library/react';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../../redux/reducers';

export const renderWithRedux = (component, reducer = rootReducer) => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return render(<Provider store={store}>{component}</Provider>);
};
