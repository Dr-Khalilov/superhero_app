import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';
import Hero from './Hero';


const HeroList = props => {
  const { heroes, isFetching, error } = useSelector(({ hero }) => hero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.getHeroesRequest());
  }, [dispatch]);

  return (
    <div>
      {isFetching && 'Loading....'}
      <span style={{ color: 'red' }}>
        {error && (
          <>
            {error.message}
            <button onClick={() => dispatch(ActionCreators.clearHeroError())}>
              X
            </button>
          </>
        )}
      </span>
      {heroes.map(hero => (
        <Hero {...hero} key={hero.id} />
      ))}
    </div>
  );
};

export default HeroList;
