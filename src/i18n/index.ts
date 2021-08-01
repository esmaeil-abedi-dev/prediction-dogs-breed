import Storage from '../utils/storage';
import nl from './nl';

type Language = 'nl' | 'en';
type Locale = 'nl-NL' | 'en-GB';

interface LanguageInterface {
  locale: Locale;
  language: Language;
}

const NL: Language = 'nl';
const EN: Language = 'en';

const localeConfig: { [key: string]: LanguageInterface } = {
  [NL]: {
    locale: 'nl-NL',
    language: 'nl',
  },
  [EN]: {
    locale: 'en-GB',
    language: 'en',
  },
};

function setLanguageToStorage(language: Language): void {
  Storage.setItem('i18nextLng', language);
}

function getLanguageFromStorage(): Language {
  return Storage.getItem('i18nextLng') || process.env.APP_DEFAULT_LANGUAGE;
}

const currentLanguage: Language = getLanguageFromStorage();
let currentLanguageKeys: { [key: string]: string } = {};

function getCurrentLocale(): LanguageInterface {
  return {
    ...localeConfig[currentLanguage],
  };
}

function setLanguage(language: Language): void {
  setLanguageToStorage(language);
}

function getTranslateWithKey(key: string): string {
  return currentLanguageKeys[key];
}

async function setup() {
  switch (currentLanguage) {
    case NL: {
      currentLanguageKeys = nl;
      break;
    }
    case EN: {
      currentLanguageKeys = (await import('./en')).default;
      break;
    }
    default: {
      currentLanguageKeys = nl;
    }
  }
}

function translate(key: string, replace?: { [key: string]: string }): string {
  if (replace) {
    let valueToReturn = [getTranslateWithKey(key)];

    const replacer = (
      array: string[],
      searchValue: string,
      replaceValue: string,
    ): string[] => {
      for (let i = 0; i < array.length; i += 1) {
        if (typeof array[i] !== 'string') {
          // eslint-disable-next-line no-continue
          continue;
        }

        const indexOf = array[i].indexOf(searchValue);
        if (indexOf !== -1) {
          const [before, after] = array[i].split(searchValue);

          array.splice(i, 1, before, replaceValue, after);
          return array;
        }
      }
      return array;
    };

    Object.keys(replace).forEach((placeholder: string) => {
      const searchValue = `{{${placeholder}}}`;
      const replaceValue = replace[placeholder];
      valueToReturn = replacer(valueToReturn, searchValue, replaceValue);
    });
    return valueToReturn.join('');
  }

  return getTranslateWithKey(key);
}

export { getCurrentLocale, setLanguage, setup, NL, EN };

export default translate;
