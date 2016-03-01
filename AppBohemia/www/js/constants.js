/**
 * Created by Rod on 2/27/16.
 */
angular.module('app.constants', [])
  .constant("constants", {
    key : CryptoJS.MD5("mwfc_53r1al_53rvICE_app#"+"wanderers").toString(),
    val : "wanderers",
    apiUrl : 'http://mwfc.com.uy/api/'
  });
