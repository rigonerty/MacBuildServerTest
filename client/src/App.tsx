import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import "./styles/index.scss"
import { useRefreshQuery } from './store/api/authApi';
import { useAppDispatch } from './hooks/redux';
import { addAccessToken } from './store/slices/tokens';
function App() {
  const {data,isFetching} = useRefreshQuery()
  const dispatch = useAppDispatch()
  if(data){
    dispatch(addAccessToken(data))
  }
  return (
    <div className="App">
      { isFetching
      ? <></>      
      :<BrowserRouter>
        <AppRouter/>
      </BrowserRouter>


      }

    </div>
  );
}

export default App;
