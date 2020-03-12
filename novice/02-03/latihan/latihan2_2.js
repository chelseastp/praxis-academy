let meetups = [
    {name:'How to be Raisa', isActive:true, members:700},
    {name:'How to be Maudy', isActive:true, members:400},
    {name:'How to be Chelsea', isActive:false, members:5}
];
/* Imperative--Focuses on describing how program operates */
let activeMeetups = [];
for (let i = 0; i < meetups.length; i++ ){
    let m = meetups[i];
    if (m.isActive) {
        activeMeetups.push(m);
    }
}
console.log(activeMeetups);
/* Output will be array of 2 elements where isActive is true */

/* Declarative-- Focuses on what the program should accomplish */
let activeMeetupsFP = [];
activeMeetupsFP = (meetups.filter((m)=>{
    return m.isActive;
}));
console.log(activeMeetupsFP);
/* Output will be array of 2 elements where isActive is true */