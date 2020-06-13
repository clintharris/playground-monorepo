import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

interface AppProps {}

function App(props: React.Props<AppProps>) {
  const [date1, setDate1] = React.useState<string>('Loading...');
  const [date2, setDate2] = React.useState<string>('Loading...');

  React.useEffect(() => {
    async function getDate1() {
      const res = await fetch('/api/date');
      const serverDate = await res.text();
      setDate1(serverDate);
    }
    getDate1();
  }, []);

  React.useEffect(() => {
    async function getDate2() {
      const res = await fetch('/currentDateTime');
      const serverDate = await res.text();
      setDate2(serverDate);
    }
    getDate2();
  }, []);

  return (
    <div className={'App'}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>vercel + snowpack + react demo</p>
        <br />
      </header>
      <div className="App-body">
        <h3>What is this?</h3>
        <p>
          This is a <a href="https://create-react-app.dev/">CRA</a> app that was
          built using Snowpack. It makes a single fetch request to a
          "serverless" function (running in a Vercel FaaS environment, which may
          be localized during development) for the current date/time.
        </p>
        <p>
          The purpose of this app is to demonstrate the following:
          <ol>
            <li>
              <code>vercel dev</code> can run a dev version of the Vercel FaaS
              environment locally (i.e., host/run the lambdas under{' '}
              <code>api/</code>)
            </li>
            <li>
              <code>vercel dev</code> can run the snowpack dev server locally
              and proxy requests to it (including HMR)
            </li>
            <li>
              Vercel can build and deploy the app using{' '}
              <code>snowpack build</code>.
            </li>
          </ol>
        </p>
        <h4>Demo: Snowpack HMR</h4>
        <HelloWorld />
        <h4>Demo: Vercel FaaS</h4>
        <ul>
          <li>
            Date fetched from <code>/api/date</code>:{' '}
            {date1 ? date1 : 'Loading...'}
          </li>
          <li>
            Date fetched from <code>/currentDateTime</code> (the same lambda, using a different route
            configured in vercel.json): {date2 ? date2 : 'Loading...'}
          </li>
        </ul>
        <p>
          Try editing <code>api/date.js</code> to see how the function can be modified without restarting the dev server.
        </p>
      </div>
    </div>
  );
}

export default App;
