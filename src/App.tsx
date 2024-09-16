import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import UsersPage from "./pages/UsersPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UsersPage />
    </Provider>
  );
};

export default App;
