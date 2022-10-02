import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedBackProvider } from './context/FeedbackContext';

function App() {
  return (
    // Wrap the app inside provider so all components have access
    <FeedBackProvider>
      <Router>
        { /* NAVBAR */ }
        <Header/>
        { /* APP CONTAINER */ }
        <div className='container'>
          { /* Available routes for this app */ }
          <Routes>
            { /* HOME page */ }
            <Route exact path='/' element={
              <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
              </>
            }>
            </Route>
            { /* ABOUT page */ }
            <Route path='/about' element={ <AboutPage/> }/>
          </Routes>
          <AboutIconLink/>
        </div>
      </Router>
    </FeedBackProvider>
  )
}

export default App
