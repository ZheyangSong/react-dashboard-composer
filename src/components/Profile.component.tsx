import "./profile.style.scss";

import * as React from "react";

export interface ProfileProps {
  title: string;
  duty: string;
}

export class Profile extends React.Component<ProfileProps, undefined> {
  render() {
    return (
      <div className="large-font">
        <p>Title: <span>{this.props.title}</span></p>
        <p>Duty: <span>{this.props.duty}</span></p>
      </div>
    );
  }
}
