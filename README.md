# ark8-frontend
frontend of party game platform using flutter
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta content="IE=Edge" http-equiv="X-UA-Compatible">
  <meta name="description" content="A new Flutter project.">
  <meta name="google-signin-client_id" content="847513414205-5nedtsld2ss56envd7ocoa4evb2ikrng.apps.googleusercontent.com">
  <!-- iOS meta tags & icons -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="frontend">
  <link rel="apple-touch-icon" href="/icons/Icon-192.png">

  <title>frontend</title>
  <link rel="manifest" href="/manifest.json">
</head>
<body>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js"></script>

  <!-- TODO: Add SDKs for Firebase products that you want to use
      https://firebase.google.com/docs/web/setup#available-libraries -->
  <script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-analytics.js"></script>

  <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDAqWHBVCQhSMXGopU-U_IAKwjO7lt-LFs",
      authDomain: "ark8-cabinet.firebaseapp.com",
      databaseURL: "https://ark8-cabinet.firebaseio.com",
      projectId: "ark8-cabinet",
      storageBucket: "ark8-cabinet.appspot.com",
      messagingSenderId: "847513414205",
      appId: "1:847513414205:web:a71a844f335483c83c5854",
      measurementId: "G-TSGQMV5B5Q"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  </script>
  <!-- This script installs service_worker.js to provide PWA functionality to
       application. For more information, see:
       https://developers.google.com/web/fundamentals/primers/service-workers -->
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/flutter_service_worker.js');
      });
    }
  </script>
  <script src="main.dart.js" type="application/javascript"></script>
</body>
</html>
