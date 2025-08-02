import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        upcomingMovies:null,
        topRatedMovies:null,
        popularMovies:null
    },

    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
          state.trailerVideo = action.payload
        },
        addUpcomingMovies:(state,action)=>{
         state.upcomingMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
         state.topRatedMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
         state.popularMovies = action.payload
        }
    }

})

export const {addNowplayingMovies,addTrailerVideo,addUpcomingMovies,addTopRatedMovies,addPopularMovies} =movieSlice.actions;

export default movieSlice.reducer;