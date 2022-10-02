import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {
  // Load in global context/state
  const { feedbackEdit } = useContext(FeedbackContext)

  // Watch the feedbackEdit object and update on changes
  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  // Local component variables
  const [selected, setSelected] = useState(8)

  // Update the selected rating when user clicks on a given value
  const handleChange = (event) => {
    setSelected(+event.currentTarget.value)
    select(+event.currentTarget.value)
  }

  return (
    <ul className='rating'>
      { Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input type='radio' id={ `num${i + 1}` } name='rating' value={i + 1} onChange={ handleChange } checked={ selected === i + 1 }/>
          <label htmlFor={ `num${i + 1}` }>{ i + 1 }</label>
        </li>
      )) }
    </ul>
  )
}

export default RatingSelect
