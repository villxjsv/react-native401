export const BasicFunctions = () => {
    const addTwoNumbers = (a: number, b: number): number => {
        return a + b;
    };

    const calcularTriple = (num: number): number => {
        return num * 3;
    };

    return (
        <>
            <h3>Funciones Básicas</h3>
            <p>El resultado de sumar {addTwoNumbers(2, 8)}</p>
            <p>El triple de 15 es {calcularTriple(15)}</p>
        </>
    );
};
