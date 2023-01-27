import React, {Suspense, Redirect, Switch} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.scss';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="photo-app">
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Header />

        {/* <Button onClick={handleButtonClick}>Fetch Product List</Button> */}

        <Switch>
          <Redirect exact from="/" to="/photos" />

          {/* <Route path="/photos" component={Photo} />
          <Route path="/sign-in" component={SignIn} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </Suspense>
  </div>
  );
}

export default App;
