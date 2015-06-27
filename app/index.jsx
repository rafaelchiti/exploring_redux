import React, { PropTypes } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'redux/react';
import { createDispatcher, createRedux, composeStores } from 'redux';
import HashHistory from 'react-router/lib/HashHistory';
import {renderRoutes} from 'app/routes';
import * as stores from 'app/stores';

const dispatcher = createDispatcher(
  composeStores(stores)
)
const redux = createRedux(dispatcher)


class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider redux={redux}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}

React.render(<Root history={new HashHistory()} />, document.getElementById('applicationHolder'));
