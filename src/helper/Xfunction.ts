export const handleSetLocalStorage = (key: string, language: string) => {
  localStorage.setItem(key, language);
};

export const handleGetLocalStorage = (key: any) => {
  return localStorage.getItem(key);
};
