  
  document.addEventListener('DOMContentLoaded', function() {
    var imagens = document.querySelectorAll('.menu__botao');
  
    imagens.forEach(function(image, index) {
      var corDoBackground = getcorDoBackground(index);
      image.parentElement.classList.add(corDoBackground);
    });
  });
  
  function getcorDoBackground(index) {
    var colors = ['novidades-background', 'perfumes-background', 'maquiagens-background', 'promocoes-background'];
    return colors[index % colors.length];
  }



document.querySelectorAll('.menu__botao').forEach(button => {
  button.addEventListener('click', function() {
      const targetId = button.getAttribute('data-target');
      const menuContainer = document.getElementById(targetId);

      if (menuContainer.classList.contains('active')) {
          // Transição para fechar
          menuContainer.style.height = `${menuContainer.scrollHeight}px`;
          // Forçar reflow para garantir a transição
          menuContainer.offsetHeight;
          menuContainer.style.height = '0';

          // Remover a classe ativa após a transição
          menuContainer.addEventListener('transitionend', function() {
              menuContainer.classList.remove('active');
          }, { once: true });
      } else {
          // Adicionar a classe ativa
          menuContainer.classList.add('active');
          // Definir a altura para auto temporariamente para obter a altura real
          menuContainer.style.height = 'auto';
          const height = menuContainer.scrollHeight;
          // Resetar para permitir a transição
          menuContainer.style.height = '0';
          // Forçar reflow
          menuContainer.offsetHeight;
          // Definir a altura para a altura real calculada
          menuContainer.style.height = `${height}px`;
      }
  });
});
