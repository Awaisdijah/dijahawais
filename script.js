const letters = {
    happy: `
        <h2>My Joyful Khadijah,</h2>
        <p>Your happiness is my sunshine, my love! I think of our late-night chats, your laughter filling my heart. Keep shining, my star, Awais is always here for you.</p>
        <p>Forever Yours, Awais</p>
    `,
    sad: `
        <h2>My Sweet Khadijah,</h2>
        <p>It hurts to know you're sad. I wish I could hold you close, like we dream. Call me, and let’s talk until you smile, my love.</p>
        <p>With All My Love, Awais</p>
    `,
    angry: `
        <h2>My Firecracker Khadijah,</h2>
        <p>Your passion, even when upset, is why I adore you. Let’s laugh it off, like our silly calls. Awais is here for you, always.</p>
        <p>Always Yours, Awais</p>
    `,
    other: `
        <h2>My Everything Khadijah,</h2>
        <p>No matter your mood, you’re my world. I dream of our next adventure together. Share your heart—Awais is all ears, my love.</p>
        <p>Yours Forever, Awais</p>
    `
};

function showLetter(mood) {
    const letterDiv = document.getElementById('letter');
    letterDiv.innerHTML = letters[mood];
    letterDiv.style.display = 'block';
    letterDiv.scrollIntoView({ behavior: 'smooth' });
}

