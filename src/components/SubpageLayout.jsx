import { Outlet } from 'react-router-dom';
import { SubpageHeader } from './SubpageHeader';
import { Footer } from './Footer';

export const SubpageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SubpageHeader />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
