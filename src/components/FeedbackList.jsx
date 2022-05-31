import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedback, handleDelete }) {
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}

        {feedback.length === 0 && 'No Feedback Yet!'}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}

  //     {feedback.length === 0 && 'No Feedback Yet!'}
  //   </div>
  // );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
