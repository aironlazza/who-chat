const app = angular.module("chatApi",[]);

app.controller('login',($scope, $http)=>{
  
  $scope.enviarNick = function(){
    if($scope.nick.length<3){
      alert("O nick deve ter pelo menos 2 caracteres")
    }
    else{
      let req = {
        method:"POST",
        url:"https://chat-api-roan.vercel.app/entrar",
        data:{ nick: $scope.nick }
      }
      $http(req).then((res)=>{
        console.log(res)
      })
    }
  }

  $scope.enviarEnter = function(evt){
    if(evt.key=="Enter")
    {
      $scope.enviarNick();
    }
  }

    // $http.get('https://api-fake-blog.onrender.com/postagens').
    //     then((res)=> {
    //       let postsArray = res.data;
    //       for(i=0; i<postsArray.length; i++){
    //         if(postsArray[i].postDate.length<10)
    //           postsArray[i].postDate = '0' + postsArray[i].postDate;
    //       }
          
    //       $scope.posts = postsArray;
    //       $scope.rand = Math.floor(Math.random() * postsArray.length);
    //     },
    //     (erro)=>{
    //       console.log(erro)
    //     }
    //   );
});