// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    if (start < 42) {
    return 42 - start;
    } 
    else {
        return start - 42;
    }
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(distanceFromHqInBlocks) {
    if (distanceFromHqInBlocks > 42) {
        return (distanceFromHqInBlocks - 42) * 264;
    }
    else {
        return (42 - distanceFromHqInBlocks) * 264;
    }
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, finish) {
    if (start > finish) {
        return (start - finish) * 264;
    }
    else {
        return (finish - start) * 264;
    }
}
distanceTravelledInFeet();

function calculatesFarePrice(start, finish) {
    const distance = distanceTravelledInFeet(start, finish);
    const calc = distance - 400;

    if (distance < 400) {
        return 0;
    }
    else if (distance >= 400 && distance <= 2000) {
        return calc * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
calculatesFarePrice();
