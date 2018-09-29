import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {usersData} from 'usersData';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from 'reducers';

const store = createStore(reducers,usersData);

localStorage.setItem('localData',JSON.stringify(usersData));

ReactDOM.render( <Provider store={store}>
                < App/>
                 </Provider>,
                  document.querySelector('#root')
               );