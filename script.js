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

"Hey. Put the phone down. Go drink some water. I'll still be annoying when you get back.",

"You're allowed to have a bad day. You're not allowed to have it alone.",

"I know you're strong. I've seen it. But even strong people get to sit down sometimes.",

"Stop overthinking. Your brain is lying to you again. It does that.",

"You don't have to be okay right now. Just be here. That's enough.",

"Missing me? Bold of you to have good taste.",

"I'm not going anywhere. Not because I can't, but because I genuinely don't want to.",

"You can be sad. You can be tired. You can be a complete mess. I signed up for all of it.",

"Go outside for five minutes. Not to fix anything. Just to remember the world is bigger than whatever is in your head right now.",

"You make everything better just by existing. Annoying but true.",

"Talk to me. Or don't. Either way I'm here making bad jokes until you smile.",

"You're not a burden. You're the whole point.",

"Eat something. Drink water. Rest. I know you haven't done at least one of those today.",

"I don't need you to be strong right now. I just need you to be you.",

"Whatever it is, we'll figure it out. We always do. We're kind of annoyingly good at that.",

"Stop being so hard on yourself. That's my job and even I don't do it.",

"You've survived every bad day so far. That's a hundred percent success rate.",

"I miss you when you're sad because I can't reach you there. Come back.",

"You don't have to explain yourself to me. I already get it.",

"Some days are just trash. That's not failure, that's just a Tuesday.",

"I'd pick you on your worst day over anyone else on their best. That's just facts.",

"You're allowed to need people. Especially me. I actually like being needed by you.",

"Breathe. Not the shallow kind. A real one. Right now. I'll wait.",

"Hey. I see you. Even when you think you're invisible.",
]


const puns = [

"Doctor: 'You need to stop eating so much chocolate and wine.' Me: 'I need a second opinion.' Doctor: 'Fine. Your outfit is also terrible.'",

"Doctor said I need to watch my drinking. Now I do it in front of a mirror.",

"Doctor: 'How's your sleep?' Me: 'I fall asleep fine. I wake up at 3am and mentally replay every embarrassing thing I've done since 2009.' Doctor: '...I'll need a bigger notepad.'",

"Doctor told me I need to reduce stress. I laughed for ten minutes. He wrote something down. I think it concerned him.",

"Doctor: 'Any history of mental illness in the family?' Me: 'I have a group chat with them. Does that count?'",

"Doctor asked me to rate my pain from one to ten. I said 'emotionally or physically?' She pulled up a chair. We were there a while.",

"Doctor told me I need more iron. So now I do absolutely nothing but feel guilty about it with more energy.",

"Knock knock. Who's there? Dishes. Dishes who? Dishes the police — just kidding, it's the laundry you've been ignoring for four days.",

"Knock knock. Who's there? Opportunity. Opportunity who? Exactly. You almost didn't answer. That's your whole pattern.",

"Knock knock. Who's there? Wine. Wine who? Wine are you still awake at 2am? Same reason you are.",

"Knock knock. Who's there? Closure. Closure who? Exactly. You never get the full sentence either.",

"Knock knock. Who's there? Adore. Adore who? Adore is between us so open up, I have snacks and zero plans to leave.",

"Knock knock. Who's there? Butter. Butter who? Butter check your phone, your mother texted seven times and she says it's not urgent which means it's very urgent.",

"Knock knock. Who's there? Atch. Atch who? Bless you. Also, go to the doctor. Also, drink water. Also, are you okay?",

"Knock knock. Who's there? Cow says. Cow says who? No silly, cow says MOO — but honestly after a full day of meetings I relate to both.",

"My skincare routine has twelve steps. Step one through eleven is convincing myself to start, Step twelve is going to bed without doing it.",

"My bank account and my confidence have one thing in common — both drop the moment I enter a mall.",

"Men say women are hard to understand. Sir, you put the milk back with one sip left in it.",

"I asked my boyfriend to fix one thing in the house. We now have a hammer on the coffee table and a YouTube tutorial paused on TV.",

"Being a mom means never going to the bathroom alone again. Even the dog follows me. I have no privacy. The plants feel me.",

"Motherhood is saying 'because I said so' and slowly hearing your own mother's voice come out of your body.",

"I put 'detail-oriented' on my resume. My desk has three mugs, a lip balm I lost six months ago, and a sticky note that just says 'NO.'",

"My performance review said I 'work well independently.' That's corporate for 'she doesn't need us and it's a little intimidating.'",

"I have a love-hate relationship with email. I hate it. It loves showing up.",

"I joined a Zoom call on mute for twenty minutes. Nobody noticed. I may not exist.",

"I cook five days a week. Day one: real meal. Day two: leftovers. Day three: leftovers of leftovers. Day four: cereal. Day five: wine IS a food group.",

"I'm on a seafood diet. I see food, I feel guilty, I eat it anyway, yes, it's a diet.",

"I stress-ate an entire family-size bag of chips alone. The family size was a suggestion. I don't take suggestions.",

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