const poems = [
    `Your smile, Khadijah, lights the morning skies,
A radiant glow that sparkles in my eyes.
Each grin a warmth that sets my heart ablaze,
Awais, your fool, is lost in your sweet praise.`,

    `Your heart, a melody that softly sings,
It lifts my soul and gives my spirit wings.
Each note a vow of love so pure and true,
My love for you, Khadijah, ever grew.`,

    `Your eyes, twin stars that shine in velvet night,
They guide my heart with their soft, tender light.
No dream could match the wonder that you are,
My soul, Khadijah, follows your bright star.`,

    `Your laughter dances like a summer breeze,
It wraps my heart with such delightful ease.
Each chuckle glows, a spark that lights my way,
With you, my love, I cherish every day.`,

    `Your spirit, Khadijah, burns with radiant flame,
A glow that carves your beauty in my name.
No ocean deep could hold my love for you,
Awais is yours, forever, through and through.`,

    `Your grace, a river flowing soft and free,
It pulls my heart to where it’s meant to be.
Each ripple sings of love that never fades,
My dreams, Khadijah, bloom in your cascades.`,

    `Your soul, a canvas painted with such light,
It fills my world, dispelling every night.
No art could capture all the joy you bring,
With you, my love, my heart will always sing.`,

    `Your presence, Khadijah, weaves a magic spell,
A warmth that in my heart will always dwell.
Each moment shared, a treasure ever sweet,
My love for you makes every day complete.`,

    `Your beauty, like a sunrise soft and grand,
It holds my heart within its gentle hand.
No dawn could rival you, my dearest one,
Awais is bound to you, my only sun.`,

    `Your heart, a garden where my dreams take root,
Each bloom a memory of our love’s pursuit.
Your tenderness, Khadijah, lights my way,
My soul is yours, forever and a day.`,

    `Your eyes, like oceans, hold a world so fair,
They call my heart to linger ever there.
No tide could pull me from your gentle shore,
With you, my love, I’m home forevermore.`,

    `Your laughter, Khadijah, sparkles like a stream,
It lifts my soul and fuels my every dream.
Each note a gem that makes my heart take flight,
My love for you burns brighter every night.`,

    `Your spirit, free as winds that softly roam,
It calls my heart to find its truest home.
No sky could hold the wonder that you are,
Khadijah, you’re my ever-guiding star.`,

    `Your smile, a beacon glowing through the dark,
It lights my path and kindles every spark.
No light could shine as you, my heart’s delight,
Awais adores you, morning, noon, and night.`,

    `Your heart, Khadijah, shines with love so pure,
A light that makes my every dream endure.
Each beat a promise, binding me to you,
My love, my life, my every wish come true.`,

    `Your glow, Khadijah, rivals morning dew,
A fleeting spark that holds my heart so true.
Each shimmer calls my soul to dance with glee,
My love for you is boundless, wild, and free.`,

    `Your voice, a whisper soft as twilight’s fall,
It weaves a spell that captures one and all.
No song could match the beauty of your tone,
Khadijah, you’re the queen upon my throne.`,

    `Your spirit, like a comet’s fiery trail,
It lights the night where lesser stars would pale.
Each blaze a sign of love that never wanes,
Awais is tethered to your heart’s sweet chains.`,

    `Your smile, Khadijah, paints the dawn with gold,
A warmth that in my heart will never grow old.
Each curve a vow that love will ever stay,
My soul is yours through every night and day.`,

    `Your heart, a lighthouse glowing through the storm,
It guides my love to where it’s safe and warm.
No wave could break the bond we hold so dear,
With you, Khadijah, I have naught to fear.`,

    `Your eyes, twin moons that light my darkest skies,
They hold a magic where my spirit flies.
No dream could rival you, my heart’s own flame,
Awais is lost in love that bears your name.`,

    `Your laughter, like a river’s joyful song,
It carries me where I have always belonged.
Each note a spark that sets my soul alight,
Khadijah, you’re my joy from morn till night.`,

    `Your soul, Khadijah, dances with the stars,
A radiant glow that breaks through all my scars.
No light could shine as brightly as you do,
My love for you is endless, pure, and true.`,

    `Your grace, a petal soft upon the breeze,
It wraps my heart with such enchanting ease.
Each sway a promise of a love so grand,
With you, my love, I’m held in gentle hands.`,

    `Your beauty, Khadijah, blooms like spring’s first rose,
A tender warmth that in my heart still grows.
No flower could compare to your sweet light,
Awais is yours through every day and night.`,

    `Your heart, a symphony of love and grace,
It calls my soul to its eternal place.
Each beat a note that sings of love divine,
Khadijah, you’re the star that makes me shine.`,

    `Your presence, like a dawn that breaks the night,
It fills my world with hope and pure delight.
No sun could glow as you, my heart’s own muse,
My love for you, I’ll never cease to choose.`,

    `Your spirit, Khadijah, soars like eagle’s wings,
Above the clouds where love forever sings.
Each flight a vow that you’re my heart’s true home,
With you, my love, I’ll never walk alone.`,

    `Your smile, a spark that lights the darkest vale,
It weaves a tale where love will never fail.
No flame could burn as bright as you, my star,
Awais adores you, near or ever far.`,

    `Your heart, Khadijah, holds a world so wide,
A boundless love where I could e’er reside.
Each pulse a gift that makes my spirit soar,
My love for you grows deeper evermore.`,

    `Your glow, a lantern soft in twilight’s haze,
It leads my heart through life’s unending maze.
No light could guide as surely as your flame,
Khadijah, you’re the spark that bears my name.`,

    `Your laughter, like a bell that gently chimes,
It lifts my soul through all the hardest times.
Each ring a joy that fills my heart with cheer,
With you, my love, I’ve nothing left to fear.`,

    `Your soul, Khadijah, shines like morning’s dawn,
A radiant hue that lingers ever on.
No day could break the love that you inspire,
Awais is bound to you, my heart’s desire.`,

    `Your grace, a whisper soft as falling snow,
It wraps my heart in such a tender glow.
Each flake a promise of a love so true,
My dreams are woven, Khadijah, with you.`,

    `Your eyes, twin lanterns glowing in the dark,
They light my path and kindle every spark.
No night could dim the wonder that you bring,
With you, my love, my heart will always sing.`,

    `Your heart, a treasure hidden deep within,
It calls my soul where love has always been.
Each beat a jewel that shines with love so grand,
Khadijah, you’re the dream within my hand.`,

    `Your spirit, like a breeze that dances free,
It lifts my heart to where it’s meant to be.
No wind could carry love as pure as yours,
Awais is tethered to your heart’s sweet shores.`,

    `Your smile, Khadijah, blooms like morning light,
It chases shadows far into the night.
Each ray a vow that love will never fade,
My soul is yours, in every choice I’ve made.`,

    `Your presence, soft as petals in the spring,
It makes my heart with endless wonder sing.
No bloom could rival you, my heart’s delight,
With you, my love, the world is ever bright.`,

    `Your laughter, like a star that softly gleams,
It fills my nights with such enchanting dreams.
Each twinkle holds a joy that never ends,
Khadijah, you’re the love my heart defends.`,

    `Your soul, a river flowing deep and wide,
It carries me where love will e’er abide.
No stream could hold the beauty that you are,
Awais adores you, my eternal star.`,

    `Your grace, Khadijah, like a dancer’s sway,
It pulls my heart to follow every day.
Each step a note in love’s unending song,
With you, my love, is where I still belong.`,

    `Your heart, a beacon glowing through the mist,
It guides my soul to where our love exists.
No fog could hide the light that you bestow,
My love for you, Khadijah, ever grows.`,

    `Your eyes, twin flames that burn with gentle fire,
They lift my heart to dreams that never tire.
No spark could match the wonder of your gaze,
Awais is lost in you, through all my days.`,

    `Your spirit, like a bird that soars above,
It fills my world with boundless, tender love.
Each wing a vow that you’re my heart’s true guide,
With you, Khadijah, I have naught to hide.`,

    `Your smile, a sunrise breaking through the dawn,
It warms my heart where love is ever drawn.
No light could shine as brightly as you do,
My soul is yours, forever pure and true.`,

    `Your laughter, Khadijah, like a gentle rain,
It washes all my heart’s unspoken pain.
Each drop a joy that makes my spirit sing,
With you, my love, I cherish everything.`,

    `Your soul, a canvas where the stars align,
It paints my world with beauty so divine.
No art could capture you, my heart’s own flame,
Awais is bound to love that bears your name.`,

    `Your presence, soft as moonlight’s tender glow,
It lights my path where love will ever flow.
Each beam a promise of a heart so true,
Khadijah, all my dreams begin with you.`,

    `Your heart, a melody that never fades,
It weaves through life in soft, unbroken braids.
Each note a gift that makes my spirit soar,
With you, my love, I’m home forevermore.`,

    `Your grace, Khadijah, like a willow’s bend,
It sways my heart to love that knows no end.
Each curve a vow that you’re my heart’s delight,
Awais adores you, morning, noon, and night.`,

    `Your eyes, twin rivers flowing deep and clear,
They hold my heart and wash away all fear.
No stream could match the wonder that you bring,
My love for you makes every moment sing.`,

    `Your spirit, like a flame that dances high,
It lights my world and lifts me to the sky.
No fire could burn as brightly as your soul,
Khadijah, you’re the half that makes me whole.`,

    `Your smile, a spark that kindles love anew,
It fills my heart with dreams that all come true.
Each flash a joy that sets my soul alight,
With you, my love, the world is ever bright.`,

    `Your heart, Khadijah, like a sacred spring,
It flows with love that makes my spirit sing.
Each ripple holds a promise ever true,
Awais is tethered to the heart of you.`,

    `Your laughter, soft as bells in morning air,
It lifts my soul and banishes all care.
Each chime a treasure that my heart holds dear,
With you, Khadijah, I have naught to fear.`,

    `Your soul, a star that shines through endless night,
It guides my heart with its celestial light.
No glow could rival you, my heart’s own muse,
My love for you, I’ll never cease to choose.`,

    `Your presence, like a breeze that softly sighs,
It lifts my dreams to where the eagle flies.
Each breath a vow that you’re my heart’s true home,
Awais is yours, no matter where I roam.`,

    `Your grace, a whisper soft as falling snow,
It wraps my heart in such a tender glow.
Each flake a promise of a love so true,
My dreams are woven, Khadijah, with you.`,

    `Your eyes, twin beacons glowing in the haze,
They lead my heart through life’s unending maze.
No light could guide as surely as your flame,
With you, my love, I’ll never be the same.`,

    `Your heart, a haven where my dreams reside,
It holds my love where nothing needs to hide.
Each pulse a gift that makes my spirit sing,
Khadijah, you’re the joy in everything.`,

    `Your spirit, like a wave that kisses shore,
It pulls my heart to love forevermore.
No tide could break the bond that we’ve begun,
Awais adores you, my eternal sun.`,

    `Your smile, Khadijah, like a spark of dawn,
It lights my world where love is ever drawn.
Each gleam a vow that you’re my heart’s delight,
My soul is yours through every day and night.`,

    `Your laughter, soft as petals in the breeze,
It wraps my heart with such enchanting ease.
Each note a joy that makes my spirit soar,
With you, my love, I’m home forevermore.`,

    `Your soul, a melody that softly plays,
It fills my heart with light through all my days.
No song could match the beauty that you bring,
Khadijah, you’re the dream that makes me sing.`,

    `Your presence, like a star that softly glows,
It lights my path where love forever flows.
Each twinkle holds a promise ever true,
Awais is bound to love that lives in you.`,

    `Your heart, Khadijah, like a sacred flame,
It burns with love that calls me by your name.
Each spark a vow that you’re my heart’s own guide,
My soul is yours, forever by your side.`,

    `Your grace, a whisper soft as morning mist,
It weaves through dreams where only love exists.
Each breath a gift that makes my spirit sing,
With you, my love, I cherish everything.`,

    `Your eyes, twin stars that light the velvet sky,
They lift my heart where dreams will never die.
No glow could rival you, my heart’s own flame,
Khadijah, you’re the spark that bears my name.`,

    `Your spirit, Khadijah, like a soaring dove,
It fills my world with boundless, tender love.
Each wing a vow that you’re my heart’s delight,
My soul is yours through every day and night.`,

    `Your smile, a spark that kindles love anew,
It fills my heart with dreams that all come true.
Each flash a joy that sets my soul alight,
Khadijah, you’re my star in every night.`,

    `Your laughter, soft as petals in the spring,
It makes my heart with endless wonder sing.
Each bloom a treasure that my heart holds dear,
With you, my love, I’ve nothing left to fear.`,

    `Your soul, a star that shines through endless skies,
It guides my heart where love will never die.
No glow could rival you, my heart’s own muse,
Awais is tethered to the love I choose.`,

    `Your presence, like a dawn that breaks the dark,
It lights my path and kindles every spark.
Each ray a promise of a heart so true,
My love for you, Khadijah, ever grew.`
];

