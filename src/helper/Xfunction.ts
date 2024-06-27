import moment from "moment";

export const handleSetLocalStorage = (key: string, language: string) => {
  localStorage.setItem(key, language);
};

export const handleGetLocalStorage = (key: any) => {
  return localStorage.getItem(key);
};

export const formatDate = (isoString: any) => {
  const date = moment(isoString);

  const month = date.format("MM");
  const day = date.format("DD");
  const hours = date.format("HH");
  const minutes = date.format("mm");

  return `thg ${month} ${day}, ${hours}:${minutes}`;
};

export const convertToSlug = (str: string) => {
  str = str.toLowerCase();

  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  str = str
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

  return str;
};
