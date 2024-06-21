export const DEFAULT_LOCALE_SETTING = "es";

export const LOCALES_SETTING: LocaleSetting = {
  "es": {
    "label": "Español"
  },
  
  "en": {
    "label": "English"
  },
 
  "pt-br": {
    "label": "Português",
    "lang": "pt-BR"
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: 'rtl' | 'ltr';
  };
 }
