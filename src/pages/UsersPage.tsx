import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import useFetchUsers from "../hooks/useFetchUsers";
import useFilters from "../hooks/useFilters";
import FilterInput from "../components/FilterInput";

const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  const { filter, handleFilterChange, resetFilters, handleSort, sortBy } =
    useFilters();

  useFetchUsers();

  return (
    <div className="flex justify-center mt-6 text-slate-200">
      <div className="bg-slate-600 p-6 shadow-lg rounded-lg">
        <table>
          <thead>
            <tr className="*:p-4 *:pb-0 *:cursor-pointer">
              <th onClick={() => handleSort("name")}>
                <div
                  className={`mx-auto p-2 rounded-sm ${
                    sortBy === "name" ? "bg-slate-700 text-white" : ""
                  }`}
                >
                  Name
                </div>
              </th>
              <th onClick={() => handleSort("username")}>
                <div
                  className={`mx-auto p-2 rounded-sm ${
                    sortBy === "username" ? "bg-slate-700 text-white" : ""
                  }`}
                >
                  Username
                </div>
              </th>
              <th onClick={() => handleSort("email")}>
                <div
                  className={`mx-auto p-2 rounded-sm ${
                    sortBy === "email" ? "bg-slate-700 text-white" : ""
                  }`}
                >
                  Email
                </div>
              </th>
              <th onClick={() => handleSort("phone")}>
                <div
                  className={`mx-auto p-2 rounded-sm ${
                    sortBy === "phone" ? "bg-slate-700 text-white" : ""
                  }`}
                >
                  Phone
                </div>
              </th>
            </tr>
            <tr className="*:p-4">
              <th>
                <FilterInput
                  name="name"
                  value={filter.name}
                  onChange={handleFilterChange}
                  placeholder="Filter by name"
                />
              </th>
              <th>
                <FilterInput
                  name="username"
                  value={filter.username}
                  onChange={handleFilterChange}
                  placeholder="Filter by username"
                />
              </th>
              <th>
                <FilterInput
                  name="email"
                  value={filter.email}
                  onChange={handleFilterChange}
                  placeholder="Filter by email"
                />
              </th>
              <th>
                <FilterInput
                  name="phone"
                  value={filter.phone}
                  onChange={handleFilterChange}
                  placeholder="Filter by phone"
                />
              </th>
              <th>
                <button
                  className="border border-transparent rounded p-2 bg-slate-500 hover:border-slate-200 hover:bg-slate-400"
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center *:p-2 odd:bg-slate-500">
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
