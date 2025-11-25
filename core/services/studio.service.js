export default class StudioService {
    constructor(studioRepository) {
        this.studioRepository = studioRepository;
    }   
    async createStudio(data) {
        if (!data || !data.name || !data.description || !data.admin_id) {
            throw new Error("All studio fields are required.");
        }   
        return await this.studioRepository.createStudio(data);
    }   
    async getStudioById(studioId) {
        if (!studioId) {
            throw new Error("Studio ID is required.");
        }
        return await this.studioRepository.getStudioById(studioId);
    }
    async createOrganizationInStudio(studioId, orgData) {
        if (!studioId || !orgData || !orgData.name || !orgData.description || !orgData.html_content || !orgData.data || !orgData.image_icon_id || !orgData.banner_image_id) {
            throw new Error("Studio ID and all organization fields are required.");
        }
        return await this.organizationRepository.createOrganizationInStudio(studioId, orgData);
    }
    async deleteStudio(studioId) {  
        if (!studioId) {    
            throw new Error("Studio ID is required.");
        }
        return await this.studioRepository.deleteStudio(studioId);
    }
    async addDeveloperToStudio(studioId, devId) {
        if (!studioId || !devId) {
            throw new Error("Studio ID and Developer ID are required.");
        }
        return await this.studioRepository.addDeveloperToStudio(studioId, devId);
    }
    async removeDeveloperFromStudio(studioId, devId) {
        if (!studioId || !devId) {
            throw new Error("Studio ID and Developer ID are required.");
        }
        return await this.studioRepository.removeDeveloperFromStudio(studioId, devId);
    }
    async uploadStudioImage(studioId, imageData) {
        if (!studioId || !imageData) {
            throw new Error("Studio ID and Image Data are required.");
        }
        return await this.studioRepository.uploadStudioImage(studioId, imageData);
    }
}