import { Route, Routes } from 'react-router-dom';
import { AppHeader, AppMain } from './App.styles';
import { RoutineContextProvider } from './context/RoutineContext';
import Routine from './pages/Routine';
import Home from './pages/home';

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
