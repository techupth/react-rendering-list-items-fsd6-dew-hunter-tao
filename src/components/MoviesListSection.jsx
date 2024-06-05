/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies.jsx";

function MoviesListSection() {
  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <div
            key={index}
            css={css`
              box-sizing: border-box;
              display: flex;
              width: 400px;
              height: 250px;
              background-color: #ffffff;
              border-radius: 10px;
              box-shadow: 0px 4px 40px rgba(145, 124, 124, 0.25);
              margin-bottom: 80px;
              color: #181818;
              font-size: 20px;
              gap: 20px;
            `}
          >
            <div>
              <img
                src={movie.image}
                css={css`
                  width: 102px;
                  height: 100px;
                  border-radius: 10px;
                  margin-left: 10px;
                  margin-top: 19px;
                `}
              ></img>
            </div>
            <div
              css={css`
                box-sizing: border-box;
                font-size: 16px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 15px;
              `}
            >
              <div>Title: {movie.title}</div>
              <div>Year: {movie.year}</div>
              <div>Runtime: {movie.runtime}</div>
              <div
                css={css`
                  display: flex;
                `}
              >
                Genres:
                {movie.genres.map((genre, i) => {
                  return (
                    <div
                      key={i}
                      css={css`
                        background-color: #eaac99;
                        border-radius: 10px;
                        font-size: 14px;
                        padding-left: 5px;
                        padding-right: 5px;
                        margin-left: 2px;
                        margin-top: 2px;
                      `}
                    >
                      {genre}
                    </div>
                  );
                })}
              </div>
              <div>IMDB Ratings: {movie.imdbRating}</div>
              <div>IMDB Votes: {movie.imdbVotes}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
  
export default MoviesListSection;
