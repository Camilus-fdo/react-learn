import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from './routes'

function App() {
  return (
    <div className="App">
      <Routes isAuthorized={true} />
    </div>
  );
}

export default App;
