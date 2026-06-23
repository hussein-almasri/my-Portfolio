/**
 * Re-export from centralized portfolio data
 * @see @/data/portfolio.ts
 */
export {
  type SkillCategory,
  type SkillCategoryData,
  type Skill,
  skillCategories as categories,
  skills,
  getSkillsByCategory,
  getSkillCategoryById as getCategoryById,
} from "@/data/portfolio";
