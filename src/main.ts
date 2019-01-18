import { Bolt } from './bolt';
import { ClockFace } from './clockFace';
import { Hand } from './hand';
import { NumberSet } from './numberSet';

// Styling
import './../resources/sass/styles.scss';

// Get the main canvas element
const $main = document.querySelector('.canvas__container');

// Create and configure the clock face
let clock = new ClockFace();

clock.configure(config => {
    config.setXPos(100);
    config.setYPos(100);
    config.setRadius(80);
    config.setColor('royalblue');
});

$main.appendChild(clock.getElement());

// Create and configure the number set
let numberSet = new NumberSet();

numberSet.configure(config => {
    numberSet.setXCenter(clock.getXPos());
    numberSet.setYCenter(clock.getYPos());
    numberSet.setRadius(clock.getRadius() - 10);
    numberSet.setColor(clock.getColor());
    numberSet.setSegments(12);
    numberSet.setOffset(-2);
    numberSet.setFontSize(10);
    numberSet.setFontFamily('Titillium Web');
});

numberSet.drawNumbers();

$main.appendChild(numberSet.getElement());

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

// Create and configure the bolt
let bolt = new Bolt();

bolt.configure(config => {
    config.setXPos(100);
    config.setYPos(100);
    config.setRadius(10);
    config.setColor(clock.getColor());
});

$main.appendChild(bolt.getElement());

// Animate the parts
function tick() {
    let now = new Date();
    secondsHand.setSegmentStep(now.getSeconds());
    minutesHand.setSegmentStep(now.getMinutes());
    hoursHand.setSegmentStep(now.getHours());
}

tick();
setInterval(tick, 1000);