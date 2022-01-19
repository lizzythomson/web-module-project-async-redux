import React from 'react';
import { connect } from 'react-redux';

const Fox = () => {
  return (
    <div>
      <h2>Cute Fox!</h2>
      <img
        src='https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        alt='fox image'
      />
      <div>
        <button>Get a New Fox</button>
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
