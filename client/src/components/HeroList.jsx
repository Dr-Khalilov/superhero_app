import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

const HeroList = props => {
  const { heroes, isFetching, error, getHeroesAction } = props;
  useEffect(() => {
    getHeroesAction();
  }, [getHeroesAction]);
  return (
    <div>
      {heroes.map(hero => (
        <div key={hero.id}>{JSON.stringify(hero)}</div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ hero }) => hero;
const mapDispatchToProps = dispatch => ({
  getHeroesAction: () => dispatch(ActionCreators.getHeroRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
