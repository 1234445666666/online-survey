import { create } from "zustand";

interface AuthState {
  users: { username: string; password: string }[];
  currentUser: string | null;
  isAuthenticated: boolean;
  register: (username: string, password: string) => void;
  login: (username: string, password: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  currentUser: localStorage.getItem("currentUser"),
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  register: (username: string, password: string) => {
    console.log("Регистрируем пользователя:", username, password);

    set((state) => {
      if (state.users.some((user) => user.username === username)) {
        alert("Пользователь с таким именем уже существует");
        return { users: state.users };
      }
      const users = [...state.users, { username, password }];
      localStorage.setItem("users", JSON.stringify(users));
      return { users };
    });
  },
  login: (username: string, password: string) => {
    console.log("Пытаемся войти:", username, password);

    set((state) => {
      const user = state.users.find((user) => user.username === username);
      if (!user) {
        alert("Пользователь не найден");
        return { users: state.users };
      }
      if (user.password !== password) {
        alert("Неверный пароль");
        return { users: state.users };
      }
      localStorage.setItem("currentUser", username);
      localStorage.setItem("isAuthenticated", "true");
      return {
        currentUser: username,
        isAuthenticated: true,
        users: state.users,
      };
    });
  },
}));
