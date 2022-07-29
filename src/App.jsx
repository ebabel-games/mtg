import Dropdown from './components/Dropdown';
import Checklist from './components/Checklist';

function App() {
  return (
    <>
      <h1>Magic the Gathering Database</h1>
      <Dropdown label="Max number of cards" options={[5, 10, 20, 40]} localName="pageSize" />
      <Dropdown label="Types" local="/data/2022-07-29/api.magicthegathering.io/v1/types.json" localName="types" />
      <Dropdown label="Formats" local="/data/2022-07-29/api.magicthegathering.io/v1/formats.json" localName="formats"  />
      <Dropdown label="Sets" local="/data/2022-07-29/api.magicthegathering.io/v1/sets.json" localName="sets" />
      <Checklist label="Colours" items={['Green', 'White', 'Blue', 'Black', 'Red']} />
    </>
  );
}

export default App;