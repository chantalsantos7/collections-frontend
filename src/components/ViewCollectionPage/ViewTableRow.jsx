import PropTypes from 'prop-types'
import ResourceModel from '../../utils/Resource.model'

const ViewTableRow = ({ resource }) => {

    const { resourceName, resourceCategory, resourceDateAdded, resourceLink, resourceNotes, _id } = resource;
    const formattedDate = new Date(resourceDateAdded).toLocaleDateString();

    return (
        <>
            <tr>
                <td>{resourceName}</td>
                <td>{resourceCategory}</td>
                <td>{formattedDate}</td>
                <td>{resourceLink}</td>
                <td>{resourceNotes}</td>
            </tr>
        </>
    )
}

ViewTableRow.propTypes = {
    resource: PropTypes.instanceOf(ResourceModel)
}

ViewTableRow.defaultProps = {
    resource: new ResourceModel("Name", "Category", "12/05/2024", "Link",  "Notes", 12)
}

export default ViewTableRow