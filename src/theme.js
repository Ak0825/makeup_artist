import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fdb022a6',
    },
    secondary: {
      main: '#dc004e',
    },
    customColors: { 
        whiteColor : '#fff',
        sidebarText : '#cccfd4',
        lightestGrey: '#FFFAEB',
        lightGrey: '#F9FAFB',
        lighterGrey: '#ECFDF3',  
        darkGrey: '#475467',
        darkerGrey: '#344054',
        darkestGrey: '#101828',
        blueBlack : '#374366',
        DarkBlack : '#000',
        redColor :'#eb2727',
        LoginBack :'#c6f2ed',
        editButton:'#0DCAF0',
        greenButton:'#00e676',
      },
  }, 
  typography: {
    fontFamily: 'inter',
  },
});

export const getCustomColor = (colorName) => theme.palette.customColors[colorName];
export default theme;