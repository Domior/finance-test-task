import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AppRouter from '../../components/App/AppRouter';

export const renderWithRouter = (component, initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>,
  );
};
