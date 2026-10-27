document.addEventListener('DOMContentLoaded', function () {

    // Navegación por pestañas
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.getAttribute('data-tab')).classList.add('active');
        });
    });

    // 1. Formulario: Camellos (redondeado a enteros con Math.round)
    const formCamellos = document.getElementById('formCamellos');
    formCamellos.addEventListener('submit', function (e) {
        e.preventDefault();

        const original = parseFloat(document.getElementById('inputCamellos').value);
        if (isNaN(original) || original <= 0) return;

        const total = original + 1;
        const mayor = Math.round(total / 2);
        const mediano = Math.round(total / 3);
        const menor = Math.round(total / 9);
        const suma = mayor + mediano + menor;
        const sobrantes = total - suma;

        const container = document.getElementById('bodyCamellos');
        container.textContent = '';
        document.getElementById('resCamellos').classList.remove('hidden');

        const textos = [
            `Total con camello auxiliar: ${Math.round(total)}`,
            `Parte Mayor (1/2): ${mayor}`,
            `Parte Mediano (1/3): ${mediano}`,
            `Parte Menor (1/9): ${menor}`,
            `Suma total repartida: ${suma}`,
            `Sobrantes calculados: ${sobrantes}`
        ];

        textos.forEach(texto => {
            const p = document.createElement('p');
            p.textContent = texto;
            container.appendChild(p);
        });
    });

    // 2. Formulario: Panes (redondeado a enteros con Math.round)
    const formPanes = document.getElementById('formPanes');
    formPanes.addEventListener('submit', function (e) {
        e.preventDefault();

        const p1 = parseFloat(document.getElementById('panes1').value);
        const p2 = parseFloat(document.getElementById('panes2').value);
        if (isNaN(p1) || isNaN(p2)) return;

        const totalPanes = p1 + p2;
        const totalTercios = totalPanes * 3;
        const consumo = Math.round(totalTercios / 3);
        const mon1 = Math.round((p1 * 3) - consumo);
        const mon2 = Math.round((p2 * 3) - consumo);

        const container = document.getElementById('bodyPanes');
        container.textContent = '';
        document.getElementById('resPanes').classList.remove('hidden');

        const textos = [
            `Total de panes: ${Math.round(totalPanes)} (${Math.round(totalTercios)} tercios en total).`,
            `Consumo por persona: ${consumo} tercios.`,
            `Monedas proporcionales 1er Viajero: ${mon1}`,
            `Monedas proporcionales 2do Viajero: ${mon2}`
        ];

        textos.forEach(texto => {
            const p = document.createElement('p');
            p.textContent = texto;
            container.appendChild(p);
        });
    });

    // 3. Formulario: Ecuación Cuadrática (raíces redondeadas a enteros con Math.round)
    const formCuadratica = document.getElementById('formCuadratica');
    formCuadratica.addEventListener('submit', function (e) {
        e.preventDefault();

        const a = parseFloat(document.getElementById('coefA').value);
        const b = parseFloat(document.getElementById('coefB').value);
        const c = parseFloat(document.getElementById('coefC').value);

        const container = document.getElementById('bodyCuadratica');
        container.textContent = '';
        document.getElementById('resCuadratica').classList.remove('hidden');

        if (a === 0) {
            const p = document.createElement('p');
            p.textContent = "El coeficiente 'a' no puede ser 0.";
            container.appendChild(p);
            return;
        }

        const disc = (b * b) - (4 * a * c);
        const pDisc = document.createElement('p');
        pDisc.textContent = `Discriminante (Δ): ${Math.round(disc)}`;
        container.appendChild(pDisc);

        if (disc > 0) {
            const x1 = Math.round((-b + Math.sqrt(disc)) / (2 * a));
            const x2 = Math.round((-b - Math.sqrt(disc)) / (2 * a));
            const pRes = document.createElement('p');
            pRes.textContent = `Raíces reales: x₁ = ${x1}, x₂ = ${x2}`;
            container.appendChild(pRes);
        } else if (disc === 0) {
            const x = Math.round(-b / (2 * a));
            const pRes = document.createElement('p');
            pRes.textContent = `Raíz doble: x₁ = x₂ = ${x}`;
            container.appendChild(pRes);
        } else {
            const real = Math.round(-b / (2 * a));
            const imag = Math.round(Math.sqrt(-disc) / (2 * a));
            const pRes = document.createElement('p');
            pRes.textContent = `Raíces complejas: x₁ = ${real} + ${imag}i, x₂ = ${real} - ${imag}i`;
            container.appendChild(pRes);
        }
    });

    // 4. Formulario: Aproximar Pi (resultado redondeado a entero con Math.round)
    const formPi = document.getElementById('formPi');
    formPi.addEventListener('submit', function (e) {
        e.preventDefault();

        const n = parseInt(document.getElementById('selectN').value);

        let suma = 0;
        for (let i = 0; i < n; i++) {
            let denom = 2 * i + 1;
            if (i % 2 === 0) {
                suma += 1 / denom;
            } else {
                suma -= 1 / denom;
            }
        }
        let piEstimado = 4 * suma;
        let piReal = Math.PI;

        const container = document.getElementById('bodyPi');
        container.textContent = '';
        document.getElementById('resPi').classList.remove('hidden');

        const textos = [
            `Número de términos (n): ${n.toLocaleString()}`,
            `Pi estimado (Redondeado): ${Math.round(piEstimado)}`,
            `Valor real (Math.PI): ${Math.round(piReal)}`
        ];

        textos.forEach(texto => {
            const p = document.createElement('p');
            p.textContent = texto;
            container.appendChild(p);
        });
    });

});