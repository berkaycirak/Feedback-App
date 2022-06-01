import spinner from '../assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt='spinner'
      style={{ width: '50px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
