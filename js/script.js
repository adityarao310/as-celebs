// Initialise all variables and input data
// "image": "images/profiles/a61e8c317c2a150458469217d325a59f.jpg",
// not trailing / is a MUST
// getElementsByClassName ALWAYS returns an array
const main_db = [
    {
        "category": "music",
        "description": "Mick continues to tour with the band and refuses to let the disease control his life. A perfect case of making lemonade with lemons, he recently stated in an interview that AS caused his body to bend, allowing him to see the guitar axe bettter!",
        "title": "Guitarist, Motley Crue",
        "image": "images/profiles/mick-mars-by-peter-Kramer.jpg",
        "link": "http://loudwire.com/mick-mars-says-illness-wont-stop-him-from-touring-with-motley-crue/",
        "name": "Mick Mars"
    },
    {
        "category": "sports",
        "description": "Clarke came forward and opened up in 2016 about his battle for chronic pain for the 15 years of professional sports life. He has three degenerating disks and suffers from the usual symptoms of shooting pain, loss in mobility and morning stifness.",
        "title": "Cricketer, Australia",
        "image": "images/profiles/michael-clarke-world-cup-mcg.jpg",
        "link": "https://www.huffingtonpost.com.au/2016/03/22/michael-clarke-chronic-pain_n_9519176.html",
        "name": "Michael Clarke"
    },
    {
        "category": "sports",
        "description": "He was bullied at school - even by teachers - because people thought only the elderly got arthritis. He can't run, and struggles to walk long distances. The pain forced him to stop playing hockey, tennis and golf when he was 13.",
        "title": "V8 Supercar Racer",
        "image": "images/profiles/IUSTGHE4WBG5NJEHML6QGKO3LE.jpg",
        "link": "https://www.youtube.com/watch?v=UfhauqhAD4w",
        "name": "Matt Lockwood"
    },
    {
        "category": "sports",
        "description": "He played for the national team for 12 years and was a leading batsman in the 1990s. Since he could not bend easily, it forced him to learn how to play bouncing balls by not ducking but standing straight and hitting them.",
        "title": "Cricketer, England",
        "image": "images/profiles/Michael-Atherton.jpg",
        "link": "http://www.cricketcountry.com/articles/michael-atherton-the-face-of-the-english-spirit-24370",
        "name": "Michael Atherton"
    },
    {
        "category": "sports",
        "description": "Diagnosed in 2010 at the peak of his career, the gifted surfer Mitch Crews was hardly able to draw breath as he shuffled from his bed to the toilet and back again. 2 years later with Humira, Crews is back on the circuit and competing professionaly. ",
        "title": "Pro Surfer",
        "image": "images/profiles/54bc24766147ff28d19bc9abe3001fa1-870x490.jpg",
        "link": "https://www.smh.com.au/national/surfer-mitch-crews-goes-from-hunchback-to-comeback-thanks-to-drug-trial-20140207-3273w.html",
        "name": "Mitch Crews"
    },
    {
        "category": "music",
        "description": "The best you can do is dance. And second best is riding. Besides her work as an actress in notable german shows Neubauer has also made a name as an author of books.",
        "title": "Actress, Germany",
        "image": "images/profiles/a61e8c317c2a150458469217d325a59f.jpg",
        "link": "https://www.youtube.com/watch?v=DGvO9m1khM8&t=0s&index=7&list=PLl3mLp-sqOe49A-Bud2ss1ec-W0WSNDXN",
        "name": "Christine Neubauer"
    },
    {
        "category": "music",
        "description": "Frey secretly battled rheumatoid arthritis for more than 15 years before he died. He is another case of famous people being shy of coming forward about their diseases, but thankfully he was able to inspire millions of people and 3 generations with his songs.",
        "title": "Guitarist, Eagle",
        "image": "images/profiles/glenn-frey-the-eagles-death__oPt.jpg",
        "link": "http://arthritisbroadcastnetwork.org/2016/01/eagles-guitarist-glenn-frey-battled-rheumatoid-arthritis/",
        "name": "Glenn Frey"
    },
    {
        "category": "sports",
        "description": "Phil's diagnosis of psoriatic arthritis came on the day of the tournament where he placed 4th in 2010, and is now a vocal advocate of the disease and other chronic pain conditions like rhematism etc. He recommends a healthy diet as the biggest reason for his turnaround.",
        "title": "Pro Golfer",
        "image": "images/profiles/Phil-Mickelson-Putt.jpg",
        "link": "https://www.healthline.com/health/phil-mickelson-arthritis#4",
        "name": "Phil Mickelson"
    },
    {
        "category": "music",
        "description": "He is known for his amazing physique, 6 packs and a daily workout routine of 2 hours in the morning. This year he joined the Hollyoaks cast as Kyle, a character with multiple sclerosis to raise awareness.",
        "title": "TV Show Star",
        "image": "images/profiles/adam-ricket-image-5-627995389.jpg",
        "link": "https://www.dailystar.co.uk/showbiz/600818/Adam-Rickitt-spine-disease-ankylosing-spondylitis",
        "name": "Adam Rickitt"
    },
    {
        "category": "misc",
        "description": "An American who suffered from spinal fusion in the 1830s was a medical curiosity to begin with, and was post-mortem diagnosed with the first ever recorded case of AS. We all owe great debt or him to shed more light on this disease.",
        "title": "First recorded case",
        "image": "images/profiles/ca7f5385e9e40163af214548bdfc8f03.jpg",
        "link": "https://en.wikipedia.org/wiki/Leonard_Trask",
        "name": "Leonard Trask"
    },
    {
        "category": "author",
        "description": "Diagnosed in 1964 following a very stressful trip to Russia, it left him in almost constant pain and doctors suggestion that he would die in a few months. He disagreed and went on a \"laughing matter\" diet. High doses of vitamin C and continuous stream of humurous films helped him come out within 6 months.",
        "title": "Journalist, Peace Advocate",
        "image": "images/profiles/50716694.jpg",
        "link": "https://www.laughteronlineuniversity.com/norman-cousins-a-laughterpain-case-study/",
        "name": "Norman Cousins"
    },
    {
        "category": "politician",
        "description": "He suffered from lifelong limp and reduced mobility of the spine, but that did not stop him from rising through the rank from health minister to minister of labour and playing a crucial role in the Suez Canal crisis. ",
        "title": "British Health Minister",
        "image": "images/profiles/3281476.jpg",
        "link": "https://en.wikipedia.org/wiki/Iain_Macleod",
        "name": "Iain Macleod"
    },
    {
        "category": "scientist",
        "description": "She is a regular in astronomy public discussions and and is also part of the science team of the Mars Opportunity Rover. ",
        "title": "Director of Research",
        "image": "images/profiles/TehRrI9a_400x400.jpg",
        "link": "https://twitter.com/tanyaofmars/status/994622577044787201",
        "name": "Tanya Harrison "
    }
]
var db_music = [];var db_author = [];var db_politics = [];var db_science = [];var db_misc = [];var db_sports = [];
let db_sorted = [db_music, db_science, db_sports, db_politics, db_author, db_misc];
// Used in loading text function
var music_people = document.getElementById('music_people_tag');
var sports_people = document.getElementById('sports_people_tag');
var politics_people = document.getElementById('politics_people_tag');
var misc_people = document.getElementById('misc_people_tag');
var authors_people = document.getElementById('authors_people_tag');
var science_people = document.getElementById('science_people_tag');
var tags_container = document.getElementById("tags"); // Get the container element of all tags
var any_tag = tags_container.getElementsByClassName("tag"); // Used in changing color function
var append_to = document.getElementById('append_here'); // append list of cards

