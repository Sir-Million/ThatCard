document.getElementById('myButton').addEventListener('click', function() {
    // Alternar la clase 'clicked' en el elemento clickeado
    this.classList.toggle('clicked');
    
    // Obtener el elemento con el ID 'other'
    var otherElement = document.getElementById('other');
    
    // Alternar la clase 'new-class' en el elemento 'other'
    otherElement.classList.toggle('other');
});

document.getElementById('exec').addEventListener('click', function() {
    // Obtener el elemento con el ID 'other'
    var otherElement = document.getElementById('carder');
    
    // Alternar la clase 'new-class' en el elemento 'other'
    otherElement.classList.toggle('istime');
});

// Obtiene todos los elementos con la clase 'post-box'
var postBoxes = document.querySelectorAll('.post-box');

// Itera sobre cada elemento y agrega el event listener
postBoxes.forEach(function(postBox) {
    postBox.addEventListener('click', function() {
        // Verifica si el elemento clickeado ya está activo
        var isActive = this.classList.contains('active');

        // Si ya está activo, quita la clase 'active'
        if (isActive) {
            this.classList.remove('active');
        } else {
            // Desactiva el elemento activo actual
            var activeElement = document.querySelector('.post-box.active');
            if (activeElement) {
                activeElement.classList.remove('active');
            }

            // Activa el elemento clickeado
            this.classList.add('active');
        }
    });
});
