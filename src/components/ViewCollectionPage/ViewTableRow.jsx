import PropTypes from 'prop-types'
import ResourceModel from '../../utils/Resource.model'

const ViewTableRow = ({ resource }) => {

    const { name, category, dateAdded, link, notes, _id } = resource;
    const formattedDate = new Date(dateAdded).toLocaleDateString();

    return (
        <>  
            <tr>
                <td><a href={link}>{name}</a></td>
                <td>{category}</td>
                <td>{formattedDate}</td>
                {/* <td>{link}</td> */}
                <td>{notes}</td>
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