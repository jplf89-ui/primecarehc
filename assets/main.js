document.getElementById('ano').textContent = new Date().getFullYear();

// Mobile menu
const navlinks = document.getElementById('navlinks');
const menuToggle = document.getElementById('menuToggle');
function toggleMenu(force){
const open = typeof force === 'boolean' ? force : !navlinks.classList.contains('open');
navlinks.classList.toggle('open', open);
menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}
navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>toggleMenu(false)));
document.addEventListener('click', (e)=>{
if(navlinks.classList.contains('open') && !navlinks.contains(e.target) && !menuToggle.contains(e.target)){
toggleMenu(false);
}
});
window.addEventListener('resize', ()=>{ if(window.innerWidth > 640) toggleMenu(false); });

// Scroll reveal
const io = new IntersectionObserver((entries)=>{
entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Contact form -> WhatsApp (número temporário: 41 99152-9920)
function enviarWhats(ev){
ev.preventDefault();
const nome=document.getElementById('nome').value.trim();
const fone=document.getElementById('fone').value.trim();
const serv=document.getElementById('serv').value;
const msg=document.getElementById('msg').value.trim();
const texto=`Olá, Prime Care! Sou ${nome} (${fone}).%0AInteresse: ${serv}.%0A${msg?('Situação: '+msg):''}`;
window.open(`https://wa.me/5541991529920?text=${encodeURIComponent(texto).replace(/%2520/g,'%20')}`,'_blank');
}
