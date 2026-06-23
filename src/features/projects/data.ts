/**
 * Re-export from centralized portfolio data
 * @see @/data/portfolio.ts
 */
export {
  type ProjectCategory,
  type ProjectCategoryData,
  type Project,
  type ProjectFeature,
  type ProjectArchitecture,
  type ProjectChallenge,
  type ProjectLesson,
  type ProjectGalleryItem,
  projectCategories,
  projects,
  getProjectsByCategory,
  getFeaturedProjects,
  getProjectBySlug,
  getAdjacentProjects,
  getProjectCategoryById,
} from "@/data/portfolio";
