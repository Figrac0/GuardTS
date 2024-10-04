function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
    } else if (isNumber(msg)) {
        console.log(msg.toFixed());
    } else {
        console.log(msg);
    }
}

printMsg(4.321321321);

// function isNumber(n: string[] | number | boolean): n is number{
//     return typeof n === "number";
// }

function isNumber(n: unknown): n is number {
    return typeof n === "number";
}

// interface Car {
//     engine: string;
//     wheels: number;
// }
interface Car {
    name: "car";
    engine: string;
    wheels: {
        number: number;
        type: string;
    };
}

interface Ship {
    name: "ship";
    engine: string;
    sail: string;
}

interface Airplane {
    name: "airplane";
    engine: string;
    wings: string;
}

interface SuperAirplane {
    name: "smth";
    engine: string;
    wings: string;
}

// interface ComplexVehicle {    //Объединение интерфейсов 
//     name: "car" | "ship" | "airplane" | "smth";
//     engine: string;
//     wheels?: {
//         number: number;
//         type: string;
//     };
//     sail?: string;
//     wings?: string;
// }

type Vehicle = Car | Ship | Airplane | SuperAirplane;

function isCar(car: Vehicle): car is Car {
    // return "wheels" in car;
    return (car as Car).wheels.number !== undefined;
}

function isShip(ship: Vehicle): ship is Ship {
    // return (ship as Ship).sail !== undefined;
    return "sail" in ship;
}

function repairVehicle(vehicle: Vehicle) { //(vehicle:ComplexVehicle)
    // if (isCar(vehicle)) {
    //     vehicle.wheels;
    //     vehicle.engine;
    // } else if (isShip(vehicle)) {
    //     vehicle.sail;
    //     vehicle.engine;
    // } else {
    //     vehicle.wings;
    // }

    switch (vehicle.name) {
        case "car":
            console.log(vehicle.wheels);
            break;
        case "ship":
            console.log(vehicle.sail);
            break;
        case "airplane":
            console.log(vehicle.wings);
            break;
        case "smth":
            console.log(vehicle.wings);
            break;
        default:
            // const smth: never = vehicle; ////Проверка на соответствие всех интерфейсов
            console.log("Ouups!");
    }
}
