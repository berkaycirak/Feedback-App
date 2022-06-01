import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      });

      const newArray = feedback.filter((item) => item.id !== id);
      setFeedback(newArray);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{ feedback, addFeedback, deleteFeedback, isLoading }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
