import './Icon.css'

const Icon = ({ name, className = '', size = 24 }) => {
  const iconPaths = {
    home: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2495 19.5001V15C14.2495 14.8011 14.1704 14.6104 14.0298 14.4697C13.8891 14.3291 13.6984 14.25 13.4995 14.25H10.4995C10.3005 14.25 10.1098 14.3291 9.96912 14.4697C9.82847 14.6104 9.74945 14.8011 9.74945 15V19.5001C9.74945 19.699 9.67045 19.8898 9.52981 20.0304C9.38918 20.1711 9.19844 20.2501 8.99954 20.2501L4.50009 20.2507C4.40159 20.2507 4.30406 20.2313 4.21305 20.1937C4.12205 20.156 4.03936 20.1007 3.9697 20.0311C3.90005 19.9614 3.8448 19.8788 3.8071 19.7878C3.7694 19.6968 3.75 19.5992 3.75 19.5007V10.8326C3.75 10.7281 3.77183 10.6247 3.8141 10.5292C3.85637 10.4336 3.91814 10.3479 3.99545 10.2776L11.4949 3.45876C11.633 3.33324 11.8129 3.26368 11.9995 3.26367C12.186 3.26367 12.3659 3.33321 12.504 3.45873L20.0045 10.2776C20.0818 10.3479 20.1436 10.4336 20.1859 10.5292C20.2282 10.6247 20.25 10.7281 20.25 10.8326V19.5007C20.25 19.5992 20.2306 19.6968 20.1929 19.7878C20.1552 19.8788 20.1 19.9614 20.0303 20.0311C19.9606 20.1007 19.878 20.156 19.7869 20.1937C19.6959 20.2313 19.5984 20.2507 19.4999 20.2507L14.9994 20.2501C14.8005 20.2501 14.6097 20.1711 14.4691 20.0304C14.3285 19.8898 14.2494 19.699 14.2495 19.5001V19.5001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    phone: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    email: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    location: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    whatsapp: (
      <i className="fa-brands fa-whatsapp" style={{ fontSize: `${size}px`, width: `${size}px`, height: `${size}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}></i>
    ),
    facebook: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#1877F2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.8375 18V12.53H9V10.3958H10.8375V8.81979C10.8375 6.99647 11.9541 6 13.5795 6C14.3569 6 15.0283 6.05654 15.2261 6.08481V7.99293H14.1025C13.2191 7.99293 13.0424 8.40989 13.0424 9.0318V10.3958H15.1625L14.8869 12.53H13.0424V18H10.8375Z" fill="white"/>
      </svg>
    ),
    instagram: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#E4405F"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8089 6.00061C13.7529 6.00269 13.9702 6.01103 14.4737 6.03603C15.0723 6.06603 15.4845 6.16803 15.846 6.31203C16.213 6.46803 16.5292 6.67203 16.8455 7.00803C17.1561 7.33803 17.3537 7.67403 17.4949 8.07003C17.6361 8.44803 17.7321 8.88603 17.7603 9.52803C17.7651 9.66192 17.7693 9.77667 17.7731 9.88963L17.7783 10.0599C17.7889 10.4353 17.7942 10.8834 17.7942 12L17.7941 12.2453C17.793 13.6493 17.7817 13.8695 17.7603 14.472C17.7321 15.114 17.6361 15.546 17.4949 15.93C17.3537 16.326 17.1561 16.656 16.8455 16.992C16.5292 17.328 16.213 17.532 15.846 17.682C15.4845 17.832 15.0723 17.934 14.4737 17.964C13.9702 17.989 13.7529 17.9974 12.8089 17.9994L12.3901 18L12.1471 18C12.0618 18 11.9806 18 11.9033 18L11.483 17.9994C10.8514 17.9981 10.5444 17.9939 10.2606 17.9839L10.0908 17.9771C10.0049 17.9734 9.9156 17.969 9.81489 17.964C9.2163 17.934 8.80407 17.832 8.4483 17.682C8.0756 17.532 7.75936 17.328 7.44313 16.992C7.13254 16.656 6.94054 16.326 6.79371 15.93C6.65254 15.546 6.55654 15.114 6.53395 14.472C6.51166 13.9699 6.50345 13.7333 6.50098 12.8559V11.1418C6.50345 10.263 6.51166 10.0301 6.53395 9.52803C6.55654 8.88603 6.65254 8.44803 6.79371 8.07003C6.94054 7.67403 7.13254 7.33803 7.44313 7.00803C7.75936 6.67203 8.0756 6.46803 8.4483 6.31203C8.80407 6.16803 9.2163 6.06603 9.81489 6.03603C9.9156 6.03103 10.0049 6.02669 10.0908 6.02294L10.2606 6.0162C10.5444 6.00617 10.8514 6.002 11.483 6.00061H12.8089ZM12.1471 7.08003C12.0634 7.08003 11.9837 7.08005 11.9078 7.08009L11.4958 7.08061C10.5675 7.08269 10.3589 7.09103 9.86007 7.11603C9.3123 7.14003 9.01301 7.24203 8.81536 7.32003C8.54995 7.42803 8.3636 7.56003 8.16595 7.77003C7.9683 7.98003 7.84407 8.17803 7.74242 8.46003C7.66336 8.67003 7.57301 8.98803 7.55042 9.57603C7.54596 9.6755 7.54207 9.76405 7.53867 9.84896L7.5299 10.1C7.52165 10.383 7.51819 10.7063 7.51703 11.3394V12.6607C7.51819 13.2937 7.52165 13.617 7.5299 13.9L7.53867 14.1511C7.54207 14.236 7.54596 14.3246 7.55042 14.424C7.57301 15.006 7.66336 15.324 7.74242 15.54C7.84407 15.816 7.9683 16.02 8.16595 16.23C8.3636 16.44 8.54995 16.566 8.81536 16.674C9.01301 16.758 9.3123 16.854 9.86007 16.884C10.3589 16.909 10.5675 16.9174 11.4958 16.9194H12.7981C13.725 16.9174 13.9297 16.909 14.4285 16.884C14.9763 16.854 15.2756 16.758 15.4732 16.674C15.7387 16.566 15.925 16.44 16.1227 16.23C16.3203 16.02 16.4445 15.816 16.5462 15.54C16.6252 15.324 16.7156 15.006 16.7438 14.424C16.7617 13.9267 16.7689 13.7023 16.7712 12.8416L16.772 12.2415L16.7721 12C16.7721 11.9157 16.7721 11.8353 16.772 11.7585L16.7712 11.1585C16.7689 10.2978 16.7617 10.0734 16.7438 9.57603C16.7156 8.98803 16.6252 8.67003 16.5462 8.46003C16.4445 8.17803 16.3203 7.98003 16.1227 7.77003C15.925 7.56003 15.7387 7.42803 15.4732 7.32003C15.2756 7.24203 14.9763 7.14003 14.4285 7.11603C13.9297 7.09103 13.725 7.08269 12.7981 7.08061L12.3864 7.08009L12.1471 7.08003ZM12.2262 9.00003C13.8243 9.00003 15.1231 10.38 15.1231 12.084C15.1231 13.782 13.8243 15.162 12.2262 15.162C10.6224 15.162 9.3236 13.782 9.3236 12.084C9.3236 10.38 10.6224 9.00003 12.2262 9.00003ZM12.2262 10.086C11.1871 10.086 10.3401 10.98 10.3401 12.084C10.3401 13.188 11.1871 14.082 12.2262 14.082C13.2652 14.082 14.1067 13.188 14.1067 12.084C14.1067 10.98 13.2652 10.086 12.2262 10.086ZM15.0836 7.80003C15.462 7.80003 15.7612 8.12403 15.7612 8.52003C15.7612 8.91603 15.462 9.24003 15.0836 9.24003C14.7109 9.24003 14.406 8.91603 14.406 8.52003C14.406 8.12403 14.7109 7.80003 15.0836 7.80003Z" fill="white"/>
      </svg>
    ),
    twitter: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.28451C14.0247 3.61179 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heart: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    truck: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3H15V13H1V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 7H19L22 10V13H15V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    leaf: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20C11 20 4 14 4 9C4 5 7.5 3 11.5 5.5C11.5 5.5 13 2 17 2C17 6 14.5 9.5 14.5 9.5C17 13.5 20 16 20 20C20 20 16 18.5 12.5 15.5C12.5 15.5 12 20 11 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    trophy: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9H4C3.44772 9 3 9.44772 3 10V11C3 13.7614 5.23858 16 8 16H16C18.7614 16 21 13.7614 21 11V10C21 9.44772 20.5523 9 20 9H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9V7C6 4.79086 7.79086 3 10 3H14C16.2091 3 18 4.79086 18 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13C8.65685 13 10 11.6569 10 10V9H4V10C4 11.6569 5.34315 13 7 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 13C18.6569 13 20 11.6569 20 10V9H14V10C14 11.6569 15.3431 13 17 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    money: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <path d="M6 12H6.01M18 12H18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    chicken: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8 2 5 5 5 9C5 13 8 16 12 16C16 16 19 13 19 9C19 5 16 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="8" r="1" fill="currentColor"/>
        <circle cx="14" cy="8" r="1" fill="currentColor"/>
        <path d="M8 12C8 12 9 14 12 14C15 14 16 12 16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 20H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    map: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 2V18M16 6V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    house: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    farm: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tractor: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 16C6.65685 16 8 14.6569 8 13C8 11.3431 6.65685 10 5 10C3.34315 10 2 11.3431 2 13C2 14.6569 3.34315 16 5 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 16C20.6569 16 22 14.6569 22 13C22 11.3431 20.6569 10 19 10C17.3431 10 16 11.3431 16 13C16 14.6569 17.3431 16 19 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 13V5H12L16 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    cart: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17M9 19.5C9.82843 19.5 10.5 18.8284 10.5 18C10.5 17.1716 9.82843 16.5 9 16.5C8.17157 16.5 7.5 17.1716 7.5 18C7.5 18.8284 8.17157 19.5 9 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 19.5C19.8284 19.5 20.5 18.8284 20.5 18C20.5 17.1716 19.8284 16.5 19 16.5C18.1716 16.5 17.5 17.1716 17.5 18C17.5 18.8284 18.1716 19.5 19 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    trash: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H5H21M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    close: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  }

  if (!iconPaths[name]) {
    return null
  }

  return (
    <span className={`icon icon-${name} ${className}`}>
      {iconPaths[name]}
    </span>
  )
}

export default Icon

