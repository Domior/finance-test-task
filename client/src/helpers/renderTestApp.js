import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../redux/reducers';

export const renderTestApp = (component, options) => {
  const store = createStore(options?.reducer || rootReducer, applyMiddleware(thunk));
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>{component}</MemoryRouter>
    </Provider>,
    store,
  );
};
