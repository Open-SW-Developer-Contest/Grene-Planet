import {Route, Switch} from 'react-router-dom'
import Layout from './Layout';
import Test_Page from './Test_Page';
import Header from './Header';

function App() {
  return (
    <Layout>
      <Switch>
        <Header>
          <Route path='/test' component={Test_Page} exact={true} />
        </Header>
      </Switch>
    </Layout>
  );
}

export default App;
