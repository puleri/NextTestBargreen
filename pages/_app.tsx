import '../styles/globals.css'
import store from 'store';
import { Provider, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAndSetCategories, login } from 'store/slices/app';
import Layout from '@/components/Layout/Layout';

function DataWrapper({ children }: any) {
  const dispatch: any = useDispatch();
  
  useEffect(() => {
    dispatch(getAndSetCategories());
  }, [])
  
  return children;
}

function App({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState('')
  return (
    <Provider store={store}>
      <DataWrapper>
        <Layout>
          <Component currentUser={currentUser} setCurrentUser={setCurrentUser} {...pageProps} />
        </Layout>
      </DataWrapper>
    </Provider>
  )
}

export default App
