import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  // Load in global context/state
  const { feedback } = useContext(FeedbackContext)

  // Compute average rating
  let avg = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  // Format average value
  avg = isNaN(avg) ? 0 : avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{ feedback.length } Reviews</h4>
      <h4>Average Rating: { avg }</h4>
    </div>
  )
}

export default FeedbackStats
