export default class ResourceModel {
    constructor(resourceName, resourceCategory, resourceDateAdded, resourceLink, resourceNotes, _id) {
        this.resourceName = resourceName;
        this.resourceCategory = resourceCategory;
        this.resourceDateAdded = resourceDateAdded;
        this.resourceLink = resourceLink;
        this.resourceNotes = resourceNotes;
        this._id = _id;
    }
}