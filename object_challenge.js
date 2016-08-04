//story 1 create a function that creates a car object
function createCar(make, model, year, color) {
  return {make: make,
    model: model,
    year: year,
    color: color,
    getCar: function() {
      return this.make + " " + this.model + " " + this.year + " " + this.color;
    }
  }
}

var car1 = createCar('Nissan', 'Armada', '2007', 'white');

-----------------------------------------------------

//story 2 - add speed closures - getSpeed, accelerate and brake
function createCar(make, model, year, color) {
  var speed = 0;
  return {make: make,
    model: model,
    year: year,
    color: color,
    getCar: function() {
      return this.make + " " + this.model + " " + this.year + " " + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      speed = speed + 10;
    },
    brake: function() {
      speed = speed - 7;
    }
  }
}

-----------------------------------------------------

//story 3 - creating car object using while loops

function createCar(make, model, year, color) {
  var speed = 0;
  return {make: make,
    model: model,
    year: year,
    color: color,
    getCar: function() {
      return this.make + " " + this.model + " " + this.year + " " + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      while (speed<50) {
      speed = speed + 10;
    }
  },
    brake: function() {
      while (speed>0) {
      speed = speed - 7;
      if (speed<0) {
        speed = 0;
      }
      }
    }
  }
}

---------------------------------------------------------

//story 4 limit the max speed to 85
function createCar(make, model, year, color) {
  var speed = 0;
  return {make: make,
    model: model,
    year: year,
    color: color,
    getCar: function() {
      return this.make + " " + this.model + " " + this.year + " " + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      while (speed<=80) {
      speed = speed + 10;
      if (speed > 80) {
        speed = 85;
        return alert('slow down, max speed is 85');
      }
      console.log(speed);
    }

  },
    brake: function() {
      while (speed>0) {
      speed = speed - 7;
      if (speed<0) {
        speed = 0;
      }
      }
    }
  }
}

--------------------------------------------------------

//story 5 make the breaks change speed by a random amount with a maximum of 1/2 the current speed. log how many iterations it takes to stop the car.

function createCar(make, model, year, color) {
  var speed = 0;
  return {make: make,
    model: model,
    year: year,
    color: color,
    getCar: function() {
      return this.make + " " + this.model + " " + this.year + " " + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      while (speed<=80) {
      speed = speed + 10;
      if (speed > 80) {
        speed = 85;
        return alert('slow down, max speed is 85');
      }
      console.log(speed);
    }

  },
    brake: function() {
      while (speed>0) {
      speed = speed - Math.floor((Math.random() * (speed/2)) + 1);
      console.log(speed);
      if (speed<0) {
        speed = 0;
      }
      }
    }
  }
}

----------------------------------------------------------------------------

//end game //
//separate out the accelerate and brake functionality from the car object
function createCar(make, model, year, color) {
  var speed = 60;
  return {make: make,
    model: model,
    year: year,
    color: color,
    getCar: function() {
      return this.make + " " + this.model + " " + this.year + " " + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      speed = speed + 10;
    },
    accelerate2: function() {
      speed = 85;
      return alert('slow down, max speed is 85');
    },
    brake: function() {
      speed = speed - 7;
    },
    brake2: function() {
      speed = 1;
    }
  }
}

function speedUp(car) {
  if (car.getSpeed() > 80) {
    car.accelerate2();
    }
  while (car.getSpeed()<=80) {
  car.accelerate();
  break;
  console.log(car.getSpeed());
  }
}

function slowDown(car) {
  if (car.getSpeed()<0) {
  car.brake2();
    }
  while (car.getSpeed()>0) {
    car.brake();
    break;
  }
}
