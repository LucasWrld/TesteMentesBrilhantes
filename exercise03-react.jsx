/**
 * Estado não sincroniza com prop externa
 */
import React, { useState } from 'react';

export default function Todo() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function add() {
    const t = (text || '').trim();
    if (!t) return;
    setItems(prev => [...prev, t]);
    setText('');
  }

  return (
    <div>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={add}>Adicionar</button>
    </div>
  );
}
