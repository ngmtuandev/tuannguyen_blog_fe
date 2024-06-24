export const handleSetLocalStorage = (language: string) => {
  localStorage.setItem("language", language);
};

export const handleGetLocalStorage = (key: any) => {
  return localStorage.getItem(key);
};
