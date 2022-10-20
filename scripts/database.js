/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            food: "crustaceans",
            length: 3,
            location: "Springfield",
            species: "Simpson",
            image: "https://img.freepik.com/free-vector/fish-bowl-concept-illustration_114360-2924.jpg?size=338&ext=jpg&ga=GA1.2.1928629802.1664562208"
        },
        {   
            id: 2,
            name: "William",
            food: "Kelp",
            length: 13,
            location: "The Jam",
            species: "Hipsterus Fishium",
            image: "https://img.freepik.com/free-photo/young-handsome-man-white-shirt-open-having-breakfast-cafe-with-vegetarian-burger-drinking-coffee-lifestyle-tropical-island-life-bali_1321-3923.jpg?size=338&ext=jpg&ga=GA1.2.1928629802.1664562208"
        },{ 
            id: 3,
            name: "Martin",
            food: "seeds",
            length: 8,
            location: "North America",
            species: "Purple Martin",
            image: "https://img.freepik.com/free-vector/cute-halibut-fish-white-background_1308-110798.jpg?size=626&ext=jpg&ga=GA1.2.1928629802.1664562208"
        }
    ]
}

