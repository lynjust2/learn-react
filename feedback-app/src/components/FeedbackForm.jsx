import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  // Load in global context/state
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  // Watch for changes on feedbackEdt and execute accordingly
  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  // Local/component state variables
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(8)

  // Simulates a watcher that validates the feedback text
  const handleTextChange = (event) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(event.target.value)
  }

  // Handle form submission or updates
  const handleSubmit = (event) => {
    event.preventDefault()
    // Only submit if text is at least 10 characters
    if (text.trim().length >= 10) {
      const newFeedback = { text, rating }
      // Check if submitting new data or just an update
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      // Clear the form
      setText('')
      setBtnDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={ handleSubmit }>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={ (rating) => setRating(rating)}/>
        <div className='input-group'>
          <input onChange={ handleTextChange } type='text' placeholder='Write a review' value={ text }/>
          <Button type='submit' isDisabled={ btnDisabled }>{ feedbackEdit.edit ? 'Update' : 'Send' }</Button>
        </div>
        { message && <div className='message'>{ message }</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
