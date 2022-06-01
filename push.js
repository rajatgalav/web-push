var push = require('web-push');

let vapidkeys = {
    publicKey: 'BAuiWR4xK3DjqGCPHC5qHvQU3UOHnGWPYO0adXc3NpHUX6AQICCZSae7MOQGxj8_ZWY9dGOyP3SIJl5CKOzRuQ4',
    privateKey: 'rxqxtYrqfbX6LeO4MfU2S6i7xenYKOvrsr-UHw-I6Sw'
}

push.setVapidDetails('mailto:test@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/ceuM5Gyg4Y0:APA91bE-C_XDzCF7k_FftEIUsnZTCUMVY-kz1Me2Hom6lFmEeX2pp3e9sofRnpxReQs4ARp1pNoPKHMAEa1oOhGnC81prv1WpaxZ5kGnFeKMgWRRPAygaIt_cLwyrlVbo_wKFxRUDf1l","expirationTime":null,"keys":{"p256dh":"BM1bsvQCG4aGTFFkYRSnkXhAp04J9y6Vdt2dNmQMas-UE1-l8Svuoz7y48QlKbzNc7Kt1WnpnoL17R3XJ-J46qQ","auth":"BFSoURA9EUHmC8beq2jvUA"}}

push.sendNotification(sub, 'test message');