import {createTheme, PaletteColor, PaletteColorOptions} from "@mui/material";

export const MUITheme = createTheme({
    palette: {
        primary: {
            main: '#7A2841',
        },
        secondary: {
            main: '#D0B0AB',
        },
        hover: {
            light: 'rgba(131,14,14,0.05)',
            darker: 'rgba(131,14,14,0.64)',
            mediumLight: '#ffb4b9'
        },
        fontColors: {
            black: '#000',
            white: '#fff'
        },
        reviewBg: 'rgba(51, 51, 51, 0.05)',
        goodBg: '#3333'
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});
