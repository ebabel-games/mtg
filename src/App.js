import Dropdown from './components/Dropdown';

function App() {
  return (
    <>
      <Dropdown label="Max number of cards" options={[5, 10, 20, 40]} localName="pageSize" />
      <Dropdown label="Types" local="/data/2022-07-29/api.magicthegathering.io/v1/types.json" localName="types" />
      <Dropdown label="Formats" local="/data/2022-07-29/api.magicthegathering.io/v1/formats.json" localName="formats"  />
      <Dropdown label="Sets" local="/data/2022-07-29/api.magicthegathering.io/v1/sets.json" localName="sets" />
    </>
  );
}

export default App;