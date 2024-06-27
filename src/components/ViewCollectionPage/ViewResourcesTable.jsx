import { Table } from "react-bootstrap"
import TableSortButton from "./TableSortButton"
import { useSearch } from "../../hooks/useSearchHooks";
import ViewTableRow from "./ViewTableRow";

const ViewResourcesTable = ({ resourcesArray, searchBarText }) => {

    const resourceRows = [];
    resourcesArray.forEach((resource, index) => {
        if (resource.name.toLowerCase().indexOf(searchBarText.toLowerCase()) === -1) return;
        resourceRows.push(<ViewTableRow resource={resource} key={index} />)
    });

    return (
        <Table striped className='view-table'>
            <thead>
                <tr className='vt-head'>
                    <th className='vt-head'>Name <TableSortButton /> </th>
                    <th className='vt-head'>Category <TableSortButton /></th>
                    <th className='vt-head'>Date Added <TableSortButton /></th>
                    <th className="vt-head">Date Modified <TableSortButton /></th>
                    {/* <th className='vt-head'>Link <TableSortButton /></th> */}
                    <th className='vt-head'>Notes <TableSortButton /></th>
                </tr>
            </thead>
            <tbody>
                {resourceRows.length > 0 && resourceRows}

            </tbody>
        </Table>
    )
}

export default ViewResourcesTable