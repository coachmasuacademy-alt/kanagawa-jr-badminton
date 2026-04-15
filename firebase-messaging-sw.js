// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCAQorZttgQhUzM30-gHW18MvfcDwtTSUc",
  authDomain: "kanagawa-jr-badminton.firebaseapp.com",
  projectId: "kanagawa-jr-badminton",
  messagingSenderId: "316845745244",
  appId: "1:316845745244:web:362cb9789709cd5113f299",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192x192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});