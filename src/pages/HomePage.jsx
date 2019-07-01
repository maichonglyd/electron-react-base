
import React from 'react';
import { remote } from 'electron';

interface Props {
}

interface State {
}

export default class HomePage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  handleExit = () => {
    remote.app.quit();
  }

  render() {
    return (
      <div className="page" onClick={this.handleExit}>
      </div>
    );
  }
}
