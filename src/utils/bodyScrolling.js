const bodyElement = document.querySelector('body');

const SCROLL_PREVENTION_CLASS = 'scroll-disabled';

const bodyScrolling = {
    disable: () => {
        bodyElement.classList.add(SCROLL_PREVENTION_CLASS);
    },

    enable: () => {
        bodyElement.classList.remove(SCROLL_PREVENTION_CLASS);
    }
};

export default bodyScrolling;
