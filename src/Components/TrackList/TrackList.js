import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {/*app map method that renders a set of track components */}
        {this.props.tracks.map((song) => {
          return (
            <Track
              key={song.id}
              track={song}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}
