import { useEffect, useState, useRef } from "react";
import './Dropdown.css';

function Dropdown(props) {
  const [status, setStatus] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setStatus('Loading');
    fetch(props.local)
      .then(res => res.json())
      .then(res => {
        if (res && res[props.localName]) {
          let key = 0;
          const _options = res[props.localName]
            .map(s => {
              key += 1;
              const _key = `${props.localName}_${key}`;
              if (s.code && s.name) {
                return { key: _key, code: s.code, name: s.name };
              }

              return { key: _key, code: s, name: s };
          });
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
          <p>{props.label}</p>
          <select>
            {options.map(o => <option key={o.key} value={o.code}>{o.name}</option>)}
          </select>
        </label>
      )}
    </>
  );
}

export default Dropdown;