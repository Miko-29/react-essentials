import { UserContext } from "./UserContext";
import { useContext } from "react";

export const Avatar = () => {
  const { user, setUser } = useContext(UserContext);

  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Current theme : {user.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
