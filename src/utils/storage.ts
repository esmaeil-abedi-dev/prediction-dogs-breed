export default {
  setItem: (key: string, value: string, isJson?: boolean) => {
    localStorage.setItem(key, isJson ? JSON.stringify(value) : value);
  },

  getItem: (key: string, isJson?: boolean) => {
    const value: string | null = localStorage.getItem(key);
    if (value) {
      return isJson ? JSON.parse(value) : value;
    }
    return undefined;
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};
