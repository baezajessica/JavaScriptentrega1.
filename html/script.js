const operaciones = ["suma", "resta", "multiplicación", "división"];
let resultado = 0;
function solicitarNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (numero === null || numero === "") {
            alert("Debes ingresar un número válido.");
        } else {
            numero = parseFloat(numero);
            if (isNaN(numero)) {
                alert("Debes ingresar un número válido.");
            } else {
                return numero;
            }
        }
    } while (true);
}

function realizarOperacion(operacion, num1, num2) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicación":
            return num1 * num2;
        case "división":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                alert("No se puede dividir por cero.");
                return null;
            }
        default:
            alert("Operación no reconocida.");
            return null;
    }
}

function calculadora() {
    let operacion = prompt(`Elige una operación: ${operaciones.join(", ")}`);
    if (operaciones.includes(operacion)) {
        let num1 = solicitarNumero("Ingresa el primer número:");
        let num2 = solicitarNumero("Ingresa el segundo número:");
        resultado = realizarOperacion(operacion, num1, num2);
        if (resultado !== null) {
            alert(`El resultado de la ${operacion} es: ${resultado}`);
            console.log(`Resultado: ${resultado}`);
        }
    } else {
        alert("Operación no válida. Inténtalo de nuevo.");
    }
}

// Ejecutar la calculadora
let continuar = confirm("¿Deseas realizar una operación matemática?");
while (continuar) {
    calculadora();
    continuar = confirm("¿Deseas realizar otra operación?");
}
alert("Gracias por usar la calculadora.");
