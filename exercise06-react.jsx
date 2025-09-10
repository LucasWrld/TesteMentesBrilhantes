/**
 * Melhore o código abaixo
*/
export default function Page() {
  const buttons = [
    { label: 'Salvar', type: 'primary' },
    { label: 'Cancelar', type: 'secondary' },
  ];

  return (
    <>
      {buttons.map((btn) => (
        <button
          key={btn.label}
          className={`btn-${btn.type}`}
        >
          {btn.label}
        </button>
      ))}
    </>
  );
}
