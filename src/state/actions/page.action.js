export const HR_FETCH_SKILLS = "HR_FETCH_SKILLS";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const FISHH = "FISHH";

/**
 * Change Page
 */
export const fetchSkillsCategory = (skillsCategory) => ({
  type: HR_FETCH_SKILLS,
  payload: skillsCategory,
});

export const changePageAction = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const fishhAction = (fishh) => ({
  type: FISHH,
  payload: fishh,
});
