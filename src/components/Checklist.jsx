import { useEffect, useState } from "react";
import './Checklist.css';

function Checklist(props) {
  const [status, setStatus] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    setStatus('Loading');

    if (!props.items || !Array.isArray(props.items)) {
      setStatus('Error');
      return;
    }
  
    setItems(props.items);
    setStatus('Success');
  }, []);

  let key = 0;
  
  return (
    <>
      <p>{props.label}</p>
      <ul className="Checklist">
        {status === 'Loading' && <li className="placeholder-checklist"></li>}
        {status === 'Error' && <li className="error">Something went wrong</li>}
        {status === 'Success' && items.map(i => {
          key += 1;
          return (
            <li key={key}>
              <label>
                <input type="checkbox" />
                {i}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Checklist;