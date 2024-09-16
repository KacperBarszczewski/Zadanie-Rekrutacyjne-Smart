import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setFilter } from "../features/users/usersSlice";

const useFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.users.filter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return {
    filter,
    handleFilterChange,
  };
};

export default useFilters;
