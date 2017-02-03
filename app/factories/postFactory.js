app.factory('postFactory', ($q, authFactory, $http) => {

  return {
    newPost(link, title) {
      console.log('NEW POST')
      return authFactory.getUser().then(user => {
        console.log("addingpost")
          // $scope.title, $scope.artist, $scope.album, $scope.length
        return $http.post(`https://who-reads.firebaseio.com/posts.json`, {
          uid: user.uid,
          title: title,
          url: link,
        })
      })
    },
    handleFiles(userId) {
      let storageRef = firebase.storage().ref();
      let File = $('#fileUpload').prop('files')[0]
        // console.log("id?", userId)
        // console.log('file',File)
      storageRef.child(File.name + userId).put(File)
        .then(function(snapshot) {
          $http.patch(`https://who-reads.firebaseio.com/posts/${userId}.json`, {
            image: snapshot.downloadURL
          })
        })
      }
    }
  })
