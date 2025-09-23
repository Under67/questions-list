import { Header } from '@/widgets/Header';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default BaseLayout;
