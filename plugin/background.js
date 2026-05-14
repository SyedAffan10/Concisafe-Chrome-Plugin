// // background.js

// // Example message to be sent to the content script
// const messageToContentScript = {
//     type: 'messageType', // Type of the message (you can customize this)
//     data: 'Hello from the background script!', // Data to be sent
//   };
  
// //   chrome.tabs.onActivated.addListener(
// //     callback: function,
// //   )
//   // Get the currently active tab
//   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     console.log(tabs[0].id)
//     // Send the message to the content script of the active tab
//     chrome.tabs.sendMessage(tabs[0].id, {type: "hello" }, response => {
//             console.log(response)
//     }); 
//   });
  