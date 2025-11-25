export default class OrganizationService {
    constructor(organizationRepository) {
        this.organizationRepository = organizationRepository;
    }
    async registerOrganization(orgData) {
        if (!orgData.name || !orgData.description || !orgData.studioId || orgData.html_content || !orgData.data || !orgData.image_icon_id || !orgData.banner_image_id) {
            throw new Error("Organization name, description, and studioId are required.");
        }
        return await this.organizationRepository.createOrganization(orgData);
    }
    async getOrganizationProfile(orgId) {       
        if (!orgId) {
            throw new Error("Organization ID is required");
        }
        return await this.organizationRepository.getOrganizationById(orgId);
    }
    async updateOrganizationProfile(orgId, updatedData) {
        if (!orgId || !updatedData) {
            throw new Error("Organization ID and updated data are required");
        }
        return await this.organizationRepository.updateOrganization(orgId, updatedData);
    }
    async deleteOrganizationAccount(orgId) {
        if (!orgId) {
            throw new Error("Organization ID is required");
        }
        return await this.organizationRepository.deleteOrganization(orgId);
    }
}