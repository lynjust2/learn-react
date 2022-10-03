import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AppProvider>
      <Router>
        { /* APP CONTAINER */ }
        <div className='fill-height'>
          { /* Available routes for this app */ }
          <Routes>
            { /* LOGIN page */ }
            <Route path='/' element={ <LoginPage/> }/>
            { /* DASHBOARD page */ }
            <Route path='/dashboard' element={
              <>
                <Header/>
                <Dashboard/>
              </>
            }/>
          </Routes>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
