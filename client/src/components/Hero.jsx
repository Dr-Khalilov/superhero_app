import React from 'react';

const Hero = props => {
  const {
    nickName,
    realName,
    originDescription,
    catchPhrase,
    superpowers,
    images,
    id,
  } = props;
  return (
    <article>
      <h2>{nickName}</h2>
      <h3>{realName}</h3>
      <p>{originDescription}</p>
      <h4>{catchPhrase}</h4>
      {/* <h3>{superpowers}</h3>
      <figure>
        <img src={images} alt='superhero' />
        <figcaption>{nickName}</figcaption>
      </figure> */}
    </article>
  );
};

export default Hero;
