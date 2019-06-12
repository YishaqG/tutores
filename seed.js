var User = require('./models/User');

Users=new User({username: "201406194", name : "Enrique Yishaq German Totosaus", _admin: true});

var password = "admin";
User.register(Users, password,
  function(err, user) {
    if (err) {
      console.log("Your account could  not be saved. Error: ", err)
    }else{
      console.log("Your account has been saved")
    }
  }
);
