// Initialise all variables and input data
// "image": "images/profiles/a61e8c317c2a150458469217d325a59f.jpg",
// not trailing / is a MUST
// getElementsByClassName ALWAYS returns an array
const main_db = 
[
    {
        "category": "music",
        "description": "He is part of the famous Buzzfeed group \"The Try guys\" with millions of views and fans. He was diagnosed in 2017 after going through the all-too-familiar struggle of misdiagnoses for 2+ years. ",
        "title": "Youtube Star",
        "image": "images/profiles/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=v9iTfaYmH5E",
        "name": "Zach Kornfeld"
    },
    {
        "category": "music",
        "description": "Grammy award winner, father of 3 and now a strong advocate of spreading AS awareness, Dan Reynolds has come a long way. He runs a great website called <a href=\"http://www.thisaslife.com/\" target=\"_blank\">This is AS Life</a> that you should check out.",
        "title": "Guitarist, Imagine Dragons",
        "image": "images/profiles/mgid_ao_image_logotv.jpeg",
        "link": "https://www.youtube.com/watch?v=JmcyK89a_mM",
        "name": "Dan Reynolds"
    },
    {
        "category": "music",
        "description": "He was a broadcasting pioneer for more than 30 years and was ranked number 50 on TV Guide's \"50 Greatest TV Stars of All Time\". He was ridiculed unknowingly by others for his stiff back posture.",
        "title": "TV Personality",
        "image": "images/profiles/440px-Ed_Sullivan.jpg",
        "link": "https://en.wikipedia.org/wiki/Ed_Sullivan",
        "name": "Ed Sullivan"
    },
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
        "description": "Phil's diagnosis of psoriatic arthritis came on the he placed 4th in a 2010 tournament and is now a vocal advocate of chronic pain conditions like rhematism etc. He recommends a healthy diet as the biggest reason for his turnaround.",
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
        "description": "An American who suffered from spinal fusion in the 1830s was a medical curiosity to begin with, and was post-mortem diagnosed with the first ever recorded case of AS.",
        "title": "First recorded case",
        "image": "images/profiles/ca7f5385e9e40163af214548bdfc8f03.jpg",
        "link": "https://en.wikipedia.org/wiki/Leonard_Trask",
        "name": "Leonard Trask"
    },
    {
        "category": "author",
        "description": "The disease left him in almost constant pain and doctors suggested that he would die in a few months. He disagreed and went on a \"laughing matter\" diet. High doses of vitamin C with a stream of humurous films helped him come out within 6 months.",
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
        "description": "She is a regular in astronomy public discussions and and is also part of the science team of the Mars Opportunity Rover. Tanya has been sharing her journey on Twitter very regularly too. ",
        "title": "Director of Research",
        "image": "images/profiles/TehRrI9a_400x400.jpg",
        "link": "https://twitter.com/tanyaofmars/status/994622577044787201",
        "name": "Tanya Harrison "
    },
    {
        "category": "scientist",
        "description": "One of the most famous astrologers of the early 20th century, John wrote numerous articles and contributed to his field via his thoery of harmonics. His work is still quoted by modern astrologers.",
        "title": "English Astrologer",
        "image": "images/profiles/addeyx.jpg",
        "link": "https://en.wikipedia.org/wiki/John_Addey_(astrologer)",
        "name": "John Addey "
    },
    {
        "category": "music",
        "description": "Nixie is a popular Youtuber and Twitch streamer who has amassed millions of views on her videos about tech hacking and the open source and geek culture. ",
        "title": "Youtuber, Tech",
        "image": "images/profiles/19247911_1461066883972237_3029891016662957082_n.jpg",
        "link": "https://www.youtube.com/watch?v=rn6kJvWYQfc&t=1624s",
        "name": "Nicole Allen"
    },
    {
        "category": "author",
        "description": "Diagnosed with AS around 20 years ago, he has managed to stay productive since then; churning out a bunch of poetry collections and novels. You can read more about him on his wikipedia page.",
        "title": "English Author, Poet",
        "image": "images/profiles/Simon_Armitage_in_2009.jpg",
        "link": "https://www.independent.co.uk/arts-entertainment/books/features/simon-armitage-im-quite-boyish-in-my-outlook-1843591.html",
        "name": "Simon Armitage"
    },
    {
        "category": "sports",
        "description": "He was diagnosed in the middle of his baseball career but yet recovered sufficiently to be on offense for 4+ more seasons. He is currently the national spokesperson for AS association america.",
        "title": "Major League Baseball",
        "image": "images/profiles/rico_brogna_botw1.jpg",
        "link": "https://www.everydayhealth.com/hs/ankylosing-spondylitis-treatment-management/sanjay-gupta-best-moment-ever/",
        "name": "Rico Brogna"
    },
    {
        "category": "author",
        "description": "He was nominated for Nobel Prize, not once or twice, but seven times! And guess what he coined the term Robots for the first time and is considered to be the gradnfather of science fiction.",
        "title": "Czech Writer",
        "image": "images/profiles/Karel-capek.jpg",
        "link": "https://en.wikipedia.org/wiki/Karel_%C4%8Capek#Late_life_and_death",
        "name": "Karel Čapek"
    },
    {
        "category": "music",
        "description": "A musician, singer, songwriter, record producer, film producer, actor, and director all rolled into one, Jay Chou was diagnosed in his early teens. But that hasn't stopped him from doing 5 albums, 8 world tours and 4 movies.",
        "title": "Singer and actor, Taiwan",
        "image": "images/profiles/Jay_Chou_cropped.jpg",
        "link": "https://www.straitstimes.com/lifestyle/entertainment/life-as-mrs-jay-chou",
        "name": "Jay Chou"
    },
    {
        "category": "sports",
        "description": "At the 1976 Summer Olympics in Montreal, Quebec, he won the 200-meter freestyle and was a member of the winning U.S. team in the 4×200-meter freestyle relay, both in world record time",
        "title": "Olympics Gold Medalist",
        "image": "images/profiles/480px-Bruce_and_Steve_Furniss_1976.jpg",
        "link": "https://vimeo.com/206590941",
        "name": "Bruce Furniss"
    },
    {
        "category": "music",
        "description": "He plays the electric guitar in the spanish pop rock band \"El Sueño de Morfeo\" with a musical style is pop rock fused with Celtic, folk rock and indie pop elements.",
        "title": "Guitarist, Spanish Rock Band",
        "image": "images/profiles/A-3291850-1369032716-4355.jpeg",
        "link": "https://en.wikipedia.org/wiki/El_Sue%C3%B1o_de_Morfeo",
        "name": "Juan Luis Garrido"
    },
    {
        "category": "politician",
        "description": "In the House of Commons, George led the Liberal Democrats' Parliamentary DEFRA and Environment team. He has also actively campaigned for better drug treatments and research for AS.",
        "title": "Politician, Britain",
        "image": "images/profiles/440px-Andrew_George_at_Sheffield_2011.jpg",
        "link": "http://news.bbc.co.uk/2/hi/health/8380193.stm",
        "name": "Andrew George"
    },
    {
        "category": "sports",
        "description": "He diagnosed in about 1995, while playing for Norwhich City but still kept on going to have 9 more years of football and then an illustrious career as a manager at the same club.",
        "title": "Soccer Star",
        "image": "images/profiles/663331836.jpg",
        "link": "https://www.mirror.co.uk/news/world-news/goalie-ace-in-war-on-illness-1637762",
        "name": "Bryan Gunn "
    },
    {
        "category": "sports",
        "description": "He has played in baseball for the Cleveland Indians, Seattle Mariners and Los Angeles Dodgers. In 2017, the LA Dodgers signed Gutiérrez to a one-year, $2.6 million, contract.",
        "title": "Major League Baseball",
        "image": "images/profiles/500px-Franklin_Gutierrez.jpg",
        "link": "http://www.latimes.com/sports/dodgers/la-sp-dodgers-gutierrez-dl-20170625-story.html",
        "name": "Franklin Gutiérrez "
    },
    {
        "category": "scientist",
        "description": "A Fellow of the Society of Antiquaries; his biggest work was the project with Nikolaus Pevsner in compiling volumes of the Buildings of England",
        "title": "Architectural Historian",
        "image": "images/profiles/sir_david_frost_-6243486410.jpg",
        "link": "https://en.wikipedia.org/wiki/Edward_Hubbard",
        "name": "Edward Hubbard"
    },
    {
        "category": "music",
        "description": "In 1999, Hurst was voted no. 48 in Company magazine's \"100 Millennium Men\" – tagged as a list of 'The Sexiest Men of the Century'.",
        "title": "Comedian",
        "image": "images/profiles/lee-hurst1_1296769c.jpg",
        "link": "https://www.express.co.uk/life-style/health/294611/Lee-Hurst-Why-I-m-standing-up-to-my-arthritis",
        "name": "Lee Hurst"
    },
    {
        "category": "sports",
        "description": "He played pro golf while representing Europe and England from 1973 to 1981. He made fifth place on the European Tour's Order of Merit and appeared in Ryders and World cup.",
        "title": "Professional Golfer",
        "image": "images/profiles/Michael-King.png",
        "link": "https://en.wikipedia.org/wiki/Michael_King_(golfer)",
        "name": "Michael King"
    },
    {
        "category": "sports",
        "description": "He was the classical chess world champion for 6 years and has defeated the likes of players like Gary Kasparov. He is currently ranked number 3 on the world rankings. ",
        "title": "Chess Grandmaster",
        "image": "images/profiles/440px-Vladimir_Kramnik_2005.jpg",
        "link": "https://en.chessbase.com/post/kramnik-drops-out-of-wijk-super-tournament",
        "name": "Vladimir Kramnik"
    },
    {
        "category": "music",
        "description": "He started the popular death metal band in 1989, and has also dabbled in graphic design and creative writing. He also suffers from Spinal stenosis unfortunately. ",
        "title": "Vocalist, November Doom",
        "image": "images/profiles/440px-Novembers-Doom-2005.jpg",
        "link": "https://en.wikipedia.org/wiki/Paul_Kuhr",
        "name": "Paul Kuhr"
    },
    {
        "category": "author",
        "description": "He is widely seen as one of the most radical and challenging thinkers of the 19th century, especially the Romantic era. Though some experts affirm that his was a case of Pott's disease.",
        "title": "Italian Poet",
        "image": "images/profiles/440px-Leopardi,_Giacomo_(1798-1837)_-_ritr._A_Ferrazzi,_Recanati,_casa_Leopardi.jpg",
        "link": "https://en.wikipedia.org/wiki/Giacomo_Leopardi",
        "name": "Giacomo Leopardi"
    },
    {
        "category": "author",
        "description": "He wrote his most famous novel How the Steel Was Tempered while suffering from multiple disorders that left him blinded and paralysed. ",
        "title": "Socialist Realist Writer",
        "image": "images/profiles/N_Ostrovskiy.jpg",
        "link": "https://en.wikipedia.org/wiki/Nikolai_Ostrovsky",
        "name": "Nikolai Ostrovsky "
    },
    {
        "category": "sports",
        "description": "He considered quitting in 2013 before he was properly diagnosed; but since then has gone on to win 4 major league titles. ",
        "title": "Snooker Player",
        "image": "images/profiles/440px-Joe_Perry_at_Snooker_German_Masters_(DerHexer)_2013-01-31_01.jpg",
        "link": "http://www.worldsnooker.com/snooker-a-pain-in-the-neck/",
        "name": "Joe Perry"
    },
    {
        "category": "author",
        "description": "She was a German poet, fiction and non-fiction writer, and dramatist in early 1920s. She wrote her first novel after her diagnosis and while recovering from a fall from the stair that left her bedridden.",
        "title": "Writer, Germany",
        "image": "images/profiles/541055065.jpg",
        "link": "https://en.wikipedia.org/wiki/Christa_Reinig",
        "name": "Christa Reinig"
    },
    {
        "category": "sports",
        "description": "Australian television presenter and professional cricketer who played in 74 Tests and 42 ODIs for his national team. He was a specialist right-handed batsman as well as a very occasional bowler.",
        "title": "Cricket, Australia",
        "image": "images/profiles/113911463.jpg",
        "link": "http://www.bjchealth.com.au/connected-care/2010/12/the-ashes-michael-slater-ankylosing-spondylitis/",
        "name": "Michael Slater"
    },
    {
        "category": "sports",
        "description": "Currently 44 years old, he played professionally from 1991-2005 and is currently a famous snooker coach in Scotland and Europe.",
        "title": "Snooker Player",
        "image": "images/profiles/chris-zoom.jpg",
        "link": "https://www.scotsman.com/news/i-don-t-want-pity-just-to-stand-up-straight-1-974755",
        "name": "Chris Small "
    },
    {
        "category": "author",
        "description": "He is best known for his epigrams, was a leading figure of the Scottish Literary Renaissance and widely accepted as one of the most leading poets of Scotland.",
        "title": "Scottish Poet",
        "image": "images/profiles/download.jpeg",
        "link": "https://en.wikipedia.org/wiki/William_Soutar",
        "name": "William Soutar"
    },
    {
        "category": "politician",
        "description": "He served as Norwegian Prime Minister for 9 years (!) and is currently the secretary general of NATO. In 2011, he got the Champion of Global Change Award.",
        "title": "Prime Minister, Norway",
        "image": "images/profiles/Jens_Stoltenberg_February_2015.jpg",
        "link": "https://intmassmedia.com/2017/04/17/nato-secretary-general-i-keep-trying-to-find-a-balance/",
        "name": "Jens Stoltenberg"
    },
    {
        "category": "music",
        "description": "His hit TV comedies such as The Good Life and Yes Minister still air on many popular channels and command high viewership.",
        "title": "TV Comedy Star",
        "image": "images/profiles/41b5acc1c0d99b5be6b2c7eea4df347b.jpg",
        "link": "https://www.highbeam.com/doc/1G1-110678478.html",
        "name": "Paul Eddington"
    },
    {
        "category": "music",
        "description": "Rachel Taylor is the lead singer for the famous indie rock band He is We. She was diagnosed with AS when she was 21 years old but is managing to keep producing music. ",
        "title": "Singer, He is We",
        "image": "images/profiles/d3092119c8e57a3f3dc5d2149dbcd841.jpg",
        "link": "https://infectiousmagazine.com/rachel-taylor-clears-up-he-is-we-confusion/",
        "name": "Rachel Taylor"
    },
    {
        "category": "scientist",
        "description": "He is best known for his work on combining philosphical insight with historical understanding and interpreting the work of Richard Price.",
        "title": "Famous philospher",
        "image": "images/profiles/oswald-spengler-1880-1936-german-historian-and-philosopher-CXJGF5.jpg",
        "link": "https://en.wikipedia.org/wiki/David_Oswald_Thomas",
        "name": "David Oswald Thomas"
    },
    {
        "category": "politician",
        "description": "He is an Honorary Life Member of Arthritis New Zealand and has been active in various departments at New Zealand government since 2008.",
        "title": "Immigration Minister, New Zealand",
        "image": "images/profiles/Michael_Woodhouse.jpg",
        "link": "https://en.wikipedia.org/wiki/Michael_Woodhouse",
        "name": "Michael Woodhouse"
    },
    {
        "category": "sports",
        "description": "He is one of the five members of the Big Five generation of Eureopean golfers and has won 51 professional games on the circuit.",
        "title": "Welsh Golfer",
        "image": "images/profiles/400px-Ian_Woosnam_at_Royal_Troon_cropped.jpg",
        "link": "https://en.wikipedia.org/wiki/Ian_Woosnam",
        "name": "Ian Woosnam"
    },
    {
        "category": "scientist",
        "description": "He has been disabled for 20 years now and launched the first database of “unnamed dead” in China.",
        "title": "Founder, Unidentified Death Database",
        "image": "images/profiles/19836146_980x1200_436.jpg",
        "link": "http://henan.qq.com/a/20170615/036125.htm#p=1",
        "name": "Dayong Zhang"
    },
    {
        "category": "misc",
        "description": "Not a confirmed case of AS, or Rheumatoid Arthritis. What we do know for sure is that Columbus’ spine became fused and during his last voyage home, he was completely immobilized.",
        "title": "Famous Explorer",
        "image": "images/profiles/57fb9b534046dd9d078b47c6-750-563.jpg",
        "link": "http://rawarrior.com/what-kind-of-arthritis-did-christopher-columbus-have/",
        "name": "Christopher Columbus"
    },
    {
        "category": "misc",
        "description": "Once again, not a confirmed case of AS (and maybe a discogenic disease), but he spent most of his adult life struggling with back pain problems that started with in college.",
        "title": "US President",
        "image": "images/profiles/jfk-at-100-st-309-4-63.jpg",
        "link": "https://www.spineuniverse.com/conditions/back-pain/john-f-kennedy-s-life-long-struggles-chronic-back-pain",
        "name": "John F Kennedy"
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
        <p class="read_more"><a href="${element.link}" target="_blank">Read about their struggle</a></p>
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
        <p class="read_more"><a href="${element.link}" target="_blank">Read about their struggle</a></p>
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
            <p class="read_more"><a href="${element.link}" target="_blank">Read about their struggle</a></p>
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
            <p class="read_more"><a href="${element.link}" target="_blank">Read about their struggle</a></p>
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
            <p class="read_more"><a href="${element.link}" target="_blank">Read about their struggle</a></p>
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
            <p class="read_more"><a href="${element.link}" target="_blank">Read about their struggle</a></p>
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

