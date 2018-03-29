var user = {
  name: 'Andrew',
  sayHi: () => { //not binding user; args of global
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () { //binding user; args OK
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt1: function () { // same as above
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
}


var userEnc = {
  name: 'Andrew',
  sayHiEnc: function() {//this is global again
    return function(){
        console.log(arguments);//args OK
        console.log(this);
        console.log(`Hi. I'm ${this.name}`);
    }
  },
  sayHiEnc1: function() {//this is user
    return function(){
        console.log(arguments); // args OK
        console.log(this);
        console.log(`Hi. I'm ${this.name}`);
    }.bind(this)
  },
  sayHiEnc2: function() {//this is user again
    return () => {
        console.log(arguments);//args NOT
        console.log(this);
        console.log(`Hi. I'm ${this.name}`);
    }
  }
};

//user.sayHiAlt(1, 2, 3);
//userEnc.sayHiEnc1()(1,2,3);
