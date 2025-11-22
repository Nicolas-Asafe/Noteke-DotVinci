export default class Org{
    constructor(name, description,studioId,html_content,data,image_icon_id,banner_image_id,adminId) {
        this.name = name;
        this.description = description;
        this.studioId = studioId;
        this.html_content = html_content;
        this.data = data;
        this.adminId = adminId;
        this.image_icon_id = image_icon_id;
        this.banner_image_id = banner_image_id;
        this.users = 0;
    }
}