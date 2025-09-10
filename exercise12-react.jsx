/**
 * Ajuste o código para que o componente pai possa controlar o valor do campo e limpá-lo ao 
 * clicar no botão.
 */
import { useState } from 'react';

function SearchField({ value, onChange }) {
  return (
    <input
      placeholder="Buscar..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default function SearchPanel() {
  const [search, setSearch] = useState('');

  const handleReset = () => {
    setSearch('');
  };

  return (
    <div>
      <SearchField value={search} onChange={setSearch} />
      <button onClick={handleReset}>Limpar</button>
    </div>
  );
}
