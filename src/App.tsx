import { AppHeader, AppMain } from './App.styles';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Routine from './pages/Routine';
import { RoutineContextProvider } from './context/RoutineContext';

function App() {
  return (
    <div className='App'>
      <AppHeader>
        <h2>react gym tracker </h2>
      </AppHeader>
      <AppMain>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/routine/:id" element={
          <RoutineContextProvider>
            <Routine/>
          </RoutineContextProvider>}/>
        </Routes>
      </AppMain>
    </div>
  );
}

export default App
