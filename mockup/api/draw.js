// GET /api/draw?thing=table -> a picture of one thing for the Escape Builder room (PLAN.md D13).
// Prototype only. The key lives in Vercel's settings (OPENAI_API_KEY), never in the page.
// Each word is paid for once: Vercel's CDN keeps the answer, so repeats are free.

// {thing} is the object's name; {place} is the child's world, so "buttons" in a space station
// become launch buttons, not sewing buttons.
// {look} is the child's colours and mood; {role} says if it is the locked exit or hides the clue.
// The code, hint and messages are never sent, so a picture can't give the answer away.
const STYLE =
  "One clickable object for a children's escape-room game{place}. The object is: {thing}.{role} " +
  "Draw it the way it would look in that place. If the name is a place or an idea, draw one small object that shows it, " +
  "like a round window or a sign. {look}Soft clay toy style, chunky simple shapes, gentle light. " +
  "Whole object visible and centred, three-quarter view. Family friendly. " +
  "No words, letters or numbers, no background, no floor.";

// The link is public, so only known words are drawn: every word in the name must be on this list.
// Room things (the builder's emoji word list), plus colours, sizes, moods and small joining words.
// Anything else gets 400 and the page keeps its emoji. The provider's content filter also applies.
const WORDS = new Set((
  "alien anchor apple astronaut backpack bag baker ball balloon banana barrel basket basketball bat bath bathtub " +
  "battery bear bed bee bell bin blackboard blanket board boat book books bookshelf boot bottle box bread broom " +
  "bucket bunny burger butterfly cactus cage cake calendar camera candle candy car cards carpet carrot cash castle " +
  "cat cauldron chair chalkboard cheese chef chest chocolate clock cloud clown coat coin comet compass computer " +
  "cookie coral couch crab crate crayon cream crown cup cupcake cushion desk diamond dice dino dinosaur dog dolphin " +
  "donut door doughnut dragon drum egg envelope fairy fire fireplace fish flag flashlight flour flower football " +
  "fountain freezer fridge frog game gate gem ghost gift glass glasses globe guitar hammer hat headphones honey ice " +
  "jar jelly juice key king kite knight ladder lamp laptop letter light lightning loaf lock log lollipop magnet " +
  "magnifying map mermaid microphone microscope milk mirror money monkey monster moon mouse mug mushroom newspaper " +
  "noodles note notes octopus oven owl paint painting panda paper parrot pen pencil penguin phone piano picture pie " +
  "pillow pirate pizza planet plant popcorn post poster postit pot potion present princess pumpkin puzzle queen " +
  "rabbit radio rainbow receipt register ring robot rock rocket rug sack safe sandwich satellite scissors scroll " +
  "seaweed shark shelf shell shield ship shoe sign skull snack snail snake snow snowman soap sock soda sofa " +
  "spaceship spider star statue sticky stone stove sun sweet table teacher teapot teddy telescope television tent " +
  "ticket toilet toolbox torch toy train trap trash treasure tree trophy trumpet turtle tv ufo umbrella unicorn " +
  "vampire vase violin volcano wave whale whiteboard window witch wizard wrench yarn zombie " +
  // example game and classroom words
  "shop space round outside classroom student school " +
  // common escape-room things
  "button control panel screen lever switch keypad keyboard alarm wire cable pipe vent drawer cupboard cabinet " +
  "bookcase curtain wardrobe closet fan heater sink bench stool shelves frame portrait hourglass padlock chain " +
  "station world earth galaxy helmet spacesuit engine machine dial gear bottle bowl plate spoon fork pan kettle " +
  "suitcase mailbox clipboard folder notebook diary codebook sticker marker chalk eraser ruler calculator " +
  // colours, sizes, moods
  "red orange yellow green blue purple pink brown black white grey gray gold golden silver rainbow " +
  "big small tiny giant huge little old new tall short round square fat thin long " +
  "happy sad sleepy grumpy silly funny friendly angry scared shy cute fluffy shiny sparkly glowing magic magical " +
  "dark light bright quiet calm cosy cozy spooky creepy mysterious warm cold cool colourful colorful pastel neon " +
  "sunny gloomy soft loud wild crazy cheerful peaceful strange weird futuristic ancient " +
  "wooden metal glass paper broken empty secret locked open floating flying talking dancing singing " +
  // joining and place words
  "a an the of with and in on lot lots inside outside under near at top bottom deep high far room house home " +
  "city town village island beach forest jungle sea ocean underwater sky cave mountain desert farm garden park " +
  "lab laboratory library museum hospital kitchen bakery cafe restaurant zoo circus factory spaceship rocket"
).split(" "));

// "planets" and "boxes" count as "planet" and "box".
const known = w => WORDS.has(w) || WORDS.has(w.replace(/es$/, "")) || WORDS.has(w.replace(/s$/, ""));

export async function GET(request) {
  const params = new URL(request.url).searchParams;
  const thing = (params.get("thing") || "").trim().toLowerCase();
  if (thing.length > 39 || !thing.split(/[ -]+/).every(known)) return new Response("Can't draw that", { status: 400 });
  // The place is the longest run of known words in the child's world, at most 8:
  // "inside a space station where the robots dance" -> "inside a space station".
  let run = [], best = [];
  for (const w of (params.get("in") || "").toLowerCase().replace(/[^a-z '-]/g, " ").split(/\s+/).concat("")) {
    if (w && known(w)) run.push(w); else { if (run.length > best.length) best = run; run = []; }
  }
  const place = best.slice(0, 8).join(" ");
  // Colours and mood: every known word, in order, at most 8 ("Dark blue and silver. Quiet." -> "dark blue and silver quiet").
  const look = (params.get("look") || "").toLowerCase().replace(/[^a-z '-]/g, " ").split(/\s+/).filter(w => w && known(w)).slice(0, 8).join(" ");
  const role = { exit: " It is the locked way out: show a big lock or keypad on it.",
                 clue: " It hides the clue: give it one small, curious detail that invites a closer look." }[params.get("role")] || "";
  if (!process.env.OPENAI_API_KEY) return new Response("Drawing is not set up", { status: 503 });

  const r = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { Authorization: "Bearer " + process.env.OPENAI_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: process.env.IMAGE_MODEL || "gpt-image-1-mini",
      prompt: STYLE.replace("{thing}", thing).replace("{role}", role)
        .replace("{place}", place ? ", set " + (/^(in|inside|on|under|at)\b/.test(place) ? "" : "in ") + place : "")
        .replace("{look}", look ? "Colours and mood: " + look + ". " : "Warm friendly colours. "),
      size: "1024x1024",
      quality: "low",
      background: "transparent",
      output_format: "webp",
      output_compression: 80,
      n: 1
    })
  });
  if (!r.ok) {
    console.error("image API error", r.status, (await r.text()).slice(0, 300));
    return new Response("Couldn't draw it", { status: 502 });
  }
  const b64 = (await r.json()).data?.[0]?.b64_json;
  if (!b64) return new Response("Couldn't draw it", { status: 502 });

  return new Response(Buffer.from(b64, "base64"), {
    headers: {
      "Content-Type": "image/webp",
      // Browser keeps it a day; Vercel's CDN keeps it a year (until the next deploy).
      "Cache-Control": "public, max-age=86400, s-maxage=31536000"
    }
  });
}
