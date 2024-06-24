import { useTranslation } from "react-i18next";

const withTranslation = (Component: any) => (props: any) => {
  const { t, i18n } = useTranslation("language");

  return <Component t={t} i18n={i18n} {...props}></Component>;
};

export default withTranslation;
