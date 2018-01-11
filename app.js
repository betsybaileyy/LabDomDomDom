document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let container = document.createElement('div');
    button.innerText = 'Add Square';
    document.body.appendChild(button);
    document.body.appendChild(container);
    let id = 1;


    button.addEventListener('click', function () {
        let div = document.createElement('div');
        //<div></div>
        div.className = "square";
        div.id = id;
        id = id + 1;
        div.addEventListener('mouseenter', function () {
            div.innerText = div.id
        });
        div.addEventListener('mouseleave', function () {
            div.innerText = '';
        });
        function random_bg_color() {
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            return bgColor;
            console.log(bgColor);


        }
        div.addEventListener('click', function () {

            div.style.background = random_bg_color();
        });

        div.addEventListener('dblclick', function () {
            let sibling;
            if (div.id % 2 == 0) {
                sibling = div.nextElementSibling;
                
                
                if (sibling === null) {
                    alert("No square before");
                }
                else {
                    sibling.remove()
                }
            }
            else {
                sibling = div.previousElementSibling;
                console.log(sibling);
                
                if (sibling === null) {
                    alert("No square after");
                }
                else {
                    sibling.remove()
                }
            }
            // } else {
            //     console.log('odd');
            //alert('the world is an odd place!');
            //console.log('heyimindblclick');
        });

        //<div class="square"></div>
        container.appendChild(div);

    });

});

