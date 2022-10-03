function getName() {
    const userName = prompt('What is your name?');
    sayHello(userName);
}
function sayHello(name) {
    alert('Hello ' + name + '!');
    console.log('Alert sent!'); // Sends an alert in the console on the web browser(F12)
}