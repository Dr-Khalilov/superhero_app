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
      {heroes.map(hero => (
        <Hero {...hero} key={hero.id} />
      ))}
    </div>
  );
};

// const mapStateToProps = ({ hero }) => hero;
// const mapDispatchToProps = dispatch => ({
//   getHeroesAction: () => dispatch(ActionCreators.getHeroRequest()),
// });

export default HeroList;
