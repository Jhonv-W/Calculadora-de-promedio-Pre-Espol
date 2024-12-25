document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nota-form');
    const resultadoDiv = document.getElementById('resultado');
    const notaFinalSpan = document.getElementById('nota-final');
    const caritaDiv = document.getElementById('carita');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores de los inputs
        const examenFinal = parseFloat(document.getElementById('examen-final').value);
        const leccionGeneral = parseFloat(document.getElementById('leccion-general').value);
        const pruebaSalida = parseFloat(document.getElementById('prueba-salida').value);
        const controlLectura = parseFloat(document.getElementById('control-lectura').value);
        const tallerGrupal = parseFloat(document.getElementById('taller-grupal').value);
        const tareas = parseFloat(document.getElementById('tareas').value);
        const mejoramiento = parseFloat(document.getElementById('mejoramiento').value);

        // Cálculo de las ponderaciones
        let ponderacionOriginal = (examenFinal * 0.50) + (leccionGeneral * 0.20);
        let ponderacionMejoramiento = mejoramiento * 0.70;

        let examenFinalFinal = examenFinal;
        let leccionGeneralFinal = leccionGeneral;

        if (mejoramiento >= 0 && mejoramiento <= 10) {
            if (ponderacionMejoramiento >= ponderacionOriginal) {
                examenFinalFinal = mejoramiento;
                leccionGeneralFinal = mejoramiento;
            } else {
                alert("La nota de Mejoramiento no mejora la ponderación, se mantienen las notas originales.");
            }
        } else {
            alert("La nota de Mejoramiento ingresada no es válida. Debe estar entre 0 y 10.");
            return;
        }

        // Calcular la nota final
        const notaFinal = (
            (examenFinalFinal * 0.50) +
            (leccionGeneralFinal * 0.20) +
            (pruebaSalida * 0.10) +
            (controlLectura * 0.05) +
            (tallerGrupal * 0.05) +
            (tareas * 0.10)
        ).toFixed(2); // Redondeo al formato de dos decimales

        // Mostrar el resultado
        notaFinalSpan.textContent = notaFinal;

        if (notaFinal >= 6) {
            caritaDiv.innerHTML = '<span class="carita-feliz">😊</span>';
        } else {
            caritaDiv.innerHTML = '<span class="carita-triste">😢</span>';
        }

        resultadoDiv.style.display = 'block'; // Mostrar el resultado
    });
});
