// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow { // TODO: Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // currentlyTowing: Vehicle | null;
  // constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
    // currentlyTowing: Vehicle | null,
  ) {
    super(); // calls the constructor of the parent class, Vehicle
    // init properties of the truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // this.wheels = wheels;
    // this.currentlyTowing = null;
    
    // check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  }
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void { // former boolean
    if (!this.started) {
      console.log('Please start the truck first');
      return;
    }
    if (vehicle.weight > this.towingCapacity) { // vehicle wt is greater than truck's towing cap
      console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed`);
      return;
    }

    console.log(`Towing ${vehicle.make} ${vehicle.model}`);
    return;
  }

  // TODO: Override the printDetails method from the Vehicle class parent
  override printDetails(): void {
    super.printDetails();   // super calls printDetails method from Vehicle class 

    // TODO: The method should log the details of the Truck
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    // console.log(`Currently Towing: ${this.currentlyTowing ? 'Yes' : 'No'}`)

    console.log(
      `Wheels1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheels2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheels3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheels4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  };
};

// Export the Truck class as the default export
export default Truck;
