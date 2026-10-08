export const BasicTypes = () => {

  const name: string = 'Juan';
  const age: number = 20;
  const isStudent: boolean = true;

  const superheroes: String[] = [' Superman', 'Goku', 'Batman', 'Spiderman', 'Ironman'];


  return (
    <>
      <h3>Tipos Básicos</h3>
      {name} - {age} - {isStudent === true ? 'Es estudiante' : 'No es estudiante'}

      <p> {superheroes.join(', ')}</p>

    </>
  );
};