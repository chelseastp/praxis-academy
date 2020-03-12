let meetups = [
    {name:'How to be Raisa', isActive:true, members:700},
    {name:'How to be Maudy', isActive:true, members:400},
    {name:'How to be Chelsea', isActive:false, members:5},
    {name:'How to be me', isActive:true, members:900}
];
let sumFPChain = meetups.filter((m)=>{
    return m.isActive;
})
.map((m)=>{
    return m.members- (0.1*m.members);
})
.reduce((acc, m)=> {
    return acc + m;
},0);
console.log(sumFPChain);