import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);

// ADD THIS SELECTOR
export const selectAllItems = createSelector(
  // code we discussed here
  selectCollectionsForPreview,
  (collections) => Object.keys(collections).reduce((acc, curr) => {
    const { items } = collections[curr];
    items.forEach(item => {
      acc.push(item);
    })
    return acc;
  }, [])
);