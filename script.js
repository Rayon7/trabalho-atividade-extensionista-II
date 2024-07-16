document.addEventListener("DOMContentLoaded", function() {
    showSection('objetivo'); // Mostra a seção "Objetivo" por padrão
  });
  
  function showSection(sectionId) {
    var sections = document.querySelectorAll('.secao-conteudo');
    sections.forEach(function(section) {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  