import {Route, Switch} from 'react-router-dom';
import Layout from './Layout';
import Login_form from './page/Login_form';
import Test from './page/Test';
import Register from './page/Register';

function App() {
  return (
    <Layout>
      <Switch>
          <Route path='/' component={Test} exact={true} />
          <Route path='/login_form' component={Login_form}/>
          <Route path='/register' component={Register}/>
      </Switch>
    </Layout>
  );
}

export default App;