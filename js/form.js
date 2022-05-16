//class contato

class contato {
  constructor(nome, sobrenome, email, cpf, telefone, contato, terms, news) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
    this.terms = terms;
    this.contato = contato;
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
}

function Enviar() {
  console.log(formData);
  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
  }
}
