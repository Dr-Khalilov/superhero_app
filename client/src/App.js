import { useDispatch } from 'react-redux';
import HeroForm from './components/HeroForm';
import HeroList from './components/HeroList';
import * as ActionCreators from './actions';
function App () {
  const dispatch = useDispatch();
  const createTaskAction = hero =>
    dispatch(ActionCreators.createHeroRequest({ hero }));
  return (
    <div>
      <HeroForm submitHandler={createTaskAction} />
      <HeroList />
    </div>
  );
}

export default App;
