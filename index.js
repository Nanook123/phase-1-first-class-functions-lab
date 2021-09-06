// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = (drivers) => {
   return drivers.slice(0,2)
}



const returnLastTwoDrivers = (drivers) => {

    return drivers.slice(drivers.length -2, drivers.length)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(y){
    
   return function multiPlier(x){
        return y * x;
    }
    

}

const fareDoubler = (createFareMultiplier) => {

return createFareMultiplier * 2
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, diffDrivers){
    return diffDrivers(drivers)
}

selectDifferentDrivers(drivers, returnLastTwoDrivers)

   

