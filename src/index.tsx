import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit';

import {createStore} from 'redux';
import { resolveTripleslashReference } from 'typescript';

interface arrLength {
  count: number
  }
const initial :arrLength= {count:0};
// const initial :{count:number}= {count:0};
  
// function reducer(state= initial, action :{type:string}) :any{
//   if (action.type === 'up'){
//     return {...state, count: state.count+1}
//   } else if (action.type ==='down'){
//     return {...state, count: state.count-1}
//   } else {
//     return initial
//   }
// }

const counterSlice= createSlice({  //state , reducer 합친것   @reduxjs/toolkit 쓸떄 씀
  name: 'counter',
  initialState: initial,  //초기값 
  reducers: {
    up(state){
      state.count+=1
    },
    down (state){
      state.count -=1
    },
    randomss(state, action :PayloadAction<number>){  // 페이로드액션은 액션에 어떤타입들어가는지
      state.count += action.payload
    },
    resets(state){
      state.count =0
    },
  }
})
let store =configureStore({  //스토어
  reducer:{
    total :counterSlice.reducer  //슬라이스 만든것 total로 작명 
  }
})

// const store =createStore(reducer)

export type RootState =ReturnType<typeof store.getState>   //store 타입 지정

export let{up, down, randomss, resets} = counterSlice.actions

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
    <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
