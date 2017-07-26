import * as React from "react";

import { Hello, Profile } from "react-dashboard-composer";

export default class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <Hello compiler="TypeScript" framework="React" />
        <Profile title="Software Engineer" duty="Coding" />
      </div>
    );
  }
}
