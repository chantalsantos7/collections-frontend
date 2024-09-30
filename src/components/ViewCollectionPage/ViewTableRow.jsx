import PropTypes from 'prop-types'
import ResourceModel from '../../utils/Resource.model'
import { useResource } from '../../hooks/useResourceHooks';
import { useLocation, useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';

const ViewTableRow = ({ resource: currentResource }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const { name, category, dateAdded, dateModified, link, notes, _id } = currentResource;
    const { resource, setResource } = useResource();
    const formattedAddDate = new Date(dateAdded).toLocaleDateString();
    const formattedModifyDate = new Date(dateModified).toLocaleDateString();

    const onEditClick = (event) => {
        event.preventDefault();
        //upon click, set the state to resourceID?
        setResource(currentResource);
        // location.state.resource = resource;
        navigate('../resource/edit', {state: { resource: currentResource }})
      }

    return (
        <>  
            <tr>
                <td><a href={link}>{name}</a></td>
                <td>{category}</td>
                <td>{formattedAddDate}</td>
                <td>{formattedModifyDate}</td>
                <td>{notes}</td>
                <td><Button onClick={onEditClick}>edit</Button></td>
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