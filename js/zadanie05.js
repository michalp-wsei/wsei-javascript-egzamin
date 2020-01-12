document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    const container = document.getElementById('container');
    for(button of buttons) {
        button.addEventListener('click', function() {
            container.innerText = this.getAttribute('data-text');
        })
    }
});