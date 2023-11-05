/**
 * CLXD.
 * changes the greeting of the 'greeting-section' <div> depending on the time
 * <div 'greeting-section>
 */
const greetingMessage = document.getElementById('greeting');

let hour = new Date().getHours();

let message;
if (hour >= 6 && hour < 12) {
    message = 'Good morning :D';
} else if (hour >= 12 && hour < 18) {
    message = 'Good afternoon :D';
} else {
    message = 'Good evening :D';
}

greetingMessage.textContent = message;