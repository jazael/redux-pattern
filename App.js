import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './src/data/AppStore';
import Appview from './src/views/AppView';

const mapStateToProps = state => ({
  tasks: state.tasks,
  taskForm: state.taskForm
});

const AppContainer = connect(mapStateToProps)(Appview);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};


export default App;
