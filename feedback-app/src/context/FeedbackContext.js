import { createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import feedbackData from '../data/feedbackData';

const FeedbackContext = createContext(undefined)

export const FeedBackProvider = ({ children }) => {
  // Global context/state variables
  const [feedback, setFeedback] = useState(feedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

  // Add feedback to global context
  const addFeedback = (newFeedback) => {
    // Assign a new id
    newFeedback.id = uuidv4()
    // Add new item
    setFeedback([newFeedback, ...feedback])
    // Trigger the rating selector to clear
    setFeedbackEdit({ item: {}, edit: false })
  }

  // Delete feedback from global context
  const deleteFeedback = (id) => {
    if (window.confirm('Are your sure you want to delete?')) {
      setFeedback(feedback.filter((item) => { return item.id !== id }))
    }
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  // Update feedback item
  const updateFeedback = (id, newData) => {
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...newData } : item))
    setFeedbackEdit({ item: {}, edit: false })
  }


  // Return the context state and methods for component consumption
  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback
    }}>
      { children }
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
