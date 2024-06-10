import { Table } from "react-bootstrap"
import TableSortButton from "./TableSortButton"

const ViewResourcesTable = ({ resourcesArray }) => {
    return (
        <Table striped className='view-table'>
            <thead>
                <tr className='vt-head'>
                    <th className='vt-head'>Name <TableSortButton /> </th>
                    <th className='vt-head'>Category <TableSortButton /></th>
                    <th className='vt-head'>Date Added <TableSortButton /></th>
                    {/* <th className='vt-head'>Link <TableSortButton /></th> */}
                    <th className='vt-head'>Notes <TableSortButton /></th>
                </tr>
            </thead>
            <tbody>
                {resourcesArray.length > 0 && resourcesArray}

            </tbody>
        </Table>
    )
}

export default ViewResourcesTable