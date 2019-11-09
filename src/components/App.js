import React from "react";
import { connect } from "react-redux";
import { getGenres, getGenreMovieByID } from "../thunks";
import { mounted } from "../actions";
import Card from "./Card";
import Genre from "./Genre";
import { getImageUrl } from "../config";

class App extends React.Component {
  componentDidMount() {
    this.props.mounted();
    this.props.onGetGenres();
    this.props.onGetMouvieByID(28); // Pirmas uzkraunamas action zanras
  }

  render() {
    return (
      <div className="container">
        <div className="genres">
          {this.props.genres
            ? this.props.genres.map(genres => (
                <Genre title={genres.name} id={genres.id} key={genres.id} />
              ))
            : null}
        </div>

        {this.props.genreMovie ? (
          <div className="cards">
            {this.props.genreMovie.map(card => (
              <Card
                key={card.id}
                backgroundImage={getImageUrl(card.backdrop_path)}
                date={card.release_date}
                rating={card.vote_average}
                votes={card.vote_count}
                description={card.overview}
                title={card.original_title}
                cardID={card.id}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genreMovie: state.genreID.movieList,
  genres: state.genres.genres
});

const mapDispatchToProps = dispatch => ({
  onGetGenres: () => dispatch(getGenres()),
  onGetMouvieByID: id => dispatch(getGenreMovieByID(id)),
  mounted: () => dispatch(mounted())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
