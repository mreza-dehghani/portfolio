import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/main';

import '../styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function App({ Component, pageProps }) {
    // const store = useStore(pageProps.initialReduxState);
    const router = useRouter();

    return (
        // <Provider store={store}>
            <MainLayout>
                <Component {...pageProps} router={router} />
            </MainLayout>
        // </Provider>
    );
}

export default App;
