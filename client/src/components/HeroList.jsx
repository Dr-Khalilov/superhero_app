import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';

const HeroList = props => {
  const { heroes, isFetching, error } = useSelector(({ hero }) => hero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.getHeroesRequest());
  }, [dispatch]);

  return (
    <div>
      {heroes.map(hero => (
        <div key={hero.id}>{JSON.stringify(hero)}</div>
      ))}
    </div>
  );
};

// const mapStateToProps = ({ hero }) => hero;
// const mapDispatchToProps = dispatch => ({
//   getHeroesAction: () => dispatch(ActionCreators.getHeroRequest()),
// });

export default HeroList;
