function adicionar() {
  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let numTelefone = document.getElementById("numTelefone").value;

  let data = {
    "nome": nome,
    "cpf": cpf,
    "numTelefone": numTelefone
  };

  axios.post('https://localhost:7110/Api/Aluno/Adicionar', data)
    .then(response => {
      alert("Aluno Cadastrado com Sucesso!!");
      console.log(response.data);
    })
    .catch(error => {
      alert("Aluno Não foi Cadastrado!!");
      console.log(error);
    });
}

  
  
  
  
  
  
  








/* 
function adicionar(){
    
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let numTelefone = document.getElementById("numTelefone").value

    enviar(nome, cpf, numTelefone)
}

function enviar(nome, cpf, numTelefone){
    let data = {
        "nome": nome,
        "cpf": cpf,
        "numTelefone": numTelefone
    }
    
    fetch('https://localhost:7110/Api/Aluno/Adicionar',{
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(data)
    })
    .then(data => {return data.json();})
    .then((result) => {
        alert("Aluno Cadastrado com Sucesso!!")
    })
    .catch((error) => {
        alert("Aluno Não foi Cadastrado!!")
        console.error(error);
    })
   
}   
*/