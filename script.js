// initial fade-in
  requestAnimationFrame(()=> document.body.style.opacity = 1);

  // smooth scroll with stronger upward offset
  function scrollToIdWithOffset(id){
    const el = document.querySelector(id);
    if(!el) return;

    const headerHeight = document.querySelector('.header')?.offsetHeight || 86;

    // Scroll lebih ke atas → -95px (bisa diubah)
    const top = el.offsetTop - headerHeight - 95;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }

  // small press animation
  document.querySelectorAll('.btn, .btn-ghost, .card button[type="submit"]').forEach(btn=>{
    btn.addEventListener('mousedown', ()=> btn.style.transform = 'scale(.98)');
    btn.addEventListener('mouseup', ()=> btn.style.transform = '');
    btn.addEventListener('mouseleave', ()=> btn.style.transform = '');
  });


      // MOBILE BURGER MENU
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      nav.classList.toggle("open");
    });

    // Auto-close after clicking a link
    document.querySelectorAll("#mainNav a").forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("open");
        nav.classList.remove("open");
      });
    });


    // Reveal observer
    const revealObserver = new IntersectionObserver((entries)=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting) ent.target.classList.add('visible');
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // contact form demo
    function onContactSubmit(){
      const btn = document.querySelector('#contactForm button');
      const orig = btn.innerText;
      btn.disabled = true;
      btn.innerText = 'Sending...';
      setTimeout(()=>{
        alert('Message sent — demo only.');
        btn.disabled = false;
        btn.innerText = orig;
        document.getElementById('contactForm').reset();
      }, 900);
    }

    document.addEventListener('DOMContentLoaded', ()=>{
      const img = document.querySelector('.hero-card img');
      if(img && !img.complete){
        img.addEventListener('load', ()=> img.style.opacity = '1');
      }
    });