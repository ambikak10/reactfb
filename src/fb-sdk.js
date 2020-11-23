// // Injects the Facebook SDK into the page
//  function injectFbSDKScript () {
//   (function (d, s, id) {
//     var js,
//       fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//       return;
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   })(document, "script", "facebook-jssdk");
// };

//  function fbsdk() {
//  var isInitialized = false;
//   window.fbAsyncInit = function () {
//     window.FB.init({
//       appId: "379462766637679",
//       cookie: true,
//       xfbml: true,
//       version: "v8.0",
//     });

//     window.FB.AppEvents.logPageView();
//     isInitialized = true;
//     console.log(isInitialized);
//     return isInitialized;
//   };

//   injectFbSDKScript();
//   return isInitialized;

// };

// export default fbsdk;
