import React from 'react';
import { connect } from 'react-redux';

import { getFox } from './../actions';

const Fox = (props) => {
  const { foxImage, isFetching, error, dispatch } = props;

  if (error) {
    return <h2>Oh no! There was an error. {error}</h2>;
  }

  if (isFetching) {
    return <h2>Finding a Fox!</h2>;
  }

  const handleClick = () => {
    dispatch(getFox());
  };
  return (
    <div className='container'>
      <img src={foxImage} alt='fox image' />
      <div>
        <button onClick={handleClick}>Get a New Fox</button>
      </div>
      <div className='facts-container'>
        <h3>Fun Facts About Foxes:</h3>
        <p>A group of foxes is called a skulk or leash</p>
        <p>
          Foxes have whiskers on their legs and face, which help them to
          navigate
        </p>
        <p>Foxes use the Earth's magnetic field to hunt</p>
        <p>The smalles fox weighs less than 3 pounds as an adult</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    foxImage: state.foxImage,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Fox);
