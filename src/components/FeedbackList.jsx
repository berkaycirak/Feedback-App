import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedback, handleDelete }) {
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}

      {feedback.length === 0 && 'No Feedback Yet!'}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
