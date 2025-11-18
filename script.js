// emails permitidos — apenas esses dois serão aceitos
const ALLOWED_EMAILS = [
  'rosana@admin.com',
  'robertson@aluno.com'
];

// --- navegação entre painéis ---
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const panel = btn.dataset.panel;
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    const target = document.getElementById(panel);
    if(target) target.classList.add('active');
  });
});

// --- login ---
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const userNameEl = document.getElementById('userName');
const userEmailEl = document.getElementById('userEmail');

loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  // validação: apenas emails permitidos
  if(!ALLOWED_EMAILS.includes(email)){
    loginMessage.textContent = 'Email não autorizado.';
    return;
  }

  // senha: exigir não-vazia (você pode ajustar regras aqui)
  if(!password){
    loginMessage.textContent = 'Informe a senha.';
    return;
  }

  // login bem-sucedido (simulação)
  loginMessage.style.color = '#1a5f1a';
  loginMessage.textContent = 'Login realizado com sucesso!';

  // preencher perfil e ir para 'Meu Perfil'
  const displayName = email.split('@')[0].replace('.', ' ');
  userNameEl.textContent = displayName.charAt(0).toUpperCase() + displayName.slice(1);
  userEmailEl.textContent = email;

  // navega para painel Meu Perfil
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const perfilBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b=>b.dataset.panel==='meuPerfil');
  if(perfilBtn) perfilBtn.classList.add('active');
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('meuPerfil').classList.add('active');
});

// opcional: permitir login com Enter no campo
