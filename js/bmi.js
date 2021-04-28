const calculateForm = document.getElementById('calculateForm');
		


function bmi(e) {
  e.preventDefault();
    // Pega os valores inseridos nos inputs e substitui vírgula por ponto
	const name = document.getElementById('name').value;
	const height = document.getElementById('height').value;
	const weight = document.getElementById('weight').value;
	const result = document.getElementById('result');
	const errorInput = document.getElementById('errorInput');

	const normal = document.getElementById('normal');			// <tr> da Tabela
	const sobrepeso = document.getElementById('sobrepeso');		// <tr> da Tabela
	const obeso1 = document.getElementById('obeso1');			// <tr> da Tabela
	const obeso2 = document.getElementById('obeso2');			// <tr> da Tabela
	const obeso3 = document.getElementById('obeso3');			// <tr> da Tabela

	// Nome
    if (name == '')  {
		errorInput.textContent = 'Complete o campo Nome'
		errorInput.style.display = "block";
		result.textContent = " "; // Reseta o resultado
		document.getElementById('table-calc').style.display = "none"; // Reseta a tabela
	} 
	// Altura
	else if (height == '')  {
		errorInput.textContent = 'Complete o campo Altura'
		errorInput.style.display = "block";
		result.textContent = " "; // Reseta o resultado
		document.getElementById('table-calc').style.display = "none"; // Reseta a tabela
	} 
	// Peso
	else if (weight == '')  {
		errorInput.textContent = 'Complete o campo Peso'
		errorInput.style.display = "block";
		result.textContent = " "; // Reseta o resultado
		document.getElementById('table-calc').style.display = "none"; // Reseta a tabela
	}
	
	else {
		    // Calcula o IMC
		    const valueBMI = (weight / (height * height)).toFixed(2);
			result.textContent = name + ", seu IMC é : " + valueBMI ;
			
			errorInput.style.display = "none";
			document.getElementById('table-calc').style.display = "inline-table";  // Mostra a tabela
			document.getElementById('calculate').style.display = "none"; // Retira o Botão de "Calcular"
			document.getElementById('resetButton').style.display = "block"; // Colocar o botão de Reload
			

			// Mostra a classificação
			if (valueBMI < 18.5) {
				document.getElementById('abaixo').classList.add('activeOne');
				document.getElementById('message').textContent = "Classificação: Abaixo do Peso!";
			} 
			if (valueBMI >= 18.5 && valueBMI < 24.9) {
				document.getElementById('normal').classList.add('activeTwo');
				document.getElementById('message').textContent = "Classificação: Peso Normal!";
			}
			if (valueBMI >= 25 && valueBMI < 29.9) {
				document.getElementById('sobrepeso').classList.add('activeThree');
				document.getElementById('message').textContent = "Classificação: Sobrepeso!";
			}
			if (valueBMI >= 30 && valueBMI < 34.9) {
				document.getElementById('obeso1').classList.add('activeFour');
				document.getElementById('message').textContent = "Classificação: Obeso I!";
			}
			if (valueBMI >= 35 && valueBMI < 39.9) {
				document.getElementById('obeso2').classList.add('activeFive');
				document.getElementById('message').textContent = "Classificação: Obeso II!";
			}
			else if(valueBMI >= 40) {
				document.getElementById('obeso3').classList.add('activeSix');
				document.getElementById('message').textContent = "Classificação: Obeso III!";
			}
		}
}

calculateForm.addEventListener('submit', bmi);

function recarregarPagina() {
    sessionStorage.setItem("recarregou", "true");
    window.location.reload(); // atualiza a página
}
