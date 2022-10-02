import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  // Load in global context/state
  const { feedback } = useContext(FeedbackContext)

  // If no feedback then just return a simple message
  if (!feedback || feedback.length === 0) {
    return (<p>No feedback yet ...</p>)
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        { feedback.map((item) => (
          <motion.div key={ item.id } initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItem key={ item.id } item={ item }/>
          </motion.div>
        )) }
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
