import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: []
  },
  reducers: {
        addItem: (state, action) => {
          state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.items.indexOf(action.payload);
            state.items.splice(index, 1);
        },
        clearAllItems: (state) => {
            state.items = [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearAllItems } = basketSlice.actions

export default basketSlice.reducer