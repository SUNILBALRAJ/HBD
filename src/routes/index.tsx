import { createFileRoute } from "@tanstack/react-router";
import { Heart, Music2, Pause, Play, RotateCcw, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import fieldPhoto from "../assets/memory-field.jpg";
import handsPhoto from "../assets/memory-hands.jpg";
import lakePhoto from "../assets/memory-lake.jpg";
import cafePhoto from "../assets/memory-cafe.jpg";
import childhoodOne from "../assets/childhood-one.jpg";
import childhoodTwo from "../assets/childhood-two.jpg";
import childhoodThree from "../assets/childhood-three.jpg";

import popcutPhoto from "../assets/popcut.jpg";
import famPhoto from "../assets/fam.jpg";
import dancerPhoto from "../assets/dancer.jpg";
import krishnaPhoto from "../assets/krishna.jpg";
import cutiePhoto from "../assets/cutie.jpg";
import smallSareePhoto from "../assets/small_saree.jpg";
import teddyPhoto from "../assets/teddy.png";
import icePhoto from "../assets/ice.png";
import greenKurtaPhoto from "../assets/green-kurta.png";
import greenSareePhoto from "../assets/green_saree.jpg";
import chubbyPhoto from "../assets/chubby.jpg";
import goofyPhoto from "../assets/goofy.jpg";
import blueSareePhoto from "../assets/blue_saree.png";
import purplePhoto from "../assets/purple.jpg";
import startPhoto from "../assets/start.png";
import firstPhoto from "../assets/first.png";
import chaosPhoto from "../assets/chaos.png";
import todayPhoto from "../assets/today.png";
import onamPhoto from "../assets/onam.png";
import songAudio from "../assets/Mayanadhi.mp3";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "In a World With You — A Birthday Love Letter" },
      { name: "description", content: "A tiny universe made to celebrate the most wonderful person in mine." },
      { property: "og:title", content: "In a World With You" },
      { property: "og:description", content: "A birthday love letter, made of memories, stars, and endless gratitude." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayStory,
});

type Memory = { image: string; caption: string; note: string };

const memories: Memory[] = [
  { image: popcutPhoto, caption: "Look at this cutie 🥺", note: "How can someone look this cute 🥺 " },
  { image: famPhoto, caption: "Your small world", note: "I would like to be included in your world 🥺" },
  { image: dancerPhoto, caption: "Goofy ass dancer 🤣", note: "You are the goofiest person I know doing the most random thing unexpectedly 🤣" },
  { image: krishnaPhoto, caption: "My Little Angel", note: "You are always my sweet little angel" },
  { image: cutiePhoto, caption: "One of my favorite smiles.", note: "You have no idea how much brighter everything gets when you laugh" },
  { image: smallSareePhoto, caption: "An ordinary little magic.", note: "The magic you bring into life is inimitable" },
  { image: teddyPhoto, caption: "Small things that make you happy", note: "The laugh that made me fall head over heels in love with you" },
  { image: icePhoto, caption: " The Thing you love more than anyone", note: "I know no matter how much ever sad you feel I know for a fact that food will make you happy 🤣" },
  { image: greenKurtaPhoto, caption: "Achooo my babyy", note: "The amount of cuteness aggression that I get from seeing this picture is unhealthy" },

];

const reasons = [
  "The way you make me feel safe and loved",
  "The way you get excited about little things",
  "The way you care about people",
  "Your wonderfully random conversations",
  "Your crooked teeth smile 😂",
  "The way you randomly say 'I love you' and make my day",
  "The way you make me laugh until my stomach hurts",
  "Your kindness, empathy, honesty, and love for the people around you",
  "The way you make me feel like the luckiest person alive",
  "Your love for food and your cute little foodie habits",
];

const timeline = [
  { icon: "🌱", title: "The Beginning", label: "The day we met", copy: "I didn't know it then, but this was the beginning of something incredibly special.", image: startPhoto },
  { icon: "💕", title: "The First Memory", label: "The moment it all felt real", copy: "I still remember the little details—the walk, laughs, the kind time never manages to erase.", image: firstPhoto },
  { icon: "😂", title: "The Chaos", label: "When you started tolerating me", copy: "Somehow the ridiculous moments became some of my favorites.", image: chaosPhoto },
  { icon: "🥰", title: "Today", label: "And somehow we're here", copy: "Still choosing each other. Still making our own tiny universe.", image: todayPhoto },
];

