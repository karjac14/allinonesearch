
var CDSHOP_OFF = "../api/cdshop/cd_catalog.xml";

//get CDshop by Ajax method
function cdShopGet (){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function (){
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      // TODO: do some code here
      console.log(xmlHttp);
    }
  };

  xmlHttp.open("GET", CDSHOP_OFF, true);
  xmlHttp.send();
};

cdShopGet();
