
import {format} from 'date-fns'
import { DateFilter } from './DateFilter'
import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: ColumnFilter
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
    },
    {
        Header: 'Date',
        Footer: 'Date',
        accessor: 'date',
        Cell: ({value}) => {return format(new Date(value), 'MM/dd/yyyy')},
        Filter: DateFilter,
        disableFilters: false,
    },
    {
        Header: 'amount',
        Footer: 'amount',
        accessor: 'amount',
        Filter: ColumnFilter,
        disableFilters: true,
    }
]