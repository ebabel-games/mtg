import { useEffect, useState, useRef } from "react";

const label = 'Sets';

function Dropdown() {
  const [status, setStatus] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setStatus('Loading');
    fetch('/data/2022-07-29/api.magicthegathering.io/v1/sets.json')
      .then(res => res.json())
      .then(res => {
        if (res && res.sets) {
          const _options = res.sets.map(s => { return { code: s.code, name: s.name } });
          setOptions(_options);
        }
      })
      .then(() => setStatus('Success'))
      .catch(() => setStatus('Error'));
  }, []); // Second parameter of useEffect must be [] otherwise an infinite loop is created.

  return (
    <>
      {status === 'Loading' && <p className="placeholder-dropdown" />}
      {status === 'Error' && <p className="error">Something went wrong</p>}
      {status === 'Success' && (
        <label>
          <p>Sets</p>
          <select>
            {options.map(o => <option key={o.code} value={o.code}>{o.name}</option>)}
          </select>
        </label>
      )}
    </>
  );
}

export default Dropdown;