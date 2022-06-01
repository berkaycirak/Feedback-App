import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import AboutIconLink from './components/AboutIconLink';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      const newArray = feedback.filter((item) => item.id !== id);
      setFeedback(newArray);
    }
  };
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
                </>
              }
            />

            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
