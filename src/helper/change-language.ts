import { getCurrentLocale, setLanguage } from '../i18n';

export const changeLanguage = () => {
  setLanguage(getCurrentLocale().language === 'nl' ? 'en' : 'nl');
  window.location.reload();
};
