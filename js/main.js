// Sticky menu background opacity 
window.addEventListener('scroll', function(){
  if (window.scrollY > 200){
    document.querySelector('#navbar').style.opacity= 0.9;
  } else(
   document.querySelector('#navbar').style.opacity= 1
  );
});