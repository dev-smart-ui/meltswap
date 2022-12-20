import React from 'react';

export const Title = ({title, subtitle}) => {

    return(
        <h1 className="title">{title}
            {   subtitle > '' ? <span>{subtitle}</span> : ''}
        </h1>
    )
};
