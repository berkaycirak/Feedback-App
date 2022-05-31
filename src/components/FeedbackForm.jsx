import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (text.length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 character');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo- rating select component */}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
