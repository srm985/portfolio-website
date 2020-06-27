const SCROLL_PREVENTION_CLASS = 'scroll-disabled';

const bodyScrolling = {
    disable: () => {
        const bodyElement = document.querySelector('body');

        bodyElement.classList.add(SCROLL_PREVENTION_CLASS);
    },

    enable: () => {
        const bodyElement = document.querySelector('body');

        bodyElement.classList.remove(SCROLL_PREVENTION_CLASS);
    }
};

export default bodyScrolling;
