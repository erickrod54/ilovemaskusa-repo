const INITIAL_STATE = {
  sections : [{
    title: 'FOR HER',
    imageUrl: 'https://i.ibb.co/DLZfHGN/forher.png',
    id: 1,
    linkUrl: 'shop/forher'
  },
  {
    title: 'FOR HIM',
    imageUrl: 'https://i.ibb.co/72R2CTg/forhim.png',
    id: 2,
    linkUrl: 'shop/forhim'
  },
  {
    title: 'FOR KIDS',
    imageUrl: 'https://i.ibb.co/v3LFQ8X/forkids.png',
    id: 3,
    linkUrl: 'shop/forkids'
  },
  {
    title: 'FOR ORGANIZATIONS',
    imageUrl: 'https://i.ibb.co/4pJBCJQ/fororganizations.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/fororganizations'
  },
  {
    title: 'FOR CAUSES',
    imageUrl: 'https://i.ibb.co/g6sPRr0/forgoodcauses.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/forcauses'
  }]     
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

