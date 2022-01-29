import {useState} from 'react';

import './App.css';
import { useDispatch, useSelector} from 'react-redux'
import {RootState, up, down, randomss, resets} from './index'
import {Dispatch} from 'redux'
let age :JSX.Element = <div> 내용 </div>;  //컴포넌트 jsx 타입지정 

function App() {

  let [users,setUsers] = useState<string | number>('학교')

  // const output = useSelector( (state :{count: number}) => state);  //스토어타입 적기
  const output = useSelector( (state :RootState) => state); //리덕스에서가져온 상태들
  const dispatch :Dispatch = useDispatch(); //디스패치 날릴때 해당 액션타입 쓰게 정의

  return (
    <div className="App">
      {age}
      <div>test </div>
      <User address="서울" job={6}></User>

      {output.total.count}
      {/* <button onClick={()=>{dispatch({type:'up'})}}>버튼</button> */} 
      <button onClick={()=>{dispatch(up())}}> + 버튼</button>
      <button onClick={()=>{dispatch(down())}}> - 버튼</button>
      <button onClick={()=>{dispatch(randomss(3))}}> *3 버튼</button>
      <button onClick={()=>{dispatch(resets())}}>  reset</button>
    </div>
  );
}

//컴포넌트! 
type tempType = {address:string, job:number}
function User(props :tempType) :JSX.Element{ //컴포넌트 jsx 타입지정 
  return (
    <div> {props.address}, {props.job}유저정보  </div>
  )
}

// function User(props :{address:string, job:number}) :JSX.Element{ //컴포넌트 jsx 타입지정 
//   return (
//     <div> {props.address}, {props.job}유저정보  </div>
//   )
// }

// function User(props) :JSX.Element{ //컴포넌트 jsx 타입지정 
//   return (
//     <div> {props.address}유저정보  </div>
//   )
// }

export default App;
