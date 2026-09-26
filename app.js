const campaignStart = "2026-10-01";
const birthday = "2026-10-31";

const messages = [
  ["Good morning, my love. 🥹❤️", "Only 30 days until your special day, but honestly, every day feels special because I have you in my life. I wish I could give you a hug right now and remind you how much you mean to me. Your birthday countdown starts today, my love. 💗"],
  ["Good morning, my little princess. 🥹❤️", "If I could send you one thing with this message, it would be a warm hug and a thousand kisses. You deserve beautiful mornings, peaceful nights, and all the love my heart can give. Only 29 days until we celebrate you. 🥰"],
  ["Good morning, my sweet heart. 🥹", "Sometimes I wonder how one person can become such a big part of someone’s world. Then I think of you, and I understand. You are my favourite thought, my favourite person, and my sweetest feeling. ❤️"],
  ["Good morning, my lovely girl. ❤️", "I hope something makes you smile today, even if it’s something small. And if your day becomes difficult, remember that somewhere there’s a heart that cares about you so deeply. Sending you my biggest hug, mammaaaa. 🤗"],
  ["Good morning, mera bacha. 🥹❤️", "If I were beside you, I’d probably annoy you with kisses until you told me to stop—and then I’d ask for one more. You make my heart feel at home in the sweetest way. I hope today treats you gently. 💋"],
  ["Good morning, my rusmali. ❤️", "Twenty-five days to go, and I already feel excited thinking about your smile on your birthday. I hope you always know that you don’t have to be perfect to be loved. You are precious to me exactly as you are. 🥹💕"],
  ["Good morning, mammaaaaa. 🥰", "I wish I could collect all the little moments that make me think of you and put them in a box. Your laugh, your words, your silly side, and even the moments when you act angry at me. Every little part feels special. ❤️"],
  ["Good morning, my sweetest mammaaaa ji. ❤️", "I don’t need a special reason to love you, but today I want to remind you anyway: you matter to me, your feelings matter to me, and your happiness matters to me. I hope your morning begins with a smile. 🥹"],
  ["Good morning, my little princess. 💗", "Today’s tiny reminder: drink some water, take care of yourself, and don’t forget that you are loved. If I were there, I’d fix your hair, steal a kiss, and tell you how cute you are until you got shy. 😚"],
  ["Good morning, my love. 🥹", "Three weeks until your birthday month countdown reaches its final days. But I don’t want to celebrate only one day of you. I want to appreciate the ordinary days, the random conversations, the laughter, and every little memory we make together. ❤️"],
  ["Good morning, cutie pie. ❤️", "Only 20 days! If excitement could be sent through a phone, you’d be receiving a whole truckload of it right now. I hope you know how much joy your existence brings into my world. Sending you cuddles and unlimited kisses. 💋"],
  ["Good morning, my lovely mammaaaa. ❤️", "There are so many things I could say, but sometimes the simplest words are the truest: I care about you. I miss you when you’re away. I love seeing you happy. And I feel lucky that you are part of my life. 🥰"],
  ["Good morning, my baby. 🥹❤️", "I hope you slept well. Imagine me sitting beside you this morning, gently disturbing your sleep and saying, “Wake up, my beautiful girl.” Then I’d probably ask for a sleepy smile and a hug. Until I can do that, here’s a message full of love. 💗"],
  ["Good morning, sweet heart. ❤️", "You deserve a day filled with little joys: good food, peaceful moments, kind words, and reasons to laugh. And if nobody has told you yet today, let me be the first to say that you are incredibly special to me. 🥹"],
  ["Good morning, my rusmali. 🥰", "Sixteen days until your birthday, but today I want to celebrate the way you make even ordinary conversations feel special. You have your own little place in my heart, and nobody else can fill it the same way. ❤️"],
  ["Good morning, mammmmmmaaa. ❤️", "We’re halfway through the countdown! I wish I could show you all the love I carry in my heart instead of trying to fit it into a message. Until then, remember this: you are thought of, cared for, and loved more than these words can explain. 🥹💕"],
  ["Good morning, my little princess. 💗", "Two weeks until your birthday! If I could plan your morning, it would include your favourite things, a big hug, something delicious, and me reminding you every five minutes that you’re cute. Please accept this virtual kiss for now. 😘"],
  ["Good morning, my lovely girl. ❤️", "I hope you never feel that you have to carry everything alone. I may not always have the perfect words, but I want to listen, understand, and stand beside you. You mean so much to me, mammaaaa. 🥹"],
  ["Good morning, mera bacha. 🥰", "Twelve days to go! I hope something unexpectedly beautiful happens to you today. And if it doesn’t, I hope this message gives you one small reason to smile. Now go be your adorable self—but don’t forget that you’re my favourite troublemaker. ❤️"],
  ["Good morning, my sweetest mammaaaa ji. ❤️", "I wish I could pause some moments with you and keep them forever—the simple ones, the funny ones, and the ones where we don’t even need to say much. You make memories feel more meaningful. 🥹"],
  ["Good morning, mammmmmmaaa! 🥳❤️", "Ten days left! The countdown is getting closer, and my excitement is getting bigger. I hope your day is as lovely as your smile and as warm as the comfort you bring me. Sending you ten imaginary hugs and one real promise: you are deeply loved. 💗"],
  ["Good morning, cutie pie. ❤️", "Nine days! If I were with you, I’d probably look at you for a few seconds too long and then pretend I wasn’t staring. You have a way of making my heart feel silly and serious at the same time. I love that about you. 🥹"],
  ["Good morning, my sweet heart. 💕", "Eight days until your birthday! I hope you remember that your worth isn’t measured by how productive you are or how perfect your day goes. You are valuable simply because you are you. And I am so happy I get to love you. ❤️"],
  ["Good morning, my mammmmmmaaa. 🥹❤️", "Only one week left! Seven days until we celebrate the day a beautiful soul came into this world. I hope this next week brings you excitement, laughter, and lots of love. And yes, you are getting another kiss through this screen. 💋"],
  ["Good morning, my lovely mammaaaa. ❤️", "Six days! I hope today reminds you of how many beautiful things you deserve. I want you to laugh freely, rest without guilt, and feel loved even in the quiet moments. You are one of my favourite parts of life. 🥹"],
  ["Good morning, my little princess. 💗", "Five days left! Your birthday is coming closer, but here’s a secret: I don’t need a calendar to remember how special you are. My heart keeps reminding me every day. Now smile, drink some water, and accept a very tight virtual hug. 🤗❤️"],
  ["Good morning, my rusmali. 🥹❤️", "Just four days left! I keep imagining your birthday smile, and it makes me smile too. I hope you feel celebrated not only on your birthday, but on the days when you need a little extra love. I’m sending you plenty today. 💗"],
  ["Good morning, mammaaaaa! ❤️", "Only three more days! Your special day is almost here, and I wish I could wrap all my love into a gift box and place it in your hands. Until then, let this little message remind you that you are loved, missed, and treasured. 💋"],
  ["Good morning, my sweetest girl. 🥹❤️", "Only two more days! I’m getting more excited to celebrate you, but I hope you know that you don’t need a birthday or a special occasion to be appreciated. You are important to me on every ordinary day, too. Sending you the softest hug and the sweetest kiss. 💋"],
  ["Good morning, my love. ❤️", "Tomorrow is your special day! 🎂 I can’t explain how excited I am to celebrate the beautiful girl who means so much to me. If I could be beside you right now, I’d hold you close, kiss your forehead, and tell you how deeply I love you. One more sleep, my baby. Tomorrow is all about you. 💋🥹💕"],
  ["Good morning, my birthday girl! 🥹🎂❤️", "Happy Birthday to my lovely mammaaaa, my sweet heart, my little princess, and my favourite person. Today is your day, but I hope you feel loved every single day of your life. Thank you for being you—for your smile, your little habits, your cute moments, and all the memories that make my heart happy. I wish you happiness that stays, peace that comforts you, and dreams that come true. I wish I could hold you close, look into your eyes, and say all of this while giving you a thousand kisses. Until then, please feel all the love I am sending you. Happy Birthday, my sweetest mammaaaa ji. I love you. Today, tomorrow, and through all the little moments we have ahead. 💋🥹❤️🎉"]
];

