const maxFreelancers= 10;
const freelancers= 
[{name: "Greg", occupation: "gardener", price: 25,},

{name: "Antonia", occupation: "programmer", price: 51 ,},

{name: "Jose",occupation: "teacher", price: 43,},

{name: "Maria",occupation: "makeup artist", price: 78,},

{name: "Angela",occupation: "chef", price: 52,},

{name: "Jaden",occupation: "analyst", price: 67,}
];

//NewFreelancer=[];
const FreelancersInterval = setInterval(() => addFreelancers(freelancers),1000)




function addFreelancers(freelancers){
 
if (freelancers.length){
    const table = document.querySelector('table')
    const NewFreelancer = freelancers.pop();
    const newTr = document.createElement('tr')
    newTr.innerHTML = `<td>${NewFreelancer.name}</td><td>${NewFreelancer.occupation}</td><td>${NewFreelancer.price}</td>`
    table.appendChild(newTr)
    movingAverage();
}
}


function movingAverage() {
    const span = document.querySelector("span");
    const PricesfromArray = document.querySelectorAll(".price");
    console.log(PricesfromArray )
    let totalSum = 0;
    for (const el of PricesfromArray ) {
        totalSum += +el.textContent;
    }
    const averageTotalsum = totalSum/PricesfromArray .length;
    span.textContent = averageTotalsum;
    return averageTotalsum
}