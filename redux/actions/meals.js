export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const APPLY_FILTERS = "APPLY_FILTERS";

export const toggleFavourite = (id) => ({
    type: TOGGLE_FAVOURITE,
    mealId: id
});

export const applyFiler = (filters) => ({
    type: APPLY_FILTERS,
    filters
})