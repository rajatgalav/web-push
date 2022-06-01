var push = require('web-push');

let vapidkeys = {
    publicKey: 'BAuiWR4xK3DjqGCPHC5qHvQU3UOHnGWPYO0adXc3NpHUX6AQICCZSae7MOQGxj8_ZWY9dGOyP3SIJl5CKOzRuQ4',
    privateKey: 'rxqxtYrqfbX6LeO4MfU2S6i7xenYKOvrsr-UHw-I6Sw'
}

push.setVapidDetails('mailto:test@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');