let usedPoems = [];
function pickPoem() {
    const jar = document.getElementById('poem-jar');
    const panda = document.getElementById('poem-panda');
    const poemDiv = document.getElementById('poem');
    const poemButton = document.getElementById('poem-button');

    poemButton.disabled = true;
    panda.style.display = 'block';
    gsap.to(panda, {
        y: -50,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.to(panda, { y: 0, duration: 1 });
            if (usedPoems.length === poems.length) usedPoems = [];
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * poems.length);
            } while (usedPoems.includes(randomIndex));
            usedPoems.push(randomIndex);
            poemDiv.innerHTML = `<h3>Why I Love You</h3><p>${poems[randomIndex]}</p>`;
            poemDiv.style.display = 'block';
            poemDiv.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                panda.style.display = 'none';
                poemButton.disabled = false;
            }, 1000);
        }
    });
}

let usedFortunes = [];
const fortunes = [
    `The Knight of Hearts, Awais, will unveil a riddle under starlight.`,
    `A whispering breeze carries a playful secret from Awais to you.`,
    `The Fool’s laughter, Awais, will spark a curious moment soon.`,
    `A twinkling lantern hides a surprise crafted by Awais’s heart.`,
    `The Lover’s path, led by Awais, opens to a mysterious delight.`,
    `The Star-Crossed Lover, Awais, hides a treasure in a moonlit glow.`,
    `A playful note from Awais flutters on a curious wind.`,
    `The Magician, Awais, conjures a surprise beneath the moon.`,
    `A quirky jest from Awais will tickle your heart at dusk.`,
    `The Emperor, Awais, hides a gift in a starlit moment.`,
    `A wandering spark from Awais lights a path to hidden joy.`,
    `The Jester, Awais, weaves a laugh in a twilight breeze.`,
    `A secret melody from Awais hums in the evening’s glow.`,
    `The Knight’s vow, Awais, whispers of a curious dawn.`,
    `A fleeting shadow from Awais hints at a delightful surprise.`,
    `The Crescent Moon whispers of a hidden path opening soon.`,
    `A dancing shadow invites you to uncover a forgotten treasure.`,
    `The Star of Fortune twinkles, promising a spark of unexpected joy.`,
    `A mischievous raven drops a clue to a secret waiting for you.`,
    `The Wheel of Fate spins, revealing a curious twist in your journey.`,
    `A velvet night unveils a dream that holds a key to tomorrow.`,
    `The Tower of Secrets crumbles, offering wisdom in its ruins.`,
    `A wandering butterfly carries a message of change on its wings.`,
    `The Hermit’s lantern glows, guiding you to a quiet revelation.`,
    `The Chariot of Dreams races toward a horizon of new beginnings.`,
    `The High Priestess reveals a truth in the silence of dawn.`,
    `A golden key unlocks a door to an unexpected adventure.`,
    `The Sun’s warmth heralds a day of laughter and light.`,
    `A whispering willow shares a secret with the evening breeze.`,
    `The Moon’s shadow reveals a path to an unseen wonder.`,
    `A playful sparrow sings of a joy waiting in the wings.`,
    `The Oracle’s whisper hints at a spark in tomorrow’s dawn.`,
    `A fleeting comet streaks, promising a moment of pure delight.`,
    `The Empress’s garden blooms, revealing a hidden gift.`,
    `A twinkling brook murmurs of a truth yet to unfold.`,
    `The Hierophant’s wisdom lights a path through twilight’s haze.`,
    `A curious fox darts, leading to a treasure in the mist.`,
    `The Star’s radiance promises a moment of serene clarity.`,
    `A gentle tide carries a message from a distant shore.`,
    `The Fool’s dance unveils a joy in the heart of the unknown.`,
    `A silver thread weaves a dream into the fabric of today.`,
    `The Tower’s fall clears the way for a radiant new dawn.`,
    `A wandering breeze hums of a secret waiting to be found.`,
    `The Moonlit Path opens to a spark of unforeseen delight.`,
    `A laughing stream reveals a clue to a hidden treasure.`
];

