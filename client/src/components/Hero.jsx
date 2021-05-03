import React from 'react';
import { useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';
const Hero = props => {
  const {
    nickName,
    realName,
    originDescription,
    catchPhrase,
    powers,
    images,
    id,
  } = props;
  const dispatch = useDispatch();
  const deleteHandler = () =>
    dispatch(ActionCreators.deleteHeroRequest({ id }));

  return (
    <article>
      <figure>
        <img src={images} alt='superhero' />
        <figcaption>{nickName}</figcaption>
      </figure>
      <h2>{nickName}</h2>
      <h3>{realName}</h3>
      <p>{originDescription}</p>
      <h4>{catchPhrase}</h4>
      <h3>{powers}</h3>
      <button onClick={deleteHandler}>Delete Hero</button>
    </article>
  );
};

export default Hero;
