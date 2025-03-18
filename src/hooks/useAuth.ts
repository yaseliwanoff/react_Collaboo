import { useState, useEffect } from "react";
import { auth, onAuthStateChanged, User } from "../lib/firebase";
import { useToken } from "../contexts/TokenContext"; // Импортируйте контекст

const useAuth = () => {
  const { setToken } = useToken(); // Получите функцию для установки токена
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshToken = async (currentUser: User) => {
    try {
      const token = await currentUser.getIdToken(true); // Принудительное обновление токена
      localStorage.setItem("firebaseToken", token);
      setToken(token); // Сохраните новый токен в контексте
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true); // Устанавливаем loading в true, пока не получим состояние пользователя
      if (currentUser) {
        setUser(currentUser);
        refreshToken(currentUser); // Обновляем токен при входе пользователя
      } else {
        setUser(null);
        localStorage.removeItem("firebaseToken");
        setToken(null); // Удаляем токен из контекста
      }
      setLoading(false); // После завершения аутентификации, меняем состояние loading
    });

    return () => unsubscribe();
  }, [setToken]);

  useEffect(() => {
    let refreshInterval: NodeJS.Timeout | null = null;

    if (user) {
      // Устанавливаем интервал на обновление токена каждые 55 минут
      refreshInterval = setInterval(() => {
        refreshToken(user); // Обновление токена
      }, 55 * 60 * 1000); // 55 минут
    }

    return () => {
      if (refreshInterval) clearInterval(refreshInterval); // Очистка интервала при размонтировании компонента
    };
  }, [user]);

  return { user, loading };
};

export default useAuth;
