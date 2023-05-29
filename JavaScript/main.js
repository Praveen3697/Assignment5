/* Implement all your javascript here */

/**
 * You will need to create a dynamic list here using Javascript CreateElement, appendChild and other
 * methods that we already seen in Javascript assignment.
 */

 let globalEmployeeDetails = []
 
 const fetchEmployeeDetails = async () => {
     const res = await fetch('https://api.github.com/users')
     const data = await res.json()
 
     globalEmployeeDetails = data
 
     data.forEach(employee => createEmployeeDiv(employee))

 }
