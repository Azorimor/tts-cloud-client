import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

function render() {
  ReactDOM.render(
    <div>
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" disabled>
      Disabled
    </Button>
    <Button variant="contained" color="primary" href="#contained-buttons">
      Link
    </Button>
    </div>
    , document.getElementById('root')
  );
}

render();