function getParams () {
  let params = decodeURI(window.location.search).substring(1)
  if (params.length === 0) {
    return ''
  }
  params = params.replace(/&/g, '\",\"')
  params = params.replace(/=/g, '\":\"')
  params = '{"' + params + '"}'
  params = JSON.parse(params)
  params = clearParams(params);
  return params
}
function clearParams (params) {
  for (var param in params) {
    if (params[param] === '') {
      delete params[param]
    }
  }
  return params
}
function getDay (day) {
  var today = new Date();
  var targetday_milliseconds = today.getTime() - 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds); //注意，这行是关键代码
  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate;
}
function getAllDay (time) {
  var today = new Date();
  today.setTime(time); //注意，这行是关键代码
  var tYear = today.getFullYear()
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  var tHour =  today.getHours()
  var tminutes = today.getMinutes()
  var tseconds = today.getSeconds()
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate+ ' '+ tHour+":"+tminutes+":"+tseconds;
}
function doHandleMonth (month) {
  var m = month;
  if (month.toString().length == 1) {
    m = "0" + month;
  }
  return m;
}
function jsonToUrl(json){
  json=JSON.stringify(json)
  json = json.replace(/,/g,'&')
  json = json.replace(/:/g,'=')
  json = json.replace(/"/g,'')
  json = json.slice(1)
  json = json.slice(0,-1)
  return json
}
function getTimeStamp(day){
  var today = new Date();
  var targetday_milliseconds = today.getTime() - 1000 * 60 * 60 * 24 * day
  return targetday_milliseconds
}
function timeStampToDay(timestamp){
  return Math.floor((new Date().getTime() - timestamp)/(1000 * 60 * 60 * 24) +1)
}
function changeDate(time){
  var d = new Date(time);  
  var  resDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}