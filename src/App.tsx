import { FlowProvider } from './context/flow';
import { Flow } from './components/Flow/Flow';
import './App.css';

function App() {
  return (
    <FlowProvider>
      <Flow />
    </FlowProvider>
  );
}

export default App;
