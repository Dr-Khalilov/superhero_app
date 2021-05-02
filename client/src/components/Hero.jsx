import React from 'react';

const Hero = props => {
  const {
    nickName,
    realName,
    originDescription,
    catchPhrase,
    powers,
    images,
  } = props;
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
    </article>
  );
};

export default Hero;
