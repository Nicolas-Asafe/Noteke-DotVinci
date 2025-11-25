export default class Studio{
    constructor(name,description,admin_id) {
        this.id = null;
        this.name = name;
        this.description = description;
        this.admin_id = admin_id;
        this.organizationsId = [];
        this.images = [];
        this.devsId = []
    }
}