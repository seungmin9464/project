import { DefaultTheme } from 'styled-components';

export const darkTheme = {
    bgColor: '#1a1a1a',
    color: '#fff',
    textColor: '#707070',
    border: '1px solid #fff',
    leftMenu: '#000',
    contentsBg: '#333',

    oppBg: '#fff',
    oppColor: '#333',
    oppBorder:'1px solid #333',
};

export const lightTheme = {
    bgColor: '#fff',
    color: '#333',
    textColor: '#c3c3c3',
    border: '1px solid #333',
    leftMenu: '#fff',
    contentsBg: '#f1f1f1',
    oppBg: '#1a1a1a',
    oppColor: '#fff',
    oppBorder:'1px solid #fff',
};

const size = {
    mobile: "576px",
    medium: "768px",
    large: "992px",
    xl: "1200px",
    xxl: "1400px",
    xxxl: "1600px"
}

export const chanege = {
    mobile: `(max-width: ${size.mobile})`,
    medium: `(max-width: ${size.medium})`,
    large: `(max-width: ${size.large})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
    xxxl: `(max-width: ${size.xxxl})`
}