function indiaDateString() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function calendarDaysBetween(from, to) {
  const [fy, fm, fd] = from.split("-").map(Number);
  const [ty, tm, td] = to.split("-").map(Number);
  return Math.round((Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd)) / 86400000);
}

function getState() {
  const today = indiaDateString();
  if (today < campaignStart) return { mode: "waiting", days: calendarDaysBetween(today, campaignStart) };
  if (today === birthday) return { mode: "birthday", days: 0 };
  if (today > birthday) return { mode: "after", days: 0 };
  return { mode: "countdown", days: calendarDaysBetween(today, birthday) };
}

function render() {
  const state = getState();
  const countdown = document.querySelector("#countdown");
  const countdownText = document.querySelector("#countdownText");
  const letterTitle = document.querySelector("#letterTitle");
  const letterText = document.querySelector("#letterText");

  if (state.mode === "waiting") {
    countdown.textContent = state.days;
    countdownText.textContent = state.days === 1 ? "day until our 30-day surprise begins" : "days until our 30-day surprise begins";
    letterTitle.textContent = "Something lovely is coming… 💌";
    letterText.textContent = "Your 30 little morning love letters begin on October 1. Come back then, mammmmmmaaa — I have something special waiting for you. ❤️";
    return;
  }

  if (state.mode === "birthday") {
    countdown.textContent = "❤️";
    countdownText.textContent = "TODAY IS YOUR SPECIAL DAY";
    letterTitle.textContent = messages[30][0];
    letterText.textContent = messages[30][1];
    return;
  }

  if (state.mode === "after") {
    countdown.textContent = "∞";
    countdownText.textContent = "more mornings to love you";
    letterTitle.textContent = "Every day is still yours. ❤️";
    letterText.textContent = "The birthday surprise may be over, but the love behind it isn’t. Come back whenever you want a little reminder of how loved you are, mammmmmmaaa. 💗";
    return;
  }

  const index = 30 - state.days;
  const message = messages[index];
  countdown.textContent = state.days;
  countdownText.textContent = state.days === 1 ? "day until your birthday" : "days until your birthday";
  letterTitle.textContent = message[0];
  letterText.textContent = message[1];
}

render();
setInterval(render, 60000);
