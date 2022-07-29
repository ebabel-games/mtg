import { useEffect, useState } from "react";
import './Dropdown.css';

function Dropdown(props) {
  const [status, setStatus] = useState('');
  const [options, setOptions] = useState([]);

  function convertDataToOptions(data) {
    let key = 0;
    const _options = data
      .map(s => {
        key += 1;
        const _key = `${props.localName}_${key}`;

        // Array element is an object.
        if (s.code && s.name) {
          return { key: _key, code: s.code, name: s.name };
        }

        // Array element is a simple value.
        return { key: _key, code: s, name: s };
    });

    return _options;
  }

  useEffect(() => {
    setStatus('Loading');

    // Hard-coded options passed as props.
    if (props.options) {
      setOptions(convertDataToOptions(props.options));
      setStatus('Success');
      return;
    }

    // Get options dynamically if not available in props.
    fetch(props.local)
      .then(res => res.json())
      .then(res => {
        if (res && res[props.localName]) {
          setOptions(convertDataToOptions(res[props.localName]));
        } else {
          throw new Error('Missing data');
        }
      })
      .then(() => setStatus('Success'))
      .catch(() => setStatus('Error'));
  }, []); // Second parameter of useEffect must be [] otherwise an infinite loop is created.

    return (
      <div className="Dropdown">
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
      </div>
    );
}

export default Dropdown;