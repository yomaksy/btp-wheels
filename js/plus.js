function scrollDown() {
    window.scrollBy (0, window.innerHeight);
};

let enableChromeContrast = () => {
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    if (isChrome) {
        document.querySelector('body').style['image-rendering'] = '-webkit-optimize-contrast';
    }
};

enableChromeContrast();