function BirthdayStory() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<Memory | null>(null);
  const [reasonCount, setReasonCount] = useState(0);
  const [hearts, setHearts] = useState<number[]>([]);
  const [letterOpen, setLetterOpen] = useState(false);
  const [candleOut, setCandleOut] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => () => audioRef.current?.pause(), []);

  const sparkle = (event: React.MouseEvent<HTMLElement>) => {
    const next = { id: Date.now(), x: event.clientX, y: event.clientY };
    setSparkles((current) => [...current.slice(-8), next]);
    window.setTimeout(() => setSparkles((current) => current.filter((item) => item.id !== next.id)), 850);
  };

  const revealReason = () => {
    if (reasonCount < reasons.length) {
      setReasonCount((count) => count + 1);
      setHearts((current) => [...current.slice(-9), Date.now()]);
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  };

  if (!opened) {
    return (
      <main className="opening-screen">
        <Petals />
        <div className="opening-stars" aria-hidden="true">✦　·　✧　·　✦</div>
        <div className="opening-copy animate-fade-in">
          <p className="handwritten opening-kicker">October 11 · a very special day</p>
          <h1>Today isn't just<br />another day.</h1>
          <p>It's the day the world became a little more beautiful. 🌷</p>
          <p>Because you were born.</p>
          <div className="opening-rule"><span>♡</span></div>
          <h2>Happy Birthday, my sweetttt kaadhuuu</h2>
          <button className="love-button" onClick={() => setOpened(true)}>
            Open your birthday surprise <span aria-hidden="true">💌</span>
          </button>
        </div>
        <p className="opening-foot handwritten">made with all my heart</p>
      </main>
    );
  }

  return (
    <main className={`story ${playing ? "music-playing" : ""}`} onClick={sparkle}>
      <Petals />
      {sparkles.map((item) => <span key={item.id} className="click-sparkle" style={{ left: item.x, top: item.y }}>✦</span>)}
      <nav className="keepsake-nav" aria-label="Story progress">
        <span>in a world with you</span><span aria-hidden="true">♡</span>
      </nav>

      <section className="lucky-section paper-section">
        <div className="section-heading">
          <p className="eyebrow">chapter one</p>
          <h2>I am soooooo luckyyyyy…</h2>
        </div>
        <div className="lucky-layout">
          <div className="portrait-wrap">
            <span className="doodle doodle-one">♡</span><span className="doodle doodle-two">you, always</span>
            <img src={greenSareePhoto} alt="A dreamy moment in a wildflower field" width={1024} height={1280} />
            <p className="photo-date handwritten">my favorite human</p>
          </div>
          <div className="lucky-copy">
            <p className="lead">I don't know what I did to deserve you.....🥺🥺</p>
            <p>After so many hints 😅😅 finallyyy We are together 😝😝 </p>
            <p>And honestly… <strong>I'm just really, really lucky.</strong></p>
            <div className="lucky-list handwritten">
              <span>Lucky that I get to know you.</span><span>Lucky that I get to make memories with you.</span><span>Lucky that I get to hear your laugh.</span><span>Lucky that I get to exist in the same little corner of the universe as you. ❤️❤️❤️❤️❤️❤️❤️</span>
            </div>
          </div>
        </div>
        <div className="infinity-note"><strong>∞</strong><span>reasons I'm grateful for you</span></div>
      </section>

      <section className="twenties-section paper-section">
        <div className="twenties-intro">
          <p className="eyebrow">a brand new decade</p>
          <p className="handwritten twenties-kicker">goodbye, teenage years ♡</p>
          <h2>Officially entering your 20s!</h2>
          <p className="twenties-lead">No longer a teenager—though you’ll always be this little cutie somewhere in my heart.</p>
          <p>From the sweet little girl in these photographs to the incredible woman you are today, every version of you has carried the same beautiful light.</p>
          <p>Here’s to leaving the teenage chapter behind and stepping into your twenties: more dreams, more laughter, more adventures, and a whole new decade of becoming even more you.</p>
          <div className="twenty-badge" aria-label="Celebrating twenty years"><strong>20</strong><span>years of you</span></div>
        </div>
        <div className="childhood-collage" aria-label="Childhood photo placeholders">
          <figure className="childhood-photo childhood-photo-one">
            <span className="tape" aria-hidden="true" />
            <img src={chubbyPhoto} alt="Temporary childhood photo placeholder at age four" loading="lazy" width={768} height={960} />
            <figcaption className="handwritten">the sweetest beginning</figcaption>
          </figure>
          <figure className="childhood-photo childhood-photo-two">
            <span className="tape" aria-hidden="true" />
            <img src={goofyPhoto} alt="Temporary childhood photo placeholder at age seven" loading="lazy" width={768} height={960} />
            <figcaption className="handwritten">that smile, always ✿</figcaption>
          </figure>
          <figure className="childhood-photo childhood-photo-three">
            <span className="tape" aria-hidden="true" />
            <img src={blueSareePhoto} alt="Temporary childhood birthday photo placeholder" loading="lazy" width={768} height={960} />
            <figcaption className="handwritten">birthday girl, then & now</figcaption>
          </figure>
          <span className="childhood-note handwritten">keep smiling and spreading love always</span>
          <span className="childhood-doodle" aria-hidden="true">20 ✦</span>
        </div>
      </section>

      <section className="gallery-section paper-section">
        <div className="section-heading centered"><p className="eyebrow">♡ your memories ♡</p><h2>A Gallery of My Favorite Human</h2><p>Little windows into my favorite world.</p></div>
        <div className="scrapbook-wall">
          {memories.map((memory, index) => (
            <button key={memory.caption} className={`polaroid polaroid-${index + 1}`} onClick={(event) => { event.stopPropagation(); setSelected(memory); }} aria-label={`Open memory: ${memory.caption}`}>
              <span className="tape" aria-hidden="true" />
              <img src={memory.image} alt="A cherished shared memory" loading="lazy" width={1024} height={1280} />
              <span className="handwritten">{memory.caption}</span>
            </button>
          ))}
          <span className="wall-note note-a">you + me</span><span className="wall-note note-b">✦ forever, please</span><span className="wall-heart">♡</span>
        </div>
      </section>

      <section className="reasons-section paper-section">
        <div className="section-heading centered"><p className="eyebrow">chapter three</p><h2>Things I Love About You</h2><p>Tap the heart. I dare you.</p></div>
        <div className="heart-machine">
          <button className="big-heart" onClick={(event) => { event.stopPropagation(); revealReason(); }} aria-label="Reveal another thing I love">
            <Heart fill="currentColor" strokeWidth={1.5} />
          </button>
          {hearts.map((heart, index) => <span key={heart} className={`floating-love floating-love-${index % 4}`} aria-hidden="true">♥</span>)}
        </div>
        <div className="reasons-list" aria-live="polite">
          {reasons.slice(0, reasonCount).map((reason, index) => <p key={reason} className="reason-line"><span>♡</span>{reason}</p>)}
          {reasonCount === 0 && <p className="reason-placeholder handwritten">there's a lot waiting in here…</p>}
          {reasonCount === reasons.length && <div className="forever-note"><p>Okay okay…</p><strong>I could keep going forever.</strong></div>}
        </div>
      </section>

      <section className="universe-section">
        <div className="star-field" aria-hidden="true"><span>✦</span><span>·</span><span>✧</span><span>·</span><span>✦</span><span>⋆</span><span>·</span><span>✧</span></div>
        <div className="universe-copy"><p className="eyebrow">somewhere in the cosmos</p><h2>In Another Universe…</h2><p>There are billions of people.<br />Millions of places.<br />Thousands of possibilities.</p><p>And somehow…</p><p className="cosmic-line">I get to live in the universe where I met you.</p><p>And if there are a million other universes, I'd still hope I find you in every single one. 🌙</p></div>
        <div className="moon-portrait"><img src={purplePhoto} alt="A sunset memory beneath a lavender sky" loading="lazy" width={1024} height={1280} /><span className="orbit orbit-one" /><span className="orbit orbit-two" /></div>
      </section>

      <section className="timeline-section paper-section">
        <div className="section-heading centered"><p className="eyebrow">chapter five</p><h2>Our Little Timeline</h2><p>A few chapters. A thousand tiny moments.</p></div>
        <div className="timeline">
          {timeline.map((item, index) => <article className="timeline-item" key={item.title}><div className="timeline-marker">{item.icon}</div><div className="timeline-photo"><img src={item.image} alt="A moment from our story" loading="lazy" width={1024} height={1280} /></div><div className="timeline-copy"><p className="eyebrow">0{index + 1}</p><h3>{item.title}</h3><strong>{item.label}</strong><p>“{item.copy}”</p></div></article>)}
        </div>
      </section>

      <section className="song-section paper-section">
        <div className="section-heading centered"><p className="eyebrow">press play</p><h2>A Song For You</h2></div>
        <div className="cassette">
          <audio ref={audioRef} src={songAudio} preload="none" loop onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onTimeUpdate={(event) => {
            const { currentTime, duration } = event.currentTarget;
            if (Number.isFinite(duration) && duration > 0) {
              setAudioProgress((currentTime / duration) * 100);
            }
          }} />
          <div className="cassette-label"><span>♡ FOR YOU ♡</span><strong>YOUR FAVOURITE SONG</strong><small>Maya Nadhi · Hope you like it ♡</small></div>
          <div className="tape-window"><span className={playing ? "reel spinning" : "reel"} /><Music2 /><span className={playing ? "reel spinning" : "reel"} /></div>
          <div className="music-progress"><span style={{ width: `${audioProgress}%` }} /></div>
          <button className="round-control" onClick={(event) => { event.stopPropagation(); toggleMusic(); }} aria-label={playing ? "Pause melody" : "Play melody"}>{playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}</button>
        </div>
        <p className="handwritten song-note">every love story deserves its own soundtrack</p>
      </section>

      <section className="letter-section paper-section">
        <div className="section-heading centered"><p className="eyebrow">something from my heart</p><h2>I wrote something for you.</h2></div>
        {!letterOpen ? <button className="envelope" onClick={(event) => { event.stopPropagation(); setLetterOpen(true); }} aria-label="Open the letter"><span className="envelope-flap" /><span className="wax-seal">♡</span><span className="handwritten">for my love</span></button> : <article className="love-letter animate-scale-in"><span className="letter-tape" /><p className="handwritten salutation">My sweet kaadhu,</p><div className="typed-letter"><p>I love you sooooo mucchhhhh, HAPPY BIRTHDAY TO YOU KAADHUUU, enjoy the day, always be happy and stay happy, you desserve all the love in the world ♡. Today is your birthday, but somehow I feel like I'm the one who got the gift.</p><p>Because I get to know you. I get to laugh with you. I get to make memories with you. And I get to call you mine.</p><p>I don't know what the future has planned for us, but I know one thing:</p><p>I'm so grateful that you're part of my world.</p><p><strong>Happy Birthday, Kaadhu. ❤️</strong></p></div><p className="handwritten signature">— yours, always</p></article>}
      </section>

      <section className="cake-section paper-section">
        <div className="section-heading centered"><p className="eyebrow">one tiny wish</p><h2>Make a wish 🎂</h2></div>
        <button className={`cake ${candleOut ? "candle-out" : ""}`} onClick={(event) => { event.stopPropagation(); setCandleOut(true); }} aria-label="Blow out the birthday candle">
          <span className="flame">✦</span><span className="smoke">〰</span><span className="candle" /><span className="frosting">♡　♡　♡</span><span className="cake-body">HAPPY<br />BIRTHDAY</span><span className="cake-plate" />
        </button>
        {!candleOut ? <p className="handwritten cake-hint">tap the candle when you're ready</p> : <div className="wish-message animate-fade-in"><p>I hope every wish you make today comes true.</p><p>And selfishly…</p><strong>I hope one of those wishes includes me. 🥺❤️</strong></div>}
      </section>

      <section className="final-section">
        <div className="final-stars" aria-hidden="true">·　✦　·　♡　·　✧　·</div>
        <img src={onamPhoto} alt="A favorite memory at golden hour" loading="lazy" width={1024} height={1280} />
        <div className="final-copy"><p className="eyebrow">one last thing</p><h2>If I could give you one thing…</h2><p className="final-lead">I'd give you the ability to see yourself through my eyes.</p><p>Then you'd finally understand how incredibly special you are to me.</p><h3>Happy Birthday, Kaadhuuuu. ❤️❤️❤️❤️</h3><p>Thank you for being you.</p><p>In this world, in this lifetime, I'm just happy I get to share it with you.</p><div className="end-mark">♡ ENDLESSLY YOURS ♡</div></div>
        <button className="secret-button handwritten" onClick={(event) => { event.stopPropagation(); setSecretOpen(true); }}>psst… don't click this 👀</button>
      </section>

      {selected && <div className="memory-modal" role="dialog" aria-modal="true" aria-label="Memory detail" onClick={() => setSelected(null)}><div className="memory-dialog" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close memory"><X /></button><img src={selected.image} alt="A cherished shared memory" width={1024} height={1280} /><div><p className="handwritten">{selected.caption}</p><h3>{selected.note}</h3></div></div></div>}
      {secretOpen && <div className="secret-modal" role="dialog" aria-modal="true" onClick={() => setSecretOpen(false)}><div className="secret-note animate-scale-in" onClick={(event) => event.stopPropagation()}><Sparkles /><p>I lied.</p><h3>I just wanted another excuse to tell you that I love you.</h3><span>🥺🥺❤️❤️❤️❤️❤️</span><button className="round-control" onClick={() => setSecretOpen(false)} aria-label="Close secret"><X /></button></div></div>}
    </main>
  );
}

function Petals() {
  return <div className="petals" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <span key={index}>❀</span>)}</div>;
}
