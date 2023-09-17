const BASE_URL = '/dashboard/'
const SPAN_CLASS = 'ml-2 text-sm font-medium'
const SVG_CLASS = 'w-6 h-6 stroke-current'
const LINK_CLASS = 'flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700'
const XLMNS = 'http://www.w3.org/2000/svg'
const STROKE = 'currentColor'
const STROKE_JOIN = 'round'
const STROKE_LINE_CAP = 'round'
const STROKE_WIDTH = '2'
const VIEW_BOX = '0 0 24 24'
const FILL = 'none'
const MAIN_COLOR = 'bg-indigo-700'
const classesFunc = (classes) => classes.concat(' ' + MAIN_COLOR) 

export const navbar = [{
    displayName: 'HomeView',
    refName: 'homeView',
    link: { href: BASE_URL + 'overview', class: 'flex items-center w-full px-3 mt-3' },
    svg: { class: 'w-8 h-8 fill-current', xmlns: XLMNS, fill: 'currentColor', viewBox: '0 0 20 20', stroke: STROKE },
    path: {strokeLinecap: null, strokeLinejoin: null, strokeWidth: null ,d: 'M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' },
    span: { class: SPAN_CLASS.replace('medium', 'bold') },
    classesFunc: classesFunc
},
{
    displayName: 'Overview',
    refName: 'overview',
    link: { href: BASE_URL + 'overview', class: LINK_CLASS },
    svg: { class: SVG_CLASS, xmlns: XLMNS, fill: FILL, viewBox: VIEW_BOX, stroke: STROKE },
    path: { strokeLinecap: STROKE_LINE_CAP, strokeLinejoin: STROKE_JOIN, strokeWidth: STROKE_WIDTH, d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
    span: { class: SPAN_CLASS },
    classesFunc: classesFunc
},
{
    displayName: 'Assets',
    refName: 'assets',
    link: { href: BASE_URL + 'assets', class: LINK_CLASS },
    svg: { class: SVG_CLASS, xmlns: XLMNS, fill: FILL, viewBox: VIEW_BOX, stroke: STROKE },
    path: { strokeLinecap: STROKE_LINE_CAP, strokeLinejoin: STROKE_JOIN, strokeWidth: STROKE_WIDTH, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    span: { class: SPAN_CLASS },
    classesFunc: classesFunc
},
{
    displayName: 'Discover Assets',
    refName: 'discover',
    link: { href: BASE_URL + 'discover', class: LINK_CLASS },
    svg: { class: SVG_CLASS, xmlns: XLMNS, fill: FILL, viewBox: VIEW_BOX, stroke: STROKE },
    path: { strokeLinecap: STROKE_LINE_CAP, strokeLinejoin: STROKE_JOIN, strokeWidth: STROKE_WIDTH, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    span: { class: SPAN_CLASS },
    classesFunc: classesFunc
},
{
    displayName: 'Settings',
    refName: 'settings',
    link: { href: BASE_URL + 'settings', class: LINK_CLASS },
    svg: { class: SVG_CLASS, xmlns: XLMNS, fill: FILL, viewBox: VIEW_BOX, stroke: STROKE },
    path: { strokeLinecap: STROKE_LINE_CAP, strokeLinejoin: STROKE_JOIN, strokeWidth: STROKE_WIDTH, d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
    span: { class: SPAN_CLASS },
    classesFunc: classesFunc
},
{
    displayName: 'Account',
    refName: 'account',
    link: { href: BASE_URL + 'account', class: 'flex items-center justify-center w-full h-16 mt-auto bg-indigo-800 hover:bg-indigo-700' },
    svg: { class: SVG_CLASS, xmlns: XLMNS, fill: FILL, viewBox: VIEW_BOX, stroke: STROKE },
    path: { strokeLinecap: STROKE_LINE_CAP, strokeLinejoin: STROKE_JOIN, strokeWidth: STROKE_WIDTH, d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    span: { class: SPAN_CLASS },
    classesFunc: (classes) => classes.replace('bg-indigo-800', MAIN_COLOR) 
}]