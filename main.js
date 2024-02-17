const dad_jokes = [
    "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
    "Did you hear about the guy whose whole left side was cut off? He's all right now.",
    "Why didn’t the skeleton cross the road? Because he had no guts.",
    "What did one nut say as he chased another nut?  I'm a cashew!",
    "Where do fish keep their money? In the riverbank",
    "I accidentally took my cats meds last night. Don’t ask meow.",
    "Chances are if you' ve seen one shopping center, you've seen a mall.",
    "Dermatologists are always in a hurry. They spend all day making rash decisions."
]

let random_num = Math.floor(Math.random() * dad_jokes.length);
let selected_joke = dad_jokes[random_num];

console.log(selected_joke);