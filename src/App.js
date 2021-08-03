import {Route, Switch} from 'react-router-dom'
import Layout from './Layout';
import Test from './Test';

function App() {
  return (
    <Layout>
      <Switch>
          <Route path='/' component={Test} exact={true} />
      </Switch>
    </Layout>
  );
}

export default App;