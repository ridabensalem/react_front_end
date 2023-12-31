import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Greeting from './components/Greetings';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Provider>
  );
}

export default App;
