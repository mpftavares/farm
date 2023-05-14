import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
	name: 'nav',
	initialState: {
		hamburgerIcon: 'menu',
		navClass: 'nav hide-mobile',
	},
	reducers: {
		closeNav: (state, action) => {
			state.navClass = 'nav hide-mobile';
			state.hamburgerIcon = 'menu';
		},
		hamburgerClick: (state, action) => {
			state.navClass =
				state.navClass === 'nav hide-mobile' ? 'nav' : 'nav hide-mobile';
			state.hamburgerIcon =
				state.navClass === 'nav hide-mobile' ? 'menu' : 'close';
		},
	},
});

export const { closeNav, hamburgerClick } = navSlice.actions;
export default navSlice.reducer;
