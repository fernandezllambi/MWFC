/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('licenseCtrl', function ($scope, $state, loginFactory) {
  $scope.$on("$ionicView.beforeEnter", function (scopes, states) {
    //var socio = loginFactory.get();
    var socio = {"NroSocio":1044846,"Nombre":"Joaquin","Email":"joacoleza@hotmail.com","SegundoNombre":null,"Apellido":"Lezama","SegundoApellido":"Muñoz","Ci":"45080330","FechaNacimiento":"22/04/1993","Foto":"http://socios.mwfc.com.uy/fotos/569a65b3-694d-4ee4-a630-da14388afff1.jpg"};
    if (!socio) {
      $state.go('login');
    }else{
      var lenght = socio.Ci.length;
      debugger;
      socio.Ci = socio.Ci.substr(0,lenght-1) + "-" + socio.Ci[lenght-1];
      $scope.socio = socio;
    }
  });
});
