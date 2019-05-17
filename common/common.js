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
function setJsonToNull (params) {
  for (var param in params) {
    params[param] = ''
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
  var tHour = today.getHours()
  var tminutes = today.getMinutes()
  var tseconds = today.getSeconds()
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate + ' ' + tHour + ":" + tminutes + ":" + tseconds;
}
function doHandleMonth (month) {
  var m = month;
  if (month.toString().length == 1) {
    m = "0" + month;
  }
  return m;
}
function jsonToUrl (json) {
  json = JSON.stringify(json)
  json = json.replace(/,/g, '&')
  json = json.replace(/:/g, '=')
  json = json.replace(/"/g, '')
  json = json.slice(1)
  json = json.slice(0, -1)
  return json
}
function getTimeStamp (day) {
  var today = new Date();
  var targetday_milliseconds = today.getTime() - 1000 * 60 * 60 * 24 * day
  return targetday_milliseconds
}
function timeStampToDay (timestamp) {
  return Math.floor((new Date().getTime() - timestamp) / (1000 * 60 * 60 * 24) + 1)
}
function changeDate (time) {
  var d = new Date(time);
  var resDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}
function checkNature (val) {
  if (val === "全职") {
    return 0;
  } else if (val === "兼职") {
    return 1;
  } else if (val === "实习") {
    return 2;
  }
}
function checkExperience (val) {
  switch (val) {
    case '不限':
      return 0;
      break;
    case '应届毕业生':
      return 1;
      break;
    case '1-3年':
      return 2;
      break;
    case '3-5年':
      return 3;
      break;
    case '5-10年':
      return 4;
      break;
    case '10年以上':
      return 5;
      break;
    default:
      break;
  }
}
function checkEdu (val) {
  switch (val) {
    case '不限':
      return 0;
      break;
    case '大专':
      return 1;
      break;
    case '本科':
      return 2;
      break;
    case '硕士':
      return 3;
      break;
    case '博士':
      return 4;
      break;
    default:
      break;
  }
}
