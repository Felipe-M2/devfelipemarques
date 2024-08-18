import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PortfolioPage from './Portfolio';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;