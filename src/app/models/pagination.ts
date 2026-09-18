export interface Pagination{
    totalRows:number,
    pagesTotal:number,
    pagesActual:number,
    onChangePage:(event:any) => void
}