// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"
let fishes = getFish()
export const FishList = () =>{
    let html = `<article class="fishList">`
    html += FishLister(mostHolyFish())
    html += FishLister(soldierFish())
    html += FishLister(nonHolyFish())
    html += `</article>`
    return html
}

const FishLister = (fishes) => {
    // Invoke the function that you imported from the database module
    // change ^ to importing fishlists from holy filter functions

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    

    return htmlString
}
const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    
    for (const fish of fishes) {
        if (fish.length %3 === 0){
            holyFish.push(fish)
        } 
    }
    return holyFish
}

const soldierFish = () => {
    const soldiers = []
    for (const fish of fishes){
    if (fish.length %5 ===0 && fish.length %3 !== 0){
        soldiers.push(fish)
    }}
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishes){
    if (fish.length %5 !== 0 && fish.length %3 !== 0){
        regularFish.push(fish)
    }}
    return regularFish
}

