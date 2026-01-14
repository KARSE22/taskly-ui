import { Outlet } from 'react-router-dom';
import logoDark from './assets/logo-dark.svg';

function App() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <header className="border-b px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logoDark} className="h-6" alt="Taskly logo" />
        </a>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
