import Dropdown from './components/Dropdown';

function App() {
  return (
    <>
      <Dropdown label="Sets" local="/data/2022-07-29/api.magicthegathering.io/v1/sets.json" localName="sets" />

      <Dropdown label="Types" local="/data/2022-07-29/api.magicthegathering.io/v1/types.json" localName="types" />
    </>
  );
}

export default App;