export default class OrganizationService {
    constructor(organizationRepository) {
        this.organizationRepository = organizationRepository;
    }   
    createOrganization(data) {
        if (!data || !data.name || !data.description || !data.studioId || !data.html_content || !data.data || !data.image_icon_id || !data.banner_image_id) {
            throw new Error("All organization fields are required.");
        }
        return this.organizationRepository.createOrganization(orgId, data);
    }
    getOrganizationById(orgId) {
        if (!orgId) {
            throw new Error("Organization ID is required.");
        }
        return this.organizationRepository.getOrganizationById(orgId);
    }
    updateOrganization(orgId, updatedData) {
        if (!orgId || !updatedData) {
            throw new Error("Organization ID and updated data are required.");
        }
        return this.organizationRepository.updateOrganization(orgId, updatedData);
    }
    deleteOrganization(orgId) {
        if (!orgId) {
            throw new Error("Organization ID is required.");
        }  
        return this.organizationRepository.deleteOrganization(orgId);
    }
}