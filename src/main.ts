import { Clock } from './clock';
import { Hand } from './hand';

// Get the main canvas element
const $main = document.querySelector('.canvas__container');

// Create and configure the clock face
let clock = new Clock();

clock.configure(config => {
    config.setXPos(100);
    config.setYPos(100);
    config.setRadius(80);
    config.setColor('tomato');
});

$main.appendChild(clock.getElement());

// Create and configure the seconds hand
let secondsHand = new Hand();

secondsHand.configure(config => {
    config.setXCenter(100);
    config.setYCenter(100);
    config.setXOuter(100);
    config.setYOuter(25);
    config.setRadius(clock.getRadius() - 2);
    config.setColor(clock.getColor());
    config.setSegments(60);
    config.setOffset(-15);
});

$main.appendChild(secondsHand.getElement());

// Create and configure the minutes hand
let minutesHand = new Hand();

minutesHand.configure(config => {
    config.setXCenter(100);
    config.setYCenter(100);
    config.setXOuter(100);
    config.setYOuter(30);
    config.setRadius(clock.getRadius() - 10);
    config.setColor(clock.getColor());
    config.setSegments(60);
    config.setOffset(-15);
    config.setStrokeWidth(3);
});

$main.appendChild(minutesHand.getElement());

// Create and configure the hours hand
let hoursHand = new Hand();

hoursHand.configure(config => {
    config.setXCenter(100);
    config.setYCenter(100);
    config.setXOuter(100);
    config.setYOuter(60);
    config.setRadius(clock.getRadius() - 30);
    config.setColor(clock.getColor());
    config.setSegments(12);
    config.setOffset(-15);
    config.setStrokeWidth(3);
});

$main.appendChild(hoursHand.getElement());

// Animate the parts
function tick() {
    let now = new Date();
    secondsHand.setSegmentStep(now.getSeconds());
    minutesHand.setSegmentStep(now.getMinutes());
    hoursHand.setSegmentStep(now.getHours());
}

tick();
setInterval(tick, 1000);