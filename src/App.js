import React from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';
class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],
    //영화 데이터 타입 받아 올 거를 movies에.
  };

    
    getMovies = async () => {
      const {
        data: {
          data: { movies },
        },
      }
      = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      ); 
      this.setState({ movies, isLoading : false });
      //": movies" 생략하고 movies만 써도 됨. state의 이름이랑 변수의 이름이랑 동일한 경우 생략해서 쓸 수 있음
  };
  
  componentDidMount() {
    this.getMovies();
    
  }
  render() {
    const { isLoading, movies} = this.state;
    return (
    <section class="container">
      {isLoading ? (
        <div class="loader">
          <span class="loader__text">'Loading...'</span>
        </div>
      ): (
      
      <div class="movies">  
      {movies.map(movie => (
        <Movie
        key={movie.id}//고유한 키 입력..console창에서 오류나는 거 없애기 위함. 습관적으로 써주는 것이 좋음음
        id ={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        />
      ))}
    </div>
    )}
    </section>
    );
  }
}
//중괄호를 쓰면, 괄호 안에 있는 것을 쓸 수 있음
//3항 연산자. true면 앞에, false면 뒤에가 출력됨

export default App;
