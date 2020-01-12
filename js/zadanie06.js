document.addEventListener('DOMContentLoaded', function(){
    const btn1 = document.getElementById('button-1');
    const btn2 = document.getElementById('button-2');
    const btn3 = document.getElementById('button-3');
    const list = document.getElementById('shopping-list');

    btn1.addEventListener('click', function() {
        let li = document.createElement('li');
        li.innerText = 'chleb';
        list.appendChild(li);
    });

    btn2.addEventListener('click', function(){
        let childrens = list.children;
        if (childrens.length) {
            list.removeChild(childrens[childrens.length - 1]);
        }
    })

    btn3.addEventListener('click', function() {
        let childrens = list.children;
        if (childrens.length >= 2) {
            let li = document.createElement('li');
            li.innerText = childrens[1].innerText;
            list.appendChild(li);
        }
    });
});