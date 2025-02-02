import { DownloadProvider } from './Providers/DownloadProvider';
import { StatsProvider } from './Providers/StatsProvider';
import { Layout } from './Layout/Layout';

import './App.css';

function App() {

  return (
    <div className="App">
      <StatsProvider>
        <DownloadProvider>
          <Layout />
        </DownloadProvider>
      </StatsProvider>
    </div>
  );
}

export default App;
