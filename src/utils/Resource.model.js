export default class ResourceModel {
    constructor(resourceName, resourceCategory, resourceDateAdded, resourceLink, resourceNotes, _id) {
        this.name = resourceName;
        this.category = resourceCategory;
        this.dateAdded = resourceDateAdded;
        this.link = resourceLink;
        this.notes = resourceNotes;
        this._id = _id;
    }
}