import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { resetSort, setFilter, setSortBy } from "../features/users/usersSlice";

const useFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.users.filter);
  const sortBy = useSelector((state: RootState) => state.users.sortBy);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  const resetFilters = () => {
    dispatch(setFilter({ name: "", username: "", email: "", phone: "" }));
    dispatch(resetSort());
  };

  const handleSort = (column: keyof RootState["users"]["filteredUsers"][0]) => {
    dispatch(setSortBy(column));
  };

  return {
    filter,
    sortBy,
    handleFilterChange,
    resetFilters,
    handleSort,
  };
};

export default useFilters;
