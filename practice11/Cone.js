function Cone(radius, height) {
    console.log(`volume = ${((radius*radius*height*Math.PI)/3).toFixed(4)}`);
    console.log(`area = ${(Math.PI*radius*(radius + Math.sqrt(radius*radius + height*height))).toFixed(4)}`);
}
Cone(3, 5)
