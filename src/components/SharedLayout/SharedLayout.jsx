import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
