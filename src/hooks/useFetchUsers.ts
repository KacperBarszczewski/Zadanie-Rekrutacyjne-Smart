import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../features/users/usersSlice";

const useFetchUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        dispatch(setUsers(data));
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, [dispatch]);
};

export default useFetchUsers;
