import React from 'react';

export const Small = React.memo(({ value }) => {
    console.log('Me volví a generar :c')

    return (
        <small>{ value }</small>
    )
})
