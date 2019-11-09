import React from "react";
import { unlike, like } from "../thunks";
import { favouriteList } from "../actions";
import { connect } from "react-redux";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: true
    };
  }

  checkLiked = id => {
    if (this.props.list.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { showDescription } = this.state;
    const {
      title,
      backgroundImage,
      date,
      rating,
      votes,
      description,
      cardID
    } = this.props;

    return (
      <div className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />

        <div className="card__title">{title}</div>

        <div className="card__like">
          {this.checkLiked(cardID) ? (
            <i
              className="fa fa-heart"
              onClick={() => {
                this.props.addToFavourite(cardID);
                this.props.unlike(cardID);
              }}
            />
          ) : (
            <i
              className="fa fa-heart-o"
              onClick={() => {
                this.props.addToFavourite(cardID);
                this.props.like(cardID);
              }}
            />
          )}
        </div>

        <div className="card__subtitle">
          <span>{date}</span>
          <span>
            {rating} ({votes} votes)
          </span>
        </div>

        <div className="card-info">
          <div className="card-info__header">Summary</div>
          <button
            onClick={() => {
              this.setState({ showDescription: !showDescription });
            }}
          >
            Toggle
          </button>
          <div className="card-info__description">
            {showDescription ? description : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.favouriteList.list
});

const mapDispatchToProps = dispatch => ({
  addToFavourite: id => dispatch(favouriteList(id)),
  unlike: id => dispatch(unlike(id)),
  like: id => dispatch(like(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
