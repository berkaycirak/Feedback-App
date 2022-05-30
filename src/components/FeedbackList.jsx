import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedback }) {
  return (
    <div>
      {feedback.map((item) => {
        return (
          <div key={item.id}>
            <FeedbackItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
