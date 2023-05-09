import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
	name: 'nav',
	initialState: {
		hamburguerIcon: 'menu',
		navClass: 'nav hide-mobile',
	},
	reducers: {
		closeNav: (state, action) => {
			state.navClass = 'nav hide-mobile';
			state.hamburguerIcon = 'menu';
		},
		hamburguerClick: (state, action) => {
			state.navClass =
				state.navClass === 'nav hide-mobile' ? 'nav' : 'nav hide-mobile';
			state.hamburguerIcon =
				state.navClass === 'nav hide-mobile' ? 'menu' : 'close';
		},
	},
});

export const { closeNav, hamburguerClick } = navSlice.actions;
export default navSlice.reducer;