// Store data from big object into individual categories
function split_db() {
    main_db.forEach(element => {
        if (element.category == "music") {
            db_sorted[0].push(element);
        } else if (element.category == "author") {
            db_sorted[4].push(element);
        } else if (element.category == "politician") {
            db_sorted[3].push(element);
        } else if (element.category == "scientist") {
            db_sorted[1].push(element);
        } else if (element.category == "misc") {
            db_sorted[5].push(element);
        } else if (element.category == "sports") {
            db_sorted[2].push(element);
        }
    });
}
split_db();

// Generate big markup for each category
function music() {
let music_markup = ``;
db_sorted[0].forEach(element => {
    let newmarkup = `
    <div class="profile_card">
        <img class="profile_image" src="${element.image}" alt="">
        <p class="name">${element.name}</p>
        <p class="title">${element.title}</p>
        <p class="description">${element.description}</p>
        <p class="read_more"><a href="${element.link}">Read about their struggle</a></p>
    </div>
    `;
    music_markup = music_markup + newmarkup;
});
append_to.innerHTML = music_markup;
}

function science() {
let science_markup = ``;
db_sorted[1].forEach(element => {
    let newmarkup = `
    <div class="profile_card">
        <img class="profile_image" src="${element.image}" alt="">
        <p class="name">${element.name}</p>
        <p class="title">${element.title}</p>
        <p class="description">${element.description}</p>
        <p class="read_more"><a href="${element.link}">Read about their struggle</a></p>
    </div>
    `;
    science_markup = science_markup+ newmarkup;
});
append_to.innerHTML = science_markup;
}

