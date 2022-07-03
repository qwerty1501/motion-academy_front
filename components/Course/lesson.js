import React from 'react';

const Lesson = ({el,idx}) => {
    return (
        <li><span>{idx + 1}</span>.<span className=" mr-2">Сабак.</span>{el.title}</li>
    );
};

export default Lesson;
