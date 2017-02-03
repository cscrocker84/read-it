app.controller("HomeCtrl", function($scope,$http,authFactory){

  $http.get( `https://who-reads.firebaseio.com/Users.json`)
        .then((data)=>{

          // console.log($scope.uid)

          $scope.userkey = _.findKey(data.data, function (key,value){return key})
          console.log($scope.userkey)
          $scope.userObj = data.data[$scope.userkey]
          // console.log($scope.userObj)
        })
        $http.get(`https://who-reads.firebaseio.com/Pictures.json`)
        .then ((data)=> {
          $scope.Pictures = data.data

          console.log($scope.Pictures)
        })
        })
