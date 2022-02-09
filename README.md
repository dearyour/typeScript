# TypeScript 타입 정리

let age :JSX.Element = <div> 내용 </div>;  //컴포넌트 jsx 타입지정 
```
 const output = useSelector( (state :{count: number}) => state); 
 const output = useSelector( (state :RootState) => state); //리덕스에서가져온 타입
 const dispatch :Dispatch = useDispatch(); //디스패치 날릴때 해당 액션타입 쓰게 정의
```

따로 tpye 빼내서 정의 
``` 
type tempType = {address:string, job:number}
function User(props :tempType) :JSX.Element
```

interface로 정의 
```
interface arrLength {
  count: number
  }
const initial :arrLength= {count:0};
```
페이로드 액션은 리듀서에서 어떤 액션타입이 들어가는지 정의 
```
    randomss(state, action :PayloadAction<number>){  // 페이로드액션은 액션에 어떤타입들어가는지
      state.count += action.payload
    },
```


```
name : string | undefind
name? : string


함수타입은 () =>{}
함수표현식에만 type alias 

type 지정할타입명 = (a :string) => number;

let 함수 :함수타입명 = function(a) {
	return 10 
}

일반 변수나 함수는 type
오브젝트는 interface

유니온 타입, 둘다들어올떄,   
function hamsu(a: string | undefined){
	if( a && typeof a === 'string') {

	} a가 언디파인이면 실행안되고 스트링이면 실행 narrowing
}

타입모르면 :any 쓰면됨  하지만 그러면 ts 쓰는 이유가없어짐 

function 함수(x :unknown[]){
   return x[0]
}

interface arrLength {
length: number
}

function check<tempType extends arrLength>(x: tempType){
	return x.length 
}
let a = 함수<string[]>(['100'])

let age :JSX.Elemnet = <div> 내용 <div> 

fucn

function user() : JSX.Element {
return <div>프로필입니다</div>
}


```
---
# TypeScript 쓰는 이유 
```
타입스크립트는 일반 자바스크립트보다는 신경써야 할점이 좀더 있고 
코드량이 더 많아지는데도 불구하고 왜 사람들이 선호할까 라는 생각을 했다.

사실 타입스크립트는 처음부터 내가 개발하고 내가 끝내는
지금 프로젝트에서 전혀 쓸 이유가 없다

하지만 추후 내가 새로운 곳에 이미 진행되는 프로젝트에 내가 참여할 확률이 높은데 
이경우 어떤 변수가 어떤타입인지 따로찾아야하고 

자바스크립트의 타입 자유도가 오히려 에러를 야기 할수 있기때문에
타입을 강제함으로써 자바스크립트의 자유도를 억제시키고 

해당타입에대한 정의를 따로함으로써 어떤 props을 넘겨야할지 axios 통신을할떄
어떤데이터를 넘겨야할지에 대한 이해를 높일수있음으로 

중간에 참여하는 프로젝트라 할지라도 일반 자바스크립트로만 만들어진 리액트보다 더나은 이해를 할수있고 
js보다 더 구체적인 에러를 도출시킴으로써  에러 해결시간을 줄여주기 위해서
타입스크립트 사용이 선호된다고 생각된다.
```

