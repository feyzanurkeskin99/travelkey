
const havaIcons={
    "sunny":{
        "durum":["Güneşli", "Açık"],
        "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><circle cx="32" cy="32" r="11.64" fill="#f4a71d"/><path fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5M32 54.5v-6.21M43.52 20.48l4.39-4.39M16.09 47.91l4.39-4.39M20.48 20.48l-4.39-4.39M47.91 47.91l-4.39-4.39M15.71 32H9.5M54.5 32h-6.21"/><animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/></g></svg>`,
        "resim":"GÜNEŞLİ RESİM LİNKİ"
        },
    "cloudy":{
        "durum":["Az Bulutlu", "Parçalı Bulutlu", "Çok Bulutlu"],
        "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="a"><path fill="none" d="M10.55 34.21l-3.83-3.42-2-6 1-7 4-5 5-3h6l5 1 3 3 2.56 4.36-4.56 4.64h-5l-5 5v3l-6.17 3.42z"/></clipPath></defs><g clip-path="url(#a)"><g><circle cx="19.22" cy="24.29" r="5.95" fill="#f4a71d"/><path fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19.22 15.97v-3.18M19.22 35.79v-3.17M25.11 18.4l2.24-2.24M11.09 32.42l2.24-2.24M13.33 18.4l-2.24-2.24M27.35 32.42l-2.24-2.24M10.89 24.29H7.72M30.72 24.29h-3.17"/><animateTransform attributeName="transform" dur="45s" from="0 19.22 24.293" repeatCount="indefinite" to="360 19.22 24.293" type="rotate"/></g></g><path fill="#efefef" stroke="#efefef" stroke-miterlimit="10" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></svg>`,
        "resim":"GÜNEŞLİ RESİM LİNKİ"
        },
    "misty":{
        "durum":["Puslu", "Sisli", "Duman"],
        "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 25h30"/><animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/></g><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 32h30"/><animateTransform attributeName="transform" begin="-2s" dur="5s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></g><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 39h30"/><animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/></g></svg>`,
        "resim":"GÜNEŞLİ RESİM LİNKİ"
        },
    "windy":{
            "durum":["Rüzgarlı", "Toz veya Kum Fırtınası"],
            "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5M29.14 44a5 5 0 103.61-8.46h-21"/><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 2; 0 -2; 8 0; 0 1; -8 2"/></g></svg>`,
            "resim":"GÜNEŞLİ RESİM LİNKİ"
            },

    "hail":{
        "durum":["Dolu"],
        "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="a"><path fill="none" d="M21.17 46.81L18 64h24l2.75-17.19H21.17z"/></clipPath></defs><g clip-path="url(#a)"><g><circle cx="32" cy="50" r="1.5" fill="#72b8d4"/><animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="2 -10; -2 12; -1 9"/><animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></g><g><circle cx="39" cy="50" r="1.5" fill="#72b8d4"/><animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="2 -10; -2 12; -1 9"/><animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></g><g><circle cx="25" cy="50" r="1.5" fill="#72b8d4"/><animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="2 -10; -2 12; -1 9"/><animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></g></g><path fill="#efefef" stroke="#efefef" stroke-miterlimit="10" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></svg>`,
        "resim":"GÜNEŞLİ RESİM LİNKİ"
    },
    "drizzle":{
            "durum":["Hafif Yağmurlu", "Hafif Sağanak Yağışlı"],
            "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="a"><path fill="none" d="M42 64l2.85-17h-23.8L17 64"/></clipPath></defs><g clip-path="url(#a)"><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M32.08 49.01l-.16.98"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="1;1;0"/></g><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M26.08 49.01l-.16.98"/><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="1;1;0"/></g><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 49.01l-.16.98"/><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="1;1;0"/></g></g><path fill="#efefef" stroke="#efefef" stroke-miterlimit="10" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></svg>`,
            "resim":"GÜNEŞLİ RESİM LİNKİ"
            },
    "rainy":{
            "durum":["Yağmurlu", "Sağanak Yağışlı", "Kuvvetli Yağmurlu", "Kuvvetli Sağanak Yağışlı", "Kuvvetli Gökgürültülü Sağanak Yağışlı"],
            "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="a"><path fill="none" d="M42 64l2.85-17h-23.8L17 64"/></clipPath></defs><g clip-path="url(#a)"><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.52 49.05l-1.04 5.9"/><animateTransform attributeName="transform" dur="0.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10"/><animate attributeName="opacity" dur="0.5s" repeatCount="indefinite" values="1;1;0"/></g><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.52 49.05l-1.04 5.9"/><animateTransform attributeName="transform" begin="-0.3s" dur="0.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10"/><animate attributeName="opacity" begin="-0.3s" dur="0.5s" repeatCount="indefinite" values="1;1;0"/></g><g><path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.52 49.05l-1.04 5.9"/><animateTransform attributeName="transform" begin="-0.1s" dur="0.5s" repeatCount="indefinite" type="translate" values="2 -10; -2 10"/><animate attributeName="opacity" begin="-0.1s" dur="0.5s" repeatCount="indefinite" values="1;1;0"/></g></g><path fill="#efefef" stroke="#efefef" stroke-miterlimit="10" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></svg>`,
            "resim":"GÜNEŞLİ RESİM LİNKİ"
            },
    "thunder":{
        "durum":["Gökgürültülü Sağanak Yağışlı"],
        "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#efefef" stroke="#efefef" stroke-miterlimit="10" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><path fill="#f4a71d" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"/><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></g></svg>`,
        "resim":"GÜNEŞLİ RESİM LİNKİ"
        },
    "snow":{
        "durum":["Hafif Kar Yağışlı", "Yoğun Kar Yağışlı", "Karla Karışık Yağmurlu"],
        "icon":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><clipPath id="a"><path fill="none" d="M21.17 46.81L18 64h24l2.75-17.19H21.17z"/></clipPath></defs><g clip-path="url(#a)"><g><g><g><path fill="#72b8d4" d="M32.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z"/><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 32 50; 180 32 50; 360 32 50"/></g><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="-3 0; 3 0"/></g><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="2 -6; -2 12"/><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="1;1;1;0"/></g><g><g><g><path fill="#72b8d4" d="M39.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z"/><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 39 50; 180 39 50; 360 39 50"/></g><animateTransform attributeName="transform" begin="-1s" dur="3s" repeatCount="indefinite" type="translate" values="0 0; 3 0"/></g><animateTransform attributeName="transform" begin="-1s" dur="3s" repeatCount="indefinite" type="translate" values="2 -6; -2 12"/><animate attributeName="opacity" begin="-1s" dur="3s" repeatCount="indefinite" values="1;1;1;0"/></g><g><g><g><path fill="#72b8d4" d="M25.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z"/><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 25 50; 180 25 50; 360 25 50"/></g><animateTransform attributeName="transform" begin="-1.5s" dur="3s" repeatCount="indefinite" type="translate" values="-3 0; 2 0"/></g><animateTransform attributeName="transform" begin="-1.5s" dur="3s" repeatCount="indefinite" type="translate" values="2 -6; -2 12"/><animate attributeName="opacity" begin="-1.5s" dur="3s" repeatCount="indefinite" values="1;1;1;0"/></g></g><path fill="#efefef" stroke="#efefef" stroke-miterlimit="10" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></svg>`,
        "resim":"GÜNEŞLİ RESİM LİNKİ"
    }
    } 
    
    
    const navIcons={
        "home": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333	c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z" opacity=".35"></path><path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z"></path><path d="M20.499,9.23c-0.247,0-0.496-0.061-0.727-0.189l-6.839-3.8c-0.584-0.324-1.28-0.324-1.864,0l-6.839,3.8	c-0.725,0.402-1.637,0.142-2.04-0.583c-0.402-0.724-0.142-1.637,0.583-2.04l6.839-3.8c1.496-0.832,3.282-0.831,4.778,0l6.839,3.8	c0.724,0.402,0.985,1.315,0.583,2.04C21.537,8.952,21.026,9.23,20.499,9.23z"></path></svg>`,
        "discover": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.078,4.07L2.323,17.464c-1.005,1.737,0.484,3.854,2.458,3.495L12,19.647V2.961	C11.253,2.961,10.505,3.331,10.078,4.07z" opacity=".35"></path><path d="M21.677,17.464L13.922,4.07C13.495,3.331,12.747,2.961,12,2.961v16.686l7.219,1.312	C21.193,21.319,22.683,19.201,21.677,17.464z"></path></svg>`,
        "categories": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="7" r="4" opacity=".35"></circle><path d="M15,3c-1.105,0-2,0.895-2,2v4c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H15z"></path><path d="M10,21H4c-0.347,0-0.668-0.18-0.851-0.475s-0.199-0.663-0.044-0.973l3-6c0.339-0.678,1.45-0.678,1.789,0l3,6	c0.155,0.31,0.138,0.678-0.044,0.973S10.347,21,10,21z"></path><path d="M18.536,21h-4.072c-0.433,0-0.817-0.279-0.951-0.69l-1.259-3.873	c-0.134-0.412,0.013-0.864,0.363-1.118l3.295-2.394c0.351-0.256,0.825-0.256,1.176,0l3.295,2.394	c0.351,0.254,0.497,0.706,0.363,1.118l-1.259,3.873C19.353,20.721,18.969,21,18.536,21z" opacity=".35"></path></svg>`,
        "events": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,21H6c-1.657,0-3-1.343-3-3V7h18v11C21,19.657,19.657,21,18,21z" opacity=".35"></path><path d="M18,3H6C4.343,3,3,4.343,3,6v1h18V6C21,4.343,19.657,3,18,3z"></path><circle cx="14" cy="18" r="1"></circle><circle cx="10" cy="18" r="1"></circle><circle cx="6" cy="18" r="1"></circle><circle cx="6" cy="14" r="1"></circle><circle cx="10" cy="14" r="1"></circle><circle cx="14" cy="14" r="1"></circle><circle cx="18" cy="14" r="1"></circle><circle cx="18" cy="10" r="1"></circle><circle cx="14" cy="10" r="1"></circle><circle cx="10" cy="10" r="1"></circle></svg>`,
        "saved": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,4H4v16.27c0,1.285,1.352,2.12,2.501,1.546L12,19.066l5.499,2.75C18.648,22.39,20,21.554,20,20.27	V4z" opacity=".35"></path><path d="M19.5,3c-0.386,0-14.614,0-15,0C3.672,3,3,3.672,3,4.5S3.672,6,4.5,6c0.386,0,14.614,0,15,0C20.328,6,21,5.328,21,4.5	S20.328,3,19.5,3z"></path></svg>`
    }
    
    const kategoriIcons={
    
        "accomodation": `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hotel" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-hotel fa-w-18 fa-fw fa-2x"><path fill="currentColor" d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z" class=""></path></svg>`,
        "historical": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="landmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-landmark fa-w-16 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M496 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-16-80a16 16 0 0 0-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64v160H48a16 16 0 0 0-16 16v48h448z" class="fa-secondary"></path><path fill="currentColor" d="M10.38 92.11L244.77 2a32 32 0 0 1 22.47 0l234.38 90.11a16 16 0 0 1 10.38 15V144a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-36.91a16 16 0 0 1 10.38-14.98z" class="fa-primary"></path></g></svg>`,
        "nature": `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mountain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-mountain fa-w-20 fa-fw fa-2x"><path fill="currentColor" d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z" class=""></path></svg>`,
        "culture": `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="theater-masks" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-theater-masks fa-w-20 fa-fw fa-2x"><path fill="currentColor" d="M206.86 245.15c-35.88 10.45-59.95 41.2-57.53 74.1 11.4-12.72 28.81-23.7 49.9-30.92l7.63-43.18zM95.81 295L64.08 115.49c-.29-1.62.28-2.62.24-2.65 57.76-32.06 123.12-49.01 189.01-49.01 1.61 0 3.23.17 4.85.19 13.95-13.47 31.73-22.83 51.59-26 18.89-3.02 38.05-4.55 57.18-5.32-9.99-13.95-24.48-24.23-41.77-27C301.27 1.89 277.24 0 253.32 0 176.66 0 101.02 19.42 33.2 57.06 9.03 70.48-3.92 98.48 1.05 126.58l31.73 179.51c14.23 80.52 136.33 142.08 204.45 142.08 3.59 0 6.75-.46 10.01-.8-13.52-17.08-28.94-40.48-39.5-67.58-47.61-12.98-106.06-51.62-111.93-84.79zm97.55-137.46c-.73-4.12-2.23-7.87-4.07-11.4-8.25 8.91-20.67 15.75-35.32 18.32-14.65 2.58-28.67.4-39.48-5.17-.52 3.94-.64 7.98.09 12.1 3.84 21.7 24.58 36.19 46.34 32.37 21.75-3.82 36.28-24.52 32.44-46.22zM606.8 120.9c-88.98-49.38-191.43-67.41-291.98-51.35-27.31 4.36-49.08 26.26-54.04 54.36l-31.73 179.51c-15.39 87.05 95.28 196.27 158.31 207.35 63.03 11.09 204.47-53.79 219.86-140.84l31.73-179.51c4.97-28.11-7.98-56.11-32.15-69.52zm-273.24 96.8c3.84-21.7 24.58-36.19 46.34-32.36 21.76 3.83 36.28 24.52 32.45 46.22-.73 4.12-2.23 7.87-4.07 11.4-8.25-8.91-20.67-15.75-35.32-18.32-14.65-2.58-28.67-.4-39.48 5.17-.53-3.95-.65-7.99.08-12.11zm70.47 198.76c-55.68-9.79-93.52-59.27-89.04-112.9 20.6 25.54 56.21 46.17 99.49 53.78 43.28 7.61 83.82.37 111.93-16.6-14.18 51.94-66.71 85.51-122.38 75.72zm130.3-151.34c-8.25-8.91-20.68-15.75-35.33-18.32-14.65-2.58-28.67-.4-39.48 5.17-.52-3.94-.64-7.98.09-12.1 3.84-21.7 24.58-36.19 46.34-32.37 21.75 3.83 36.28 24.52 32.45 46.22-.73 4.13-2.23 7.88-4.07 11.4z" class=""></path></svg>`,
        "taste": `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="utensils-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-utensils-alt fa-w-18 fa-fw fa-2x"><path fill="currentColor" d="M53.8 8.6L293 230.7c28.8-25.5 18-16 48.4-42.9-21.4-36.3-17.2-75.1 16.1-108.4C379.3 57.7 452.3 6 456.2 3.2c16.1-11.8 37.6 11.5 24.8 26.2l-81.2 93.8c-1.3 1.5 3 6 4.7 4.6L501.4 49c15.1-12.3 37.9 10.2 25.5 25.5l-78.8 96.9c-1.3 1.6 3.1 6 4.6 4.6l93.8-81.2c14.7-12.7 38 8.7 26.2 24.9-2.8 4-54.5 76.9-76.2 98.6-34.2 34.3-73.5 36.9-108.5 16.2-26.6 30.1-14.5 16.3-41 46.3l154.7 143.6c13.3 12.3 13.7 33.3.8 46.1l-32 32c-12.8 12.8-33.6 12.4-46-.7C405.4 479.2 223.9 265.3 216 256 56 256 0 165.9 0 32.1 0 4.2 33.3-10.4 53.8 8.6zm19.6 462l32 32c13 13 34.4 12.4 46.6-1.4l117.5-132.7-56.6-66.8L74.8 424c-13.8 12.3-14.5 33.6-1.4 46.6z" class=""></path></svg>`,
        "shopping": `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="store" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616 512" class="svg-inline--fa fa-store fa-w-20 fa-fw fa-2x"><path fill="currentColor" d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z" class=""></path></svg>`
    }

    const backgroundIcons={
    
        "routes": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="route" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-route fa-w-16 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M512 416a96.15 96.15 0 0 1-96 96H138.2a690.4 690.4 0 0 0 47.3-64H416a32 32 0 0 0 0-64h-96a96 96 0 0 1 0-192h45.24A799.82 799.82 0 0 0 416 256h-96a32 32 0 0 0 0 64h96a96.15 96.15 0 0 1 96 96z" class="fa-secondary"></path><path fill="currentColor" d="M96 256a96 96 0 0 0-96 96c0 53 96 160 96 160s96-107 96-160a96 96 0 0 0-96-96zm0 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM416 0a96 96 0 0 0-96 96c0 53 96 160 96 160s96-107 96-160a96 96 0 0 0-96-96zm0 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" class="fa-primary"></path></g></svg>`,
        "historical": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="landmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-landmark fa-w-16 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M496 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-16-80a16 16 0 0 0-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64v160H48a16 16 0 0 0-16 16v48h448z" class="fa-secondary"></path><path fill="currentColor" d="M10.38 92.11L244.77 2a32 32 0 0 1 22.47 0l234.38 90.11a16 16 0 0 1 10.38 15V144a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-36.91a16 16 0 0 1 10.38-14.98z" class="fa-primary"></path></g></svg>`,
        "culture": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="theater-masks" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-theater-masks fa-w-20 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M229.45 303.5l.46-2.61q-4.28.54-8.59 1.29c-40.27 7.08-73.4 26.26-92.56 50-4.21-49.87 31-95.87 82.8-105a102.8 102.8 0 0 1 28-1.07l10.23-57.89a43 43 0 0 1-25.11-31.69 42.49 42.49 0 0 1-.1-13 65.27 65.27 0 0 0 31.94 6.67l4.62-26.14c4.77-27.26 25.39-48.68 51.53-53.9l1.13-.21 1.28-.23h.13c3-.48 5.94-.92 8.92-1.34l1.75-.23c2.38-.32 4.76-.63 7.14-.91l2.57-.3q3.19-.36 6.39-.68l2.82-.26q3.18-.3 6.37-.55l2.59-.2c2.38-.17 4.76-.33 7.14-.46l1.71-.11q8.7-.47 17.39-.61l-.7-4c-4.93-28.09-26.7-50-54-54.34a453.62 453.62 0 0 0-292 51.33C9 70.46-3.89 98.44 1 126.54L32.82 306c15.39 87 156.86 151.86 219.9 140.79 8.52-1.5 17.93-4.81 27.77-9.6-34.29-39.84-58.83-89.61-51.04-133.69zM90.54 182.72a41.87 41.87 0 0 1-.09-13c11.64 6 26.73 8.33 42.5 5.56s29.15-10.12 38-19.71a42.58 42.58 0 0 1 4.38 12.26 43.06 43.06 0 0 1-84.82 14.92z" class="fa-secondary"></path><path fill="currentColor" d="M606.8 121.05a452.59 452.59 0 0 0-291.69-51.33c-27.28 4.36-49 26.25-53.94 54.34L229.45 303.5c-15.37 87 95.18 196.19 158.14 207.27S591.85 457 607.22 370L639 190.54c4.88-28.1-8-56.08-32.2-69.49zm-272.95 96.76a40 40 0 1 1 74.64 25.25c-8.24-8.9-20.65-15.74-35.28-18.31s-28.64-.4-39.44 5.17a39 39 0 0 1 .08-12.11zm70.36 198.68c-55.62-9.78-93.42-59.24-88.9-112.85 20.58 25.53 56.15 46.15 99.38 53.76s83.73.37 111.81-16.6c-14.17 51.92-66.64 85.48-122.29 75.69zm134.26-162.67a39.44 39.44 0 0 1-4.06 11.39c-8.24-8.9-20.66-15.74-35.3-18.31s-28.64-.4-39.43 5.17a39 39 0 0 1 .09-12.1 40 40 0 0 1 78.7 13.85z" class="fa-primary"></path></g></svg>`,
        "nature": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="trees" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-trees fa-w-20 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M224 440.46V416h-64v24.45l-30.29 48.4A16 16 0 0 0 144 512h96a16 16 0 0 0 14.31-23.16zm410.31-62L554.42 288h30.63a22.73 22.73 0 0 0 20.78-13 22 22 0 0 0-3.28-24l-78.13-91h28.89a22.69 22.69 0 0 0 20.86-13.61 22.27 22.27 0 0 0-4.24-24.08L459.66 4.84c-6-6.45-17.28-6.45-23.32 0L341.28 106.1c11.09 15.37 14 35.3 6.34 53a54.48 54.48 0 0 1-18.26 22.68l41.54 48.32a54.56 54.56 0 0 1-6.07 76.9q-2 1.68-4.1 3.18l41.62 47.15C411 367.11 415.69 371.46 416 384v56.45l-30.29 48.4A16 16 0 0 0 400 512h96a16 16 0 0 0 14.31-23.16L480 440.46V416h136.87a23.19 23.19 0 0 0 21-13.25 22.15 22.15 0 0 0-3.56-24.25z" class="fa-secondary"></path><path fill="currentColor" d="M381.86 402.76a23.19 23.19 0 0 1-21 13.25H23.13a23.17 23.17 0 0 1-21-13.25 22.09 22.09 0 0 1 3.56-24.26L85.58 288H55a22.72 22.72 0 0 1-20.83-13.08 22.06 22.06 0 0 1 3.27-24L115.58 160H86.69a22.67 22.67 0 0 1-20.87-13.6 22.25 22.25 0 0 1 4.24-24.08L180.34 4.84c6-6.45 17.32-6.45 23.32 0l110.27 117.47a22.27 22.27 0 0 1 4.24 24.08A22.69 22.69 0 0 1 297.31 160h-28.89l78.13 91a22 22 0 0 1 3.28 24 22.73 22.73 0 0 1-20.78 13h-30.63l79.88 90.5a22.12 22.12 0 0 1 3.56 24.26z" class="fa-primary"></path></g></svg>`
    }

    const contactIcons={
        "email": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope fa-w-16 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M256.47 352h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V400a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V183.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52zM464 64H48a48 48 0 0 0-48 48v19a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4 23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131v-19a48 48 0 0 0-48-48z" class="fa-secondary"></path><path fill="currentColor" d="M512 131v52.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V131a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.69 12.12 49.75 41.4 72.93 41.4h.94c23.18 0 56.24-29.28 72.93-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131z" class="fa-primary"></path></g></svg>`,
        "web": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="globe-asia" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-globe-asia fa-w-16 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M312,16.35V50.73a28,28,0,0,1-11.12,22.35l-41.41,31.27a8,8,0,0,0,.86,13.81l10.83,5.41A16,16,0,0,1,280,137.88V216a8,8,0,0,1-8,8h-3.06a8,8,0,0,1-7.15-4.42,4.47,4.47,0,0,0-1.72-1.86,4.42,4.42,0,0,0-6.06,1.54h0l-17.34,29A16,16,0,0,1,222.94,256h-.31a16,16,0,0,0-11.32,4.69l-5.66,5.66a8,8,0,0,0,0,11.31l5.66,5.66A16,16,0,0,1,216,294.63V304a16,16,0,0,1-16,16h-6.1a16,16,0,0,1-14.28-8.85L157,265.92a8,8,0,0,0-10.72-3.6h0a8.14,8.14,0,0,0-2.11,1.53l-19.47,19.46A16,16,0,0,1,113.38,288H2.05C17.74,409.88,121.84,504,248,504c137,0,248-111,248-248C496,141.13,418,44.56,312,16.35Zm96,342.08a16,16,0,0,1-4.69,11.31l-9.57,9.57A16,16,0,0,1,382.43,384H367.27a16,16,0,0,1-11.36-4.74l-13-13a26.78,26.78,0,0,0-25.42-7l-21.27,5.32a15.86,15.86,0,0,1-3.88.48H282a16,16,0,0,1-11.24-4.69l-11.91-11.91a8,8,0,0,1-2.34-5.66V332.6a8,8,0,0,1,5-7.43l39.34-15.74a26.35,26.35,0,0,0,5.59-3.05l23.71-16.89a8,8,0,0,1,4.64-1.48h12.14a8,8,0,0,1,7.39,4.93l5.35,12.85a4,4,0,0,0,3.69,2.46h3.8a4,4,0,0,0,3.84-2.88l4.16-14.49A4,4,0,0,1,379,288h6.06a4,4,0,0,1,4,4v13a8,8,0,0,0,2.34,5.66l11.91,11.91A16,16,0,0,1,408,333.83Z" class="fa-secondary"></path><path fill="currentColor" d="M260.07,217.72a4.47,4.47,0,0,1,1.72,1.86,8,8,0,0,0,7.15,4.42H272a8,8,0,0,0,8-8V137.88a16,16,0,0,0-8.84-14.31l-10.83-5.41a8,8,0,0,1-.86-13.81l41.41-31.27A28,28,0,0,0,312,50.73V16.35A248.23,248.23,0,0,0,248,8C111,8,0,119,0,256a249.89,249.89,0,0,0,2.05,32H113.38a16,16,0,0,0,11.31-4.69l19.47-19.46A8,8,0,0,1,157,265.92l22.62,45.23A16,16,0,0,0,193.9,320H200a16,16,0,0,0,16-16v-9.37a16,16,0,0,0-4.69-11.31l-5.66-5.66a8,8,0,0,1,0-11.31l5.66-5.66A16,16,0,0,1,222.63,256h.31a16,16,0,0,0,13.72-7.77L254,219.28a4.42,4.42,0,0,1,6.05-1.57Zm143.24,104.8L391.4,310.61a8,8,0,0,1-2.34-5.66V292a4,4,0,0,0-4-4H379a4,4,0,0,0-3.84,2.88L371,305.37a4,4,0,0,1-3.84,2.88h-3.8a4,4,0,0,1-3.69-2.46l-5.35-12.85a8,8,0,0,0-7.39-4.93H334.79a8,8,0,0,0-4.64,1.48l-23.71,16.89a26.35,26.35,0,0,1-5.59,3.05l-39.34,15.74a8,8,0,0,0-5,7.43v10.2a8,8,0,0,0,2.34,5.66l11.91,11.91A16,16,0,0,0,282,365.06h10.34a15.86,15.86,0,0,0,3.88-.48l21.27-5.32a26.78,26.78,0,0,1,25.42,7l13,13A16,16,0,0,0,367.27,384h15.16a16,16,0,0,0,11.31-4.69l9.57-9.57A16,16,0,0,0,408,358.43v-24.6a16,16,0,0,0-4.69-11.31Z" class="fa-primary"></path></g></svg>`,
        "phone": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-phone fa-w-16 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M336.23 167.12L406 4.43 389.41.61a24.16 24.16 0 0 0-27.5 13.9l-48 112a23.9 23.9 0 0 0 6.91 28zM154.6 320.71a24 24 0 0 0-28-6.91l-112 48a24.3 24.3 0 0 0-14 27.61l3.8 16.49 162.81-69.77zm338.81-296.1l-55.75-12.87L362 188.23l19.39 15.87A370.59 370.59 0 0 1 204.2 381.3l-15.88-19.4-176.6 75.69 12.89 55.82A24 24 0 0 0 48 512c256.1 0 464-207.49 464-464a24 24 0 0 0-18.59-23.39z" class="fa-secondary"></path><path fill="currentColor" d="M406 4.43l-69.77 162.69L362 188.23l75.66-176.49zM4.41 405.9l7.31 31.69 176.6-75.69-21.1-25.77z" class="fa-primary"></path></g></svg>`,
        "address": `<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-map-marker-alt fa-w-12 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M192 0C86 0 0 86 0 192c0 77.41 27 99 172.27 309.67a24 24 0 0 0 39.46 0C357 291 384 269.41 384 192 384 86 298 0 192 0zm0 288a96 96 0 1 1 96-96 96 96 0 0 1-96 96z" class="fa-secondary"></path><path fill="currentColor" d="M192 256a64 64 0 1 1 64-64 64 64 0 0 1-64 64z" class="fa-primary"></path></g></svg>`
    }
    const locationIcons={
        "location":`<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-chevron-down fa-w-14 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M224.1 284.64l-56.89 56.78-154-154.31a24 24 0 0 1 0-33.94l22.65-22.7a23.93 23.93 0 0 1 33.84 0z" class="fa-secondary"></path><path fill="currentColor" d="M435 187.15L241 381.48a23.94 23.94 0 0 1-33.84 0l-40-40 211.34-211a23.93 23.93 0 0 1 33.84 0L435 153.21a24 24 0 0 1 0 33.94z" class="fa-primary"></path></g></svg>`
    }
    const collectionIcons={
        "arrow":`<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="chevron-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-chevron-double-right fa-w-16 fa-fw fa-2x"><g class="fa-group"><path fill="currentColor" d="M285.6 273L90.79 467a24 24 0 0 1-33.88.1l-.1-.1-22.74-22.7a24 24 0 0 1 0-33.85L188.39 256 34.07 101.55A23.8 23.8 0 0 1 34 67.8l.11-.1L56.81 45a24 24 0 0 1 33.88-.1l.1.1L285.6 239a24.09 24.09 0 0 1 0 34z" class="fa-secondary"></path><path fill="currentColor" d="M478 273L283.19 467a24 24 0 0 1-33.87.1l-.1-.1-22.75-22.7a23.81 23.81 0 0 1-.1-33.75l.1-.1L380.8 256 226.47 101.55a24 24 0 0 1 0-33.85L249.22 45a24 24 0 0 1 33.87-.1.94.94 0 0 1 .1.1L478 239a24.09 24.09 0 0 1 0 34z" class="fa-primary"></path></g></svg>`
    }
    export  {collectionIcons, havaIcons, navIcons,kategoriIcons,backgroundIcons,contactIcons,locationIcons};