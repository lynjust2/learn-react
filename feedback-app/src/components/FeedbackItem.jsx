import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card'

function FeedbackItem({ item }) {
  // Load in global context/state
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{ item.rating }</div>
      <button className='edit' onClick={ () => editFeedback(item) }>
        <FaEdit color='black'/>
      </button>
      <button className='close' onClick={ () => deleteFeedback(item.id) }>
        <FaTimes color='black'/>
      </button>
      <div className='text-display'>{ item.text }</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem
