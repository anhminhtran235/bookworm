import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';
import { useQuery } from '@apollo/client';

import './App.css';
import Page from './component/Page';
import PageRouter from './pageRouter/PageRouter';
import CartModal from './component/Cart/CartModal/CartModal';
import { GET_ME_QUERY } from './lib/graphql';
import Loader from './component/Loader/Loader';

function App() {
    const { loading, error } = useQuery(GET_ME_QUERY);
    if (error) {
        return <h1>Something went wrong. Please try again later</h1>;
    }

    return loading ? (
        <Loader />
    ) : (
        <Page>
            <CartModal />
            <PageRouter />
        </Page>
    );
}

export default App;
