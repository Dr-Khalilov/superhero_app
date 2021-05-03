import { useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';
import HeroForm from '../components/HeroForm';
import HeroList from '../components/HeroList';

const HeroPage = () => {
  const dispatch = useDispatch();
  const createTaskAction = hero =>
    dispatch(ActionCreators.createHeroRequest({ hero }));

  return (
    <div>
      <HeroForm submitHandler={createTaskAction} />
      <HeroList />
    </div>
  );
};

export default HeroPage;
