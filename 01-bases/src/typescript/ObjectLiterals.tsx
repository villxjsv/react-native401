export const ObjectLiterals = () => {

  interface Person {
    firstname: string;
    lastname: string;
    age: number;
    address: Address;
  }


  interface Address {
    street: string;
    number: number;
    city: string;
    country: string;
  }


  const person: Person = {
    firstname: "Villaseca",
    lastname: "Santiago",
    age: 31,
    address: {
      street: "Ursulo Galvan",
      number: 103,
      city: "Coatzacoalcos",
      country: "Mexico"
    }
  };
  return (
    <>
      <h3>Objectos Literales</h3>

      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  );
};