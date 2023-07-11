const express = require('express')
const app = express()
const cors = require("cors")
const PORT = 3003
app.use(cors())

const movies = {
    'nausicaä of the valley of the wind':{
        'title':'nausicaä of the valley of the wind',
        'originalTitle':"風の谷のナウシカ",
        'director':"Hayao Miyazaki",
        'description':'Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/b/bc/Nausicaaposter.jpg",
        'rating':'8.0/10',
        'release':'11 March 1984'
    },
    'castle in the sky':{
        'title':'castle in the sky',
        'originalTitle':"天空の城ラピュタ",
        'director':"Hayao Miyazaki",
        'description':'A young boy and a girl with a magic crystal must race against pirates …',
        'poster':"https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png",
        'rating':'8.0/10',
        'release':'August 2, 1986'
    },
    'grave of the fireflies':{
        'title':'Grave of the Fireflies',
        'originalTitle':"火垂るの墓",
        'director':"Isao Takahata",
        'description':'A young boy and a girl with a magic crystal must race against pirates …',
        'poster':"https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
        'rating':'8.5/10',
        'release':'16 April, 1988'
    },
    'my neighbor totoro':{
        'title':'My Neighbor Totoro',
        'originalTitle':"となりのトトロ",
        'director':"Hayao Miyazaki",
        'description':'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
        'rating':'8.1/10',
        'release':'April 16, 1988'
    },
    "kiki's delivery service":{
        'title':"Kiki's Delivery Service",
        'originalTitle':"魔女の宅急便",
        'director':"Hayao Miyazaki",
        'description':'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg",
        'rating':'7.8/10',
        'release':'July 29, 1989'
    },
    "only yesterday":{
        'title':"Only Yesterday",
        'originalTitle':"おもひでぽろぽろ",
        'director':"Isao Takahata",
        'description':'A twenty-seven-year-old office worker travels to the countryside while reminiscing about her childhood in Tokyo.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/4/46/OYpost.jpg",
        'rating':'7.6/10',
        'release':'July 20, 1991'
    },
    "porco rosso":{
        'title':"Porco Rosso",
        'originalTitle':"となりのトトロ",
        'director':"Hayao Miyazaki",
        'description':'In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg",
        'rating':'7.7/10',
        'release':'July 18, 1992'
    },
    " ocean waves":{
        'title':" Ocean Waves",
        'originalTitle':"海がきこえる",
        'director':"Tomomi Mochizuki",
        'description':'As a young man returns home after his first year away at college he recalls his senior year of high school and the iron-willed, big city girl that turned his world upside down.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/e/ea/Umigakikoeru_poster.jpg",
        'rating':'6.6/10',
        'release':'December 25, 1995'
    },
    " pom poko":{
        'title':" Pom Poko",
        'originalTitle':"平成狸合戦ぽんぽこ",
        'director':" Isao Takahata",
        'description':'A community of magical shape-shifting raccoon dogs struggle to prevent their forest home from being destroyed by urban development.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/6/68/Pompokoposter.jpg",
        'rating':'7.3/10',
        'release':'July 16, 1994'
    },
    " whisper of the heart":{
        'title':" Whisper of the Heart",
        'originalTitle':"耳をすませば",
        'director':"Hayao Miyazaki",
        'description':'A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/9/93/Whisper_of_the_Heart_%28Movie_Poster%29.jpg",
        'rating':'7.8/10',
        'release':'July 15, 1995'
    },
    "Princess Mononoke":{
        'title':" Princess Mononoke",
        'originalTitle':"もののけ姫",
        'director':"Hayao Miyazaki",
        'description':"On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/8/8c/Princess_Mononoke_Japanese_poster.png",
        'rating':'8.3/10',
        'release':'July 12, 1997'
    },
    " My Neighbors the Yamadas":{
        'title':" My Neighbors the Yamadas",
        'originalTitle':"ホーホケキョとなりの山田くん",
        'director':" Isao Takahata ",
        'description':'The life and misadventures of a family in contemporary Japan.',
        'poster':"https://upload.wikimedia.org/wikipedia/en/4/4b/My_Neighbors_the_Yamadas_%281999%29.jpg",
        'rating':'7.1/10',
        'release':'17 July 1999'
    },
    " Spirited Away":{
        'title':" Spirited Away",
        'originalTitle':"千と千尋の神隠し",
        'director':"Hayao Miyazaki",
        'description':"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        'rating':'8.6/10',
        'release':'20 July 2001'
    },
    " The Cat Returns ":{
        'title':"The Cat Returns ",
        'originalTitle':"猫の恩返し",
        'director':"Hiroyuki Morita ",
        'description':"After helping a cat, a seventeen-year-old girl finds herself involuntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/8/8e/Cat_Returns.jpg",
        'rating':'7.1/10',
        'release':'July 20, 2002'
    },
    "Howl's Moving Castle":{
        'title':"Howl's Moving Castle",
        'originalTitle':"ハウルの動く城",
        'director':"Hayao Miyazaki",
        'description':"When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
        'rating':'8.2/10',
        'release':'5 September 2004'
    },
    "ales from Earthsea":{
        'title':"ales from Earthsea",
        'originalTitle':"ゲド戦記",
        'director':"Gorô Miyazaki",
        'description':"In a mythical land, a man and a young boy investigate a series of unusual occurrences.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/e/e5/Gedo6sn.jpg",
        'rating':'6.3/10',
        'release':'July 29, 2006'
    },
    "Ponyo":{
        'title':"Ponyo",
        'originalTitle':"崖の上のポニョ",
        'director':"Hayao Miyazaki",
        'description':"A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him",
        'poster':"https://upload.wikimedia.org/wikipedia/en/9/9d/Ponyo_%282008%29.png",
        'rating':'7.6/10',
        'release':'July 19, 2008'
    },
    "The Secret World of Arrietty ":{
        'title':"The Secret World of Arrietty ",
        'originalTitle':"借りぐらしのアリエッティ",
        'director':"Hiromasa Yonebayashi ",
        'description':"The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage daughter Arrietty is discovered.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/e/e7/Karigurashi_no_Arrietty_poster.png",
        'rating':'7.6/10',
        'release':'17 July 2010'
    },
    "From Up on Poppy Hill":{
        'title':"From Up on Poppy Hill",
        'originalTitle':"コクリコ坂から",
        'director':"Gorô Miyazaki ",
        'description':"A group of Yokohama teens look to save their school's clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/c/c9/From_Up_on_Poppy_Hill.png",
        'rating':'7.4/10',
        'release':'July 16, 2011'
    },
    "The Wind Rises ":{
        'title':"The Wind Rises ",
        'originalTitle':"The Wind Has Risen",
        'director':"Hayao Miyazaki ",
        'description':"A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg",
        'rating':'7.7/10',
        'release':'20 July 2013'
    },
    " The Tale of The Princess Kaguya":{
        'title':" The Tale of The Princess Kaguya",
        'originalTitle':"かぐや姫の物語",
        'director':"Isao Takahata ",
        'description':"Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her, but ultimately she must confront her fate, the punishment for her crime.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/6/68/The_Tale_of_the_Princess_Kaguya_%28poster%29.jpg",
        'rating':'8/10',
        'release':'23 November 2013'
    },
    " When Marnie Was There":{
        'title':" When Marnie Was There",
        'originalTitle':"思い出のマーニー",
        'director':" Hiromasa Yonebayashi",
        'description':"Due to 12 y.o. Anna's asthma, she's sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/a/a7/When_Marnie_Was_There.png",
        'rating':'7.7/10',
        'release':'19 July 2014'
    },
    "Earwig and the Witch":{
        'title':"Earwig and the Witch",
        'originalTitle':"アーヤと魔女",
        'director':"Gorô Miyazaki",
        'description':"An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/d/d5/Earwig_and_the_Witch.png",
        'rating':'4.8/10',
        'release':'August 27, 2021'
    },
    "How Do You Live?":{
        'title':"How Do You Live?",
        'originalTitle':"君たちはどう生きるか",
        'director':"Hayao Miyazaki",
        'description':"The psychological growth of a teenage boy through interactions with his friends and uncle.",
        'poster':"https://upload.wikimedia.org/wikipedia/en/4/41/How_Do_You_Live_poster.jpg",
        'rating':'N/A',
        'release':'July 14, 2023 '
    },
    'not available':{
        'title':'not available',
        'originalTitle':"not available",
        'director':"not available",
        'description':'not available',
        'poster':"not available",
        'rating':'not available',
        'release':'not available'
    }
}



app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html")
})
app.get("/api/:movieName",(request,response)=>{
    const movieName = request.params.movieName.toLowerCase()
    if(movies[movieName]){
        response.json(movies[movieName])
    }else{
        response.json(movies['not available'])
    }

})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})