import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {publicRoutes} from './routes'
import LayoutDefault from './layouts/layoutDefault'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index)=> {
              let Layout = LayoutDefault
              if(route.layout !== '') {
                Layout = route.layout
              }
              const Page = route.component
             return <Route 
                key={index}
                path={route.path} 
                element = {
                  <Layout>
                    <Page />
                  </Layout>
                } 
              ></Route>
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
