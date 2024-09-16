import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import useFetchUsers from "../hooks/useFetchUsers";
import useFilters from "../hooks/useFilters";
import FilterInput from "../components/FilterInput";

const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  const { filter, handleFilterChange } = useFilters();

  useFetchUsers();

  return (
    <div>
      <FilterInput
        name="name"
        value={filter.name}
        onChange={handleFilterChange}
        placeholder="Filter by name"
      />
      <FilterInput
        name="username"
        value={filter.username}
        onChange={handleFilterChange}
        placeholder="Filter by username"
      />
      <FilterInput
        name="email"
        value={filter.email}
        onChange={handleFilterChange}
        placeholder="Filter by email"
      />
      <FilterInput
        name="phone"
        value={filter.phone}
        onChange={handleFilterChange}
        placeholder="Filter by phone"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
