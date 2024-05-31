import PropTypes from 'prop-types'
import ResourceModel from '../../utils/Resource.model'

const ViewTableRow = ({ resource }) => {

    const { resourceName, resourceCategory, resourceDateAdded, resourceLink, resourceNotes, _id } = resource;

    return (
        <>
            <tr>
                <td>{resourceName}</td>
                <td>{resourceCategory}</td>
                <td>{resourceDateAdded}</td>
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
    resource: new ResourceModel("Name", "Category", "55/55/2024", "Link",  "Notes", 12)
}

export default ViewTableRow