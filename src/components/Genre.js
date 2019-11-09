import React, { Component } from "react";
import { getGenreMovieByID } from "../thunks";
import { connect } from "react-redux";

class Genre extends Component {
  render() {
    const { title, id } = this.props;
    return (
      <div className="genre" onClick={() => this.props.onChangeID(id)}>
        {title}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onChangeID: id => dispatch(getGenreMovieByID(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genre);