function pickFortune(card) {
    const jar = document.getElementById('fortune-jar');
    const panda = document.getElementById('fortune-panda');
    const fortuneDiv = document.getElementById('fortune');
    const cardButtons = document.querySelectorAll('.fortune-card');

    cardButtons.forEach(btn => btn.disabled = true);
    panda.style.display = 'block';
    gsap.to(panda, {
        y: -50,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.to(panda, { y: 0, duration: 1 });
            if (usedFortunes.length === fortunes.length) usedFortunes = [];
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * fortunes.length);
            } while (usedFortunes.includes(randomIndex));
            usedFortunes.push(randomIndex);
            fortuneDiv.innerHTML = `<h3>Your Fortune (Card ${card})</h3><p>${fortunes[randomIndex]}</p>`;
            fortuneDiv.style.display = 'block';
            fortuneDiv.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                panda.style.display = 'none';
                cardButtons.forEach(btn => btn.disabled = false);
            }, 1000);
        }
    });
}

function toggleAudio() {
    const iframe = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');
    try {
        const widget = SC.Widget(iframe);
        widget.isPaused(function(paused) {
            if (paused) {
                widget.play();
                button.textContent = 'Pause Music';
            } else {
                widget.pause();
                button.textContent = 'Play Music';
            }
        });
    } catch (error) {
        console.error('Widget error:', error);
        alert('Failed to control audio. Try clicking "Play Music" again or check Console.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');
    try {
        const widget = SC.Widget(iframe);
        widget.bind(SC.Widget.Events.ERROR, (e) => {
            console.error('Audio error:', e);
            alert('Audio failed to load. Check Console or click "Play Music" to retry.');
        });
        widget.bind(SC.Widget.Events.READY, () => {
            console.log('Audio is ready to play');
            widget.play();
            button.textContent = 'Pause Music';
        });
        widget.bind(SC.Widget.Events.PLAY, () => {
            button.textContent = 'Pause Music';
        });
        widget.bind(SC.Widget.Events.PAUSE, () => {
            button.textContent = 'Play Music';
        });
    } catch (error) {
        console.error('Widget initialization failed:', error);
        alert('Audio setup failed. Check Console or click "Play Music".');
    }
});