import PropTypes from 'prop-types'
import ResourceModel from '../../utils/Resource.model'

const ViewTableRow = ({ resource }) => {

    const { name, category, dateAdded, dateModified, link, notes, _id } = resource;
    const formattedAddDate = new Date(dateAdded).toLocaleDateString();
    const formattedModifyDate = new Date(dateModified).toLocaleDateString();

    return (
        <>  
            <tr>
                <td><a href={link}>{name}</a></td>
                <td>{category}</td>
                <td>{formattedAddDate}</td>
                <td>{formattedModifyDate}</td>
                <td>{notes}</td>
            </tr>
        </>
    )
}

ViewTableRow.propTypes = {
    resource: PropTypes.instanceOf(ResourceModel)
}

// ViewTableRow.defaultProps = {
//     resource: new ResourceModel("Name", "Category", "12/05/2024", "Link",  "Notes", 12)
// }

export default ViewTableRow