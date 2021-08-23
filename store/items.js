

// Imports
import Items from 'warframe-items';

// State
export const state = () => ({
  categories: [ ],
  elements: {  },
  activeCategory: 'Arcanes',
});

// Mutations
export const mutations = {
  
  // Add Category
  AddCategory: function (state, data) {
    state.categories.push (data.name);
    state.elements [data.name] = [ ];
  },

  // Add Element
  AddElement: function (state, data) {
    data.uniqueName = data.uniqueName.split ('/').join ('');
    state.elements [data.category].push (data);
  },

  // Set Active Category
  SetActiveCategory: function (state, { index }) {
    state.activeCategory = index;
  },

};

// Actions
export const actions = {
  Fetch: function ({ commit, state }) {
    
    const items = new Items (); console.log (items);
    for (let n = 0; n < items.length; n ++) {
      if (!state.categories.includes (items [n].category)) {
        commit ('AddCategory', { name: items [n].category });
      } commit ('AddElement', { ...items [n] });
    }

  },
};