function sports() {
let sports_markup = ``;
db_sorted[2].forEach(element => {
    newmarkup = `
        <div class="profile_card">
            <img class="profile_image" src="${element.image}" alt="">
            <p class="name">${element.name}</p>
            <p class="title">${element.title}</p>
            <p class="description">${element.description}</p>
            <p class="read_more"><a href="${element.link}">Read about their struggle</a></p>
        </div>
    `;
    sports_markup = sports_markup+ newmarkup;
});
append_to.innerHTML = sports_markup;
}

function author() {
let author_markup = ``;
db_sorted[4].forEach(element => {
    newmarkup = `
        <div class="profile_card">
            <img class="profile_image" src="${element.image}" alt="">
            <p class="name">${element.name}</p>
            <p class="title">${element.title}</p>
            <p class="description">${element.description}</p>
            <p class="read_more"><a href="${element.link}">Read about their struggle</a></p>
        </div>
    `;
    author_markup  = author_markup + newmarkup;
});
append_to.innerHTML = author_markup ;
}

function politics() {
let politics_markup = ``;
db_sorted[3].forEach(element => {
    newmarkup = `
        <div class="profile_card">
            <img class="profile_image" src="${element.image}" alt="">
            <p class="name">${element.name}</p>
            <p class="title">${element.title}</p>
            <p class="description">${element.description}</p>
            <p class="read_more"><a href="${element.link}">Read about their struggle</a></p>
        </div>
    `;
    politics_markup  = politics_markup + newmarkup;
});
append_to.innerHTML = politics_markup ;
}

function misc() {
let misc_markup = ``;
db_sorted[5].forEach(element => {
    newmarkup = `
        <div class="profile_card">
            <img class="profile_image" src="${element.image}" alt="">
            <p class="name">${element.name}</p>
            <p class="title">${element.title}</p>
            <p class="description">${element.description}</p>
            <p class="read_more"><a href="${element.link}">Read about their struggle</a></p>
        </div>
    `;
    misc_markup  = misc_markup + newmarkup;
});
append_to.innerHTML = misc_markup ;
}

// Run functions on click and page load and by default load music
window.onload = music();
politics_people.addEventListener("click", politics);
misc_people.addEventListener("click", misc);
sports_people.addEventListener("click", sports);
authors_people.addEventListener("click", author);
science_people.addEventListener("click", science);
music_people.addEventListener("click", music);

// Loop through the tags and add the active class to the current/clicked 
for (var i = 0; i < any_tag.length; i++) {
    any_tag[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

