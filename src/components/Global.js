import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle` 
  ${reset}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    audio, canvas, progress, video {
        display: inline-block; /* 1 */
        vertical-align: baseline; /* 2 */
    }
    a:active, a:hover {
        outline: 0;
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    img {
        border: 0;
    }
    input {
        border-radius:4px;
        box-shadow: none;
        font-size:1em;
        -webkit-appearance:none;
        -moz-appearance: none;
        -o-appearance:none;
        appearance: none;
        border: 0px;
    }
    button, input, optgroup, select, textarea {
        color: inherit; /* 1 */
        font: inherit; /* 2 */
        margin: 0; /* 3 */
        border: 0;
    }
    button,
    html input[type="button"], /* 1 */
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: button; /* 2 */
        cursor: pointer; /* 3 */
    }
    button[disabled],
    html input[disabled] {
        cursor: default;
    }
    input[type="checkbox"],
    input[type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    td,th {
        padding: 0;
    }
    button{
        background: inherit ; 
        border:none; 
        box-shadow:none; 
        border-radius:0; 
        padding:0; 
        overflow:visible; 
        cursor:pointer;
        border: ${(props) => props.theme.border};

    }
    body {
        font-family: pretendard;
	    background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.color};
        textColor: ${(props) => props.theme.textColor};
        leftMenu: ${(props) => props.theme.leftMenu};
        contentsBg: ${(props) => props.theme.contentsBg};

        oppBg: ${(props) => props.theme.oppBg};
        oppColor: ${(props) => props.theme.oppColor};
        oppBorder: ${(props) => props.theme.oppBorder};

    }
`
export default GlobalStyle