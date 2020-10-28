import { createGlobalStyle } from 'styled-components';
import { accent, accent_sheer } from 'constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  p, blockquote, pre,
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
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 70%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Roboto, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1;
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 400;
    color: #495057;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  blockquote {
    border-left: 6px solid ${accent};
    background-color: ${accent_sheer};
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    border-radius: 8px;

    p:last-child {
      margin-bottom: 0;
    }
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

  a {
    color: ${accent};
  }

  pre {
    display: block;
    padding: 1.5rem;
    margin-top: 1.5rem;
    overflow: auto;
    font-size: 100%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  h1 {
    font-size: 2.488rem;
    margin-top: 4rem;
  } 

  h2 {
    font-size: 2.074rem;
    margin-top: 4rem;
  }

  h3{
    font-size: 1.728rem;
    margin-top: 3rem;
  }

  h4 {
    font-size: 1.44rem;
  }
  
  h5  {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  p, ol, ul, pre, table, blockquote {
    margin-bottom: 1.5rem;
    line-height: 2.5rem;
    font-weight: 500;
  }

  p img {
    width: 100%;
  }

  /* Prism Dark CSS */
  code[class*="language-"],
  pre[class*="language-"] {
    color: #ccc;
    background: none;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: Menlo, "Roboto Mono", Courier New, monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.7;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0 2rem;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2d2d2d;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .2em;
    border-radius: .3em;
    white-space: normal;
    color: #2d2d2d;
    background: #f1f4f8;
    border: 1px solid rgba(0,0,0,.08);
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #6ab0f3;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #e1a6f2;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #92d192;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }

  /* Add line highlighting styles */
  .gatsby-highlight-code-line {
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #6e6f5c;
  }
`;
