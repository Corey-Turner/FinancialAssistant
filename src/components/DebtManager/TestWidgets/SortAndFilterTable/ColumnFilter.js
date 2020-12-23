import React from 'react';

export const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column
    return (
            <span>
                <input value ={filterValue || ''} onChange={e => setFilter(e.target.value) } onClick={e => e.stopPropagation()}/>
            </span>
    )
}