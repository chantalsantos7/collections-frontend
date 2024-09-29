export default class ResourceModel {
    constructor(resourceName, resourceCategory, resourceDateAdded, resourceDateModified, resourceLink, resourceNotes, _id) {
        this.name = resourceName;
        this.category = resourceCategory;
        this.dateAdded = resourceDateAdded;
        this.dateModified = resourceDateModified;
        this.link = resourceLink;
        this.notes = resourceNotes;
        this._id = _id;
    }
}