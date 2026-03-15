/* GREETING + SKY */

const greeting = document.getElementById("greeting")

if(greeting){

const hour = new Date().getHours()

if(hour >=5 && hour <11){
greeting.innerText="Good Morning Aathmika ☀️"
document.body.className="morning"
}

else if(hour >=11 && hour <17){
greeting.innerText="Good Afternoon Aathmika 🌤"
document.body.className="day"
}

else if(hour >=17 && hour <20){
greeting.innerText="Good Evening Aathmika 🌇"
document.body.className="sunset"
}

else{
greeting.innerText="Good Night Aathmika 🌙"
document.body.className="night"
}

}


/* MUSIC */

function playMusic(){

const music=document.getElementById("bgMusic")

if(music){
music.volume=0.4
music.play()
}

}


/* MESSAGE DATA */

const messages = [

"Wanna be me ? just make jokes on me and laugh (Enjoy kiddo).",

"Sometimes all you need is a breather. Step outside and breathe, J.",

"It's alright bud. Everything will be alright and if it's not, I'll punch it into the right shape.",

"You'll always be Aathmika but sometimes you need to be Fatima too.",

"You don't have to carry the weight of the world on your shoulders, go and live for yourself, do things that make you happy",

"Being with you is the easiest choice I have ever made, and I'm so lucky I get to make it every day.",

"You know sometimes instead of shouting in anger, just stare at them like they are dead.",

"It's okay to cry sometimes alright and it's okay to crashout and curse people, it's okay to call me an asshole when I annoy you. But it's not okay that you we smile together and you cry alone.",

"Don't worry about the future, it's not here yet. Don't worry about the past, it's already gone. Just live in the present and make it beautiful.",

"Remember, it's okay to talk when you need it. You don't have to go through everything alone."

]


const puns = [

"What happens to an illegally parked frog? It gets toad away.",

"Knock, knock. Who's there? Ayatollah. Ayatollah who? Ayatollah you already.",

"Why do seagulls fly over the sea? If they flew over the bay, they would be bagels.",

"Why don't cats play poker in the jungle? Too many cheetahs.",

"Why do comedians love telling jokes to ducks? They always quack up..",

"Knock, knock. Who's there? Abyss. Abyss who? I miss you too.",

"What's the difference between a Maserati and a dead body? I don't have a Maserati in my garage.",

"What do you call fake spaghetti? An impasta.",

"Patient: Doctor, I broke my arm in two places. Doctor: Stop going to those places.",

"Why don't skeletons fight each other? They don't have the guts.",

"What do you call an alligator detective? An investi-gator.",

"Today at the bank, an old lady asked me to help check her balance. So I pushed her over.",

"Why did the scarecrow win an award? Because he was outstanding in his field.",

"Why did the math book look sad? Too many problems.",

"It's important to have a strong grasp on vocabulary. I mean, if I'd known the difference between \"antidote\" and \"anecdote,\" one of my best friends would still be alive.",

"You don't need a parachute to go skydiving. You need a parachute to go skydiving twice.",

"I visited my friend at his new house. He told me to make myself at home, so I threw him out. I hate visitors.",

"I just got fired from the keyboard factory. They said I wasn't putting in enough shifts.",

"Yesterday, I couldn't figure out whether someone was waving at me or the person behind me. In other news, I lost my lifeguarding job..",

"Doctor: \"Which do you want first, the good news or the bad news? Patient: Give me the good news. Doctor: You're about to have a disease named after you.",

"I tried to catch fog yesterday. Mist."

]


/* SEND MESSAGE */

function sendMessage(){

const input=document.getElementById("userInput")

if(!input) return

const text=input.value.trim()

if(!text) return

addMessage(text,"user")

input.value=""

setTimeout(()=>{

const reply = messages[Math.floor(Math.random()*messages.length)]

addMessage(reply,"karan")

},700)

}


/* SEND PUN */

function sendPun(){

const input=document.getElementById("userInput")

if(!input) return

const text=input.value.trim()

if(!text) return

addMessage(text,"user")

input.value=""

setTimeout(()=>{

const reply = puns[Math.floor(Math.random()*puns.length)]

addMessage(reply,"jarvis")

},700)

}


/* ADD MESSAGE */

function addMessage(text,type){

const chat=document.getElementById("chatMessages")

if(!chat) return

const msg=document.createElement("div")

msg.classList.add("message",type)

const time=new Date().toLocaleTimeString([],{
hour:'2-digit',
minute:'2-digit'
})

msg.innerHTML=text+"<br><small>"+time+"</small>"

chat.appendChild(msg)

chat.scrollTop=chat.scrollHeight

}


/* JOURNAL */

function saveJournal(){

const text=document.getElementById("journalText")

if(!text) return

localStorage.setItem("AathmikaJournal",text.value)

const note=document.getElementById("saveNote")

if(note){
note.innerText="Saved ✨"
}

}


window.onload=function(){

const saved=localStorage.getItem("AathmikaJournal")

const journal=document.getElementById("journalText")

if(saved && journal){
journal.value=saved
}

}
