import { useTranslation } from 'react-i18next';
// '@mui
import { enUS, viVN } from '@mui/material/locale';

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'VietNamese',
    value: 'vn',
    systemValue: viVN,
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_vn.svg',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg',
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
