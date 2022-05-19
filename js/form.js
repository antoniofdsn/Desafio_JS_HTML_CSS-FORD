//class contato
var formData = {};
class contato {
  constructor(nome, sobrenome, email, cpf, telefone, contato, terms, news) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._email = email;
    this._cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
    this.terms = terms;
    this.news = news;
  }
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value,
    form.elements.namedItem("terms").value,
    form.elements.namedItem("news").value
  );
  formData = JSON.stringify(data);
  localStorage.setItem("Dados-usuario", formData);
}

function Enviar() {
  var nome = document.getElementById("nomeid");
  if (nome.value != "" && formData) {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
  }
}
