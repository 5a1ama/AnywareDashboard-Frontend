import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguagesButtons = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
    };

    const lang = localStorage.getItem("i18nextLng");

    const [isEnglishVisible, setIsEnglishVisible] = useState(false);
    const [isArabicVisible, setIsArabicVisible] = useState(false);

    useEffect(() => {
        if (lang === "en-US" || lang === "en") 
        {
            setIsEnglishVisible(false);
            setIsArabicVisible(true);
        }
        else
        {
            setIsArabicVisible(false);
            setIsEnglishVisible(true);
        }
      }, [lang]);

    const vanishEnglishButton = () => {
        setIsEnglishVisible(false);
        setIsArabicVisible(true);
    };

    const vanishArabicButton = () => {
        setIsArabicVisible(false);
        setIsEnglishVisible(true);
    };

    const handleEnglishClick = () => {
        changeLanguage('en');
        vanishEnglishButton();
    };

    const handleArabicClick = () => {
        changeLanguage('ar');
        vanishArabicButton();
    };




  return (
    <Box>
        {isEnglishVisible && <Button sx={{fontSize:'20px'}} size='large' variant='contained' onClick={() => handleEnglishClick()}>English</Button>}
        {isArabicVisible && <Button sx={{fontSize:'20px'}} size='large' variant='contained' onClick={() => handleArabicClick()}>العربية</Button>}
    </Box>
  )
}

export default LanguagesButtons