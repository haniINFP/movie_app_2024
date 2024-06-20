import React from "react";
import PropTypes from 'prop-types';

//파일을 많이 만들면 복잡하니까 이 내부에서 App이라는 컴포넌트에게 Potato써달라고 해보기
//파일을 만들어서 써도 되지만 정답은 없고 이렇게 써도 됨. 이런 구조를 만드는 것도 효율적인 설계일 수 있음.
// function Potato() {
//   return <h3>I love Potato</h3>
// }
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello!!</h1>
//       <Potato/>
//     </div>
//   );
// }

// export default App;

//영화를 만들거니까 밑에부터는 movie로 바꿔서 진행
//컴포넌트를 여러 개 선언(Movie 10개 찍음)해도 똑같이 넣을 수 있음(같은 걸 여러 개 넣어서 비효율적으로 보일 수도 있음)
//props라는 이름으로 아래 Food의 변수를 받는 것. props는? console에다가 값을 찍어주는 것.개발자도구-console-object
//props를 넘겨줄 때 키:밸류 형식으로 fav가 김치로 되어있기 때문에 props는 데이터 그 자체라서 .fav라고 해주면 fav 안에 있는 값 그 자체가 나옴.
//fav를 여러 개 선언했을 때 props.fav가 아니라 그냥 fav만 쳐도 같은 결과가 나옴
function Food({name, picture,rating}) {
  // 여러 줄 쓸 때는 괄호를 넣어줘야함
  //react에서는 태그들만 단순히 쓸 수 없음. 여러 줄일 때는 아래 return 처럼 div로 감싸줘야 함.
  //이름과 이미지를 따로따로 가져올 때 ,이용해서 가져오면 됨
  return (
  <div>
  <h3>I love {name}</h3>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div>
  )
}
//id없이 반복하면 컴터가 작업이 어렵다고 판담함. id를 넣어주는 것이 key값이 맞아서 좋음
const foodLike = [ //const:상수 []:빈배열 react할 때 const많이 씀
  {
    id:1,
    name: 'kimchi',
    image: 'https://i.namu.wiki/i/piH_mjMzuWsqF3N4WTX2gwDqdeQJthi5u0nsFTKalPVIMS2ykPqo0PmOU6IgyirqhUMnS9H5VyKTGJLHYyhlOmIFi9mfvcZvQ2KXmX8y4nSbugm2QkBNeUTJ5bTBUu51eRSzjBZSqgl1b7QwgVFY1A.webp',
    rating: 5
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image:'https://i.namu.wiki/i/K3O2tUaS5KrtFt4d-wVlUlEx-ndh2OW-u8xmD4fFB-qwaOuQgF-f_KRe5s-ezgMoJIyXLS87XT0usw2v2ftVYjdd7J-slAscKe-KFlIIbuKXzRAeocdyb7gXjFndpjLNdot4ymEhFME24gb4Ll7XWQ.webp',
    rating: 5
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'https://i.namu.wiki/i/OQ606_3C6ALQH8twSQSG-X3hRTlpA8iYd8oHPOxS3deKGvfW1qhmcFWYFS3oidT9PpN-a7xRr5erB1MOn821kRbEirTKDEHw6lMkty11bv0Y25aDM1hIgYDq5Z1H2JPyFY9t_INRJBgEhTG_lx0vcw.jpg',
    rating: 5
  },
  {
    id:4,
    name: 'Doncasu',
    image: 'https://i.namu.wiki/i/q2w4BPPbwvqVsGWI-o6xNTdtj40LZ_k47d18UECktsBcIMxJTfcRDMRv_WPLMHYvytmsImosNKKq-oeHPfcYHVi0ILAu1NJEGrY8CnMmDgpFh7tAvj0nJNCFPSjlbKc0sbNnWJpzhJs34-JdmXNQ1w.webp',
    rating: 0.1
  },
  { 
    id:5,
    name: 'Kimbap',
    image:'https://i.namu.wiki/i/I67Wioz7W6coFnd1btC_reTiVUD9Jii2H-G8FgoRulo-bsFtKx0J95W8-cLDN-arGpkeaVQUCVxzlQCry5088hhJaoyJR5JcqIjvZBk5zMrf23AVGiKpdy2Jnmcibr1KZFze8BdB3-QJqVM4-7VzIg.webp',
    rating: 5
  },
];

// function App() {
//   return (
//     <div>
//       <h1>Hello!!</h1>
//       {foodLike.map(dish =>
//         (<Food name={dish.name} picture={dish.image}/>))}
//     </div>
//   );
// }

//위에 있는 애를 더 간단하게 함수로 호출할거임
function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/> 
}
  function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;