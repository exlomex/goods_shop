declare module '@mui/material/styles' {
    interface Palette {
        hover: {
            light: string;
            darker: string;
            mediumLight: string;
        };
        fontColors: {
            white: string;
            black: string
        }
        reviewBg: string;
        goodBg: string;
    }

    interface PaletteOptions {
        hover?: {
            light?: string;
            darker?: string;
            mediumLight?: string;
        };
        fontColors?: {
            white?: string;
            black?: string
        };
        reviewBg?: string;
        goodBg?: string;
    }
}

export {};