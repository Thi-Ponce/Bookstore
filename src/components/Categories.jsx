import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <p className="progress">Progress will be here</p>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
