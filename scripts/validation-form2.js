const email = document.querySelector('#email');
const btn = document.querySelector('.btn');
const errorEmail = document.querySelector('#error-email');
const textArea = document.querySelector('textArea');
const errorTextarea = document.querySelector('#error-textarea');
const submitSuccess = document.querySelector('#submit-success');
const form = document.querySelector('form');

const defaultEmail = /^[a-z0-9.]{1,32}@[a-z0-9.]{1,16}\.[\w]*(\.[\w]*)?/gi;
const userRegex = /(^[a-z0-9.]{1,32})[^\@]?/gi;

btn.addEventListener('click', e => {
  const emailValue = email.value;
  const textAreaValue = textArea.value;
  e.preventDefault(); //Cancela o evento se for cancelável, sem parar a propagação do mesmo.
  if (!defaultEmail.test(emailValue)) {
    errorEmail.textContent = 'Erro no envio: Endereço de mail inválido. ';
    errorEmail.classList = 'error';
    setTimeout(() => {
      errorEmail.textContent = '';
    }, 3000);
    return;
  }
  if (textAreaValue === '') {
    errorTextarea.textContent = 'Erro no envio: Insira uma mensagem. ';
    errorTextarea.classList = 'error';
    setTimeout(() => {
      errorTextarea.textContent = '';
    }, 3000);
    return;
  } else {
    form.reset(); // limpa o formulario
    let user = emailValue.match(userRegex);
    submitSuccess.textContent = `Obrigado pelo contato, ${user}! `;
    submitSuccess.classList = 'success';
    setTimeout(() => {
      submitSuccess.textContent = '';
    }, 6000);
    return;
  }
});
