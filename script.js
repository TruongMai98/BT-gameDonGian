/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
        console.log("right");
    }

    this.moveLeft = function () {
        this.left -= 20;
        console.log("left");
    }

    this.moveBottom = function () {
        this.top += 20;
        console.log("bottom");
    }

    this.moveTop = function () {
        this.top -= 20;
        // console.log('ok3: ' + this.top);
    }
}

let hero = new Hero('chichi.png', 20, 300, 350);

function start() {
    if(hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }

    if(hero.left > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveBottom();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();
