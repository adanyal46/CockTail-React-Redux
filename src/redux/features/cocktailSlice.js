import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCocktails = createAsyncThunk(
	'cocktails/fetchCocktails',
	async () => {
		return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', {
			method: 'GET',
		}).then(res => {
			return res.json()
		})
	}
)
export const fetchSingleCocktail = createAsyncThunk(
	'cocktails/fetchSingleCocktail',
	async ({ id }) => {
		return fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
			{
				method: 'GET',
			}
		).then(res => {
			return res.json()
		})
	}
)
export const fetchSearchCocktail = createAsyncThunk(
	'cocktails/fetchSearchCocktail',
	async ({ searchName }) => {
		return fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`,
			{
				method: 'GET',
			}
		).then(res => {
			return res.json()
		})
	}
)
const cocktailSlice = createSlice({
	name: 'cocktails',
	initialState: {
		cocktails: [],
		cocktail: [],
		loading: false,
		error: null,
	},
	extraReducers: {
		[fetchCocktails.pending]: (state, action) => {
			state.loading = true
		},
		[fetchCocktails.fulfilled]: (state, action) => {
			state.loading = false
			state.cocktails = action.payload.drinks
		},
		[fetchCocktails.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		[fetchSingleCocktail.pending]: (state, action) => {
			state.loading = true
		},
		[fetchSingleCocktail.fulfilled]: (state, action) => {
			state.loading = false
			state.cocktail = action.payload.drinks
		},
		[fetchSingleCocktail.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		[fetchSearchCocktail.pending]: (state, action) => {
			state.loading = true
		},
		[fetchSearchCocktail.fulfilled]: (state, action) => {
			state.loading = false
			state.cocktails = action.payload.drinks
		},
		[fetchSearchCocktail.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	},
})

export default cocktailSlice.reducer
