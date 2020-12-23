import React, { useMemo } from 'react';
import MOCK_DATA from './MOCK_DATA.json'
import {useTable, useSortBy, useGlobalFilter, useFilters} from 'react-table'
import {COLUMNS} from './columns'
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai"
import './styles.css'

const TableModule = (col, dat) => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, []) //This will need to be updated to be the data from the Redux Store

    const { 
        getTableProps, 
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        } = useTable({
                columns,
                data,
            },
            useFilters,
            useSortBy
            )

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? <AiFillCaretDown/> : <AiFillCaretUp/>) : ''}
                                        </span>
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                ))
                            }
                        </tr> 
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map( row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    {
                        footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map( column => (
                                    <td {...column.getHeaderProps()}>
                                        {column.render('Footer')}
                                    </td>
                                ))
                            }
                        </tr> 
                    ))}
                </tfoot>
            </table>
        </>
    )
}



export default TableModule;