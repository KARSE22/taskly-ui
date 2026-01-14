import logoDark from './assets/logo-dark.svg';

function App() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-8">
      <img src={logoDark} className="mb-8 h-8" alt="Taskly logo" />
      <h1 className="text-foreground mb-4 text-4xl font-bold">Welcome to Taskly</h1>
      <p className="text-muted-foreground">Your task management solution</p>
    </div>
  );
}

export default App;
