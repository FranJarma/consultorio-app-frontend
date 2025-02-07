import { AuthProvider, HttpError } from 'react-admin';

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetch(`${import.meta.env.VITE_SIMPLE_REST_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new HttpError('Invalid credentials', 401);
    }

    const { token, user } = await response.json();
    localStorage.setItem('auth', JSON.stringify({ token, user }));
  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: async () => {
    const auth = JSON.parse(localStorage.getItem('auth') || '{}');
    return auth?.user?.role ? Promise.resolve(auth.user.role) : Promise.reject();
  },
  getIdentity: async () => {
    const auth = JSON.parse(localStorage.getItem('auth') || '{}');
    return auth?.user ? Promise.resolve(auth.user) : Promise.reject();
  },
  checkError: () => Promise.resolve(),
};

export default authProvider;
