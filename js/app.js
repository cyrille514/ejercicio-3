// PASO1. Mapear los objetos (elementos) del HTML

        function calcular() {
            // 1. Obtener el valor del formulario
            const inputNumero = document.getElementById('numero').value;
            const resultadoP = document.getElementById('resultado');

            // 2. Convertir a entero (parseInt)
            const numero = parseInt(inputNumero);

            
            // 3. Calcular el doble y el triple

            const doble = numero * 2;
            const triple = numero * 3;

            // 4. Mostrar el resultado
            resultadoP.innerHTML = `Número original: ${numero} <br> El doble es: ${doble} <br>
                El triple es: ${triple}
            `;
            
        }
    
