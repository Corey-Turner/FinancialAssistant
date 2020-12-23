import React, {useState} from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {format, setDayOfYear} from 'date-fns'


export const DateFilter = ({column}) => {
    const {filterValue, setFilter} = column

    return (
            <span>
                <DatePicker value ={filterValue || ''} onChange={ e => setFilter((format(new Date(e), "MM/dd/yyyy")))} onClick={e => e.stopPropagation()}/>
            </span>
    )
}