var wsUri = "ws://localhost:8080/";
function log(msg) {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {doSend(msg)};
  websocket.onclose = function(evt) {onClose(evt)};
  websocket.onmessage = function(evt) {onMessage(evt)};
  websocket.onerror = function(evt) {onError(evt)};
}
function onMessage(evt) { console.log(evt.data); }
function onClose(evt) { console.log(evt.data); }
function onError(evt) { console.log(evt.data); }
function doSend(message) { websocket.send(message); }