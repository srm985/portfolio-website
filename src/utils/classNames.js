const classNames = (...classes) => classes.reduce((compiledClasses, classItem) => {
    if (!classItem || classItem === true) {
        return compiledClasses;
    }

    if (typeof classItem === 'object') {
        const dynamicClasses = Object.keys(classItem).filter((className) => {
            const {
                [className]: classEvaluation
            } = classItem;

            return typeof classEvaluation === 'function' ? classEvaluation() : classEvaluation;
        });

        return dynamicClasses.length ? ([
            ...compiledClasses,
            ...dynamicClasses
        ]) : compiledClasses;
    }

    return ([
        ...compiledClasses,
        classItem
    ]);
}, []).join(' ');

export default classNames;
