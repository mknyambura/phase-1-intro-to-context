// Your code here
const allEmployeeRecords = []
function createEmployeeRecord(stringOne, stringTwo, stringThree, number){
    const employeeRecord = {
        firstName:stringOne,
        familyName: stringTwo,
        title: stringThree,
        payPerHour: number, 
        timeInEvents: [],
        timeOutEvents: []
    }
    allEmployeeRecords.push(employeeRecord)
    return employeeRecord
}

function createEmployeeRecords(arrays){
    const arrayOfObjects =[]
    arrays.forEach(array=> {
        const newObject = createEmployeeRecord(array)
        // console.log(newObject)
        arrayOfObjects.push(newObject)
    })
    return arrayOfObjects
}

function createTimeInEvent(employeeObject, dateStamp){
    const hour = dateStamp.split('')[1]
    const date = dateStamp.split('')[0]
    const timeInObject = {
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    }
    const timeInEvents = employeeObject.timeInEvents
    timeInEvents.push(timeInObject)
    return employeeObject
}

function createTimeOutEvent(employeeObject, dateStamp){
    const hour = dateStamp.split('')[1]
    const date = dateStamp.split('')[0]
    const timeOutObject = {
        type: 'TimeOu',
        hour: parseInt(hour, 10),
        date: date
    }
    const timeOutEvents = employeeObject.timeOuEvents
    timeOutEvents.push(timeOutObject)
    return employeeObject
}

function hoursWorkedOnDate(employeeObject, dateStamp){
    const timeIn =''
    const timeOut = ''
    employeeObject.timeInEvents.forEach(a => {
        if (a.date === dateStamp){
            timeIn = a.hour
        }
    })
    
    employeeObject.timeOutEvents.forEach(a => {
        if (a.date === dateStamp){
            timeOut = a.hour
        }
    })
    const hours = (timeOut - timeIn)/100
    return hours 
}

function wagesEarnedOnDate(employeeObject){
    const hours = hoursWorkedOnDate(employeeObject, dateStamp)
    const wages = hours * employeeObject.payPerHour
    return wages
}

function allWagesFor(employeeObject){
    const arrayOfDates = employeeObject.timeInEvents.map(a => a.date)
    const wagesEarned = 0;
    arrayOfDates.forEach(date => {
        const newWage = wagesEarnedOnDate(employeeObject, date)
        wagesEarned = wagesEarned + newWage
    })
    return wagesEarned
}

function calculatePayroll(array){
    const totalPayroll = 0
    array.forEach(employee => {
        totalPayroll = totalPayroll + allWagesFor(employee)
    })
    return totalPayroll
}
