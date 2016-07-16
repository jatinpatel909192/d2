import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';

// Import Actions
import { toggleDrawer, logout } from './AppActions';

// Import Selectors

import { getAppDrawerOpen } from './AppReducer';

injectTapEventPlugin();
const muiTheme = getMuiTheme((null, { userAgent: 'all' }));

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }
  getChildContext() {
    return { muiTheme };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Pursuit Digital Information Network."
            titleTemplate="%s Digital Information Network."
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            appDrawerOpen={this.props.appDrawerOpen}
            toggleDrawer={() => this.props.dispatch(toggleDrawer())}
            overlayClose={() => this.props.dispatch(toggleDrawer())}
            logout={() => this.props.dispatch(logout())}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  appDrawerOpen: PropTypes.bool.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    appDrawerOpen: getAppDrawerOpen(store),
  };
}

export default connect(mapStateToProps)(App);
