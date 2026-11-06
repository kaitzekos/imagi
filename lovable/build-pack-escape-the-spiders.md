# Build pack: Escape the spiders (ready to paste)

Status: generated 2026-11-06 by the builder (mockup/escape-builder.html) from the spider room Kai built. Not yet sent. Paste everything inside the box into a new Lovable project in imagi as one message. Before you test, write the expected result in checkpoint/test-log.md: every thing drawn as a picture standing in the room, no emoji, no tiles or cards, the room laid out as in the map.

What changed since the 5 Nov build (emoji in frosted tiles): every thing is now drawn as an SVG with no tiles; the room background is the exact SVG; things are named in words only, with no emoji; Lovable is told not to use its Card, Badge or Button components for things.

````text
# Build pack: Escape the spiders

This one message holds the four files for one game: AGENTS.md (how to build it), PLAN.md (the game, its screens, milestones and checklist), CONTENT.md (every word) and LAYOUT.md (a written screenshot of the room). Read all four before you write any code, then build it exactly. The most important look rule: every thing in the room is drawn as its own SVG picture standing in the room, never an emoji and never inside a tile, card or glass panel. When you finish, run the playtest checklist, fix anything that fails, and tell me in plain words what to click to test it.

---

# AGENTS.md: how to build Escape the spiders

You are building a one-screen escape room game for children aged 12, played on a school laptop. Read PLAN.md, CONTENT.md and LAYOUT.md below before writing any code, and follow all four files exactly. Everything in CONTENT.md and LAYOUT.md was decided by the young makers: use their words and their room as written (fix spelling only) and never swap their ideas for your own.

## Stack
- Use the project's existing setup. One page, one route.
- No network requests, no external images, no image files.
- The room's background is the exact SVG code in LAYOUT.md. Paste it as it is; don't redraw or simplify it.
- Draw every thing in the room as its own inline SVG illustration (a component per thing), following its description in LAYOUT.md. If a thing is hard to draw, draw a simpler version with the same shapes and colours.
- No emoji anywhere in the game: not for things, buttons, messages or the ending. The only exception is an emoji the makers typed in their own words in CONTENT.md.
- Don't use the UI kit's Card, Badge or Button components for things in the room. Things are drawings, not UI.
- Never put a thing inside a card, tile, box, bubble, button-shaped frame, border or frosted-glass panel. Each thing stands directly in the room with only its own shadow, like an object in a real room.
- One playful, rounded heading font is fine; body text uses a clear sans-serif.
- No cookies, accounts, analytics or data collection.

## Rules
- Put every word, message, clue, code and answer from CONTENT.md in one content file (for example src/game/content.ts) with plain-English comments. Logic reads from it and never hardcodes words, so the makers can change them later.
- Put every thing's position, size, layer, facing and tilt from LAYOUT.md in the same content file as numbers, so the room can be rearranged without touching the logic.
- Answer checks ignore capitals, all spaces and punctuation: compare the typed code and the real code with every space and punctuation mark removed. "1234" and " 1234 " must all open it.
- Never show the code anywhere: not on screen, not in a tooltip, not in alt text, not in the page title.
- Build in the milestone order in PLAN.md and check each one before moving on.
- Do not add features, screens, levels, sounds, timers, scores, sign-in, saving, sharing buttons, external links or AI.
- Keep each file short and readable, with comments a 12-year-old could follow.

## Look and feel
- Direction: the room is a real place in our world, in our colours and mood: Dark purple and pink. Spooky but silly. It should look like a scene from a game, not a web page or a form.
- Recreate the room in LAYOUT.md as closely as you can: same wall and floor colours, same shape of room, same position, size, layer, facing and tilt for every thing. Aim for a 90% match with the makers' sketch.
- Clay-toy style for every SVG thing: chunky rounded shapes; flat base colours from its description; one lighter highlight shape on the top-left; one darker shade shape on the bottom-right; a 2 to 3 px outline in a darker shade of the same colour; no thin lines, no tiny details. Friendly faces only on creatures.
- Shadows: every thing on the floor sits on a soft oval contact shadow under its base (a radial gradient from rgba(0,0,0,.35) to transparent). Things on the wall get a small shadow on the wall (filter: drop-shadow(3px 6px 4px rgba(0,0,0,.25))). Things that hang show their nail and string, or their tape, as part of the drawing.
- Sizes are real: draw each thing at the width given in LAYOUT.md (pixels for a 1280 px wide room; scale with the room). Big things are big; the locked exit is usually the biggest.
- The locked exit looks like the real thing (a door has a frame, panels, a handle) with a padlock on it. Its code box and Open button sit in a small rounded panel just under it, inside the room.
- The page around the room is light and calm (white or a very pale tint of the wall colour). The top bar and the bottom bar use the room's colours.
- Every thing reacts when the mouse is over it (lifts 4px with a stronger shadow) and when clicked (a short wiggle), so players can tell it is clickable. No hover background, no tile.
- Turning and opening are smooth: ease-in-out, about 0.6 seconds.
- Big text (at least 18px) and big buttons (at least 44px tall), strong contrast. Never use colour as the only signal.
- The whole game fits a 1366 x 768 laptop screen with no scrolling, and still works on a tablet.
- Respect prefers-reduced-motion: keep everything visible and drop the movement.

## Child safety
- Friendly and silly, never scary or violent. Failure is funny. No real people's names.

## Done means
- Every item on the playtest checklist in PLAN.md passes.
- The room matches LAYOUT.md: every thing within about 5% of its position, in the same layer order, facing the same way, the same size order.
- No errors in the browser console.

---

# PLAN.md: Escape the spiders

## Pitch
A spooky candy cave where spiders spin sugar webs. The player has to find the clue, work out the secret code and open the door to escape. 60 to 90 seconds of play for my classmates.

## Puzzle flow
1. Look around. The player clicks things in the room; each one answers in the message bar.
2. Find the clue. Clicking the spider web opens a big, readable close-up.
3. Work out the code from the clue.
4. Type the code in the box on the door and press Open.
5. Escape. The door opens with a short, happy animation and the ending appears.

## Failing
A wrong code keeps the door shut, shakes the code box and shows the wrong code message. An empty code shows the empty code message. There is no penalty and no limit on tries.

## Screen, top to bottom
1. Top bar: the game name, large, in the heading font, and the goal line from CONTENT.md.
2. The room, filling most of the screen, laid out exactly as in LAYOUT.md. The code box and an Open button sit on or right next to the door.
3. One message bar under the room, big text, rounded. Every click, wrong guess and hint shows here.
4. Bottom bar: big Hint (left) and Restart (right) buttons, always visible, with the message bar between them.
When the player escapes, an ending screen covers the room: the ending text, big and joyful, a burst of small drawn confetti shapes in the room's colours, and a Play again button that works exactly like Restart.

## Build milestones
1. The room: back wall, side walls, floor, lamp and rug as in LAYOUT.md. Checkpoint: it matches the room description.
2. The things: every thing from LAYOUT.md in its place, size, layer, facing and tilt, each with its click message. Checkpoint: compare with the map in LAYOUT.md.
3. The clue and the lock: close-up, code box, Open button, code check. Checkpoint: the right code opens it; wrong and empty don't.
4. Hint, Restart and the ending. Checkpoint: Restart after escaping puts everything back.
5. Polish: hover and click reactions, the opening animation, the clay-toy look. Checkpoint: the playtest checklist below.

## Playtest checklist
- Every thing in the room shows its message when clicked.
- The clue is easy to read in its close-up, and Close or the Escape key closes it.
- Typing "1234" and " 1234 " opens the door.
- A wrong code such as "999" keeps it shut, shakes, shows the wrong code message and never shows the code.
- An empty code keeps it shut and shows the empty code message.
- The hint never contains the code.
- Restart after escaping puts everything back, and the game plays the same the second time.
- The room matches the map and table in LAYOUT.md.
- Nothing from the out-of-scope list was added.

## Out of scope
- Sign-in, accounts, saving, databases, sharing, sounds, timers, scores, levels, AI, image files, internet pictures.

---

# CONTENT.md: every word in the game

- Game name: Escape the spiders
- Goal line: "Find the clue. Open the door."
- Our world: A spooky candy cave where spiders spin sugar webs
- Who will play it: My classmates. Make the clue and the hint fair for them.
- Colours and mood: Dark purple and pink. Spooky but silly.
- Start message in the message bar: "Click things in the room to look around."

## Things and what they say when clicked
- A. Spider web: "Sticky! Something is written in the web." (holds the clue)
- B. Dog: "Woof! The dog is scared of spiders."
- C. Cat: "The cat is chasing a spider."
- D. Candy: write one or two playful sentences that fit our world
- E. Spider: write one or two playful sentences that fit our world
- F. Tree: write one or two playful sentences that fit our world
- G. Door: "Locked tight. The lock wants four numbers." (the locked exit)

## The puzzle
- The clue (on the spider web), shown exactly like this in its close-up: "1 spider, 2 spiders, 3 spiders, 4 spiders"
- How to solve it (never shown to the player): Count the spiders on each web.
- The secret code: 1234
- Hint button says: "These webs are crawling with a clue. Have a closer look!"
- Wrong code message: "The door hisses like a spider. Still locked!"
- Empty code message: "Nothing typed. The door stays locked."
- Ending: The spiders crawl away and the door swings open.
- Ending title: "You escaped!" Button: "Play again".

---

# LAYOUT.md: a written screenshot of the room the makers built

Positions are measured inside the room box: x from the left edge (0%) to the right edge (100%), y from the top (0%) to the bottom (100%). The x and y are the centre of each thing. Width is a share of the room's width.

## The room
- Room box: about 16:9, rounded corners (about 24px), filling most of the screen between the top bar and the message bar.
- Back wall: colour #3b2f55, the rectangle from x 9% to 91% and y 8% to 62%, with a soft warm light patch near the top centre. Theme: Spooky.
- Ceiling: a slightly darker band across the top, from the room's top corners to the back wall's top edge at y 8%.
- Side walls: darker shades of the wall colour, slanting in perspective from the room's corners to the back wall (left side from x 0% to 9%, right side from 91% to 100%).
- Floor: colour #2a223d, a trapezoid from the back wall's bottom edge (y 62%, x 9% to 91%) out to the room's bottom corners, with thin floorboards running towards the back, darker near the wall.
- Skirting board: a thin darker strip along the bottom of the back wall at y 60-62%.
- Hanging lamp: from the ceiling at x 50%, a small dark shade at y 6-10% with a soft cone of light down to the floor.
- Rug: a soft oval centred at x 50%, y 83%, about 54% of the room wide and 17% tall, slightly darker than the wall colour, with a dashed pale ring inside it.
- It is a dark room: use light text on dark surfaces and keep everything readable.

## The room background, as code
Use this exactly. Give the room box this CSS background, then put this SVG inside it as the first layer, stretched to fill the box (position absolute, inset 0, width and height 100%). The things go on top.

```css
.room { position: relative; overflow: hidden; border-radius: 24px; aspect-ratio: 16 / 9; background: radial-gradient(circle at 78% 18%, #fff6c8 0 4%, #fff6c844 5%, transparent 14%), #3b2f55; }
```

```html
<svg class="room-bg" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="rb2-Floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgb(36,29,52)"/><stop offset=".35" stop-color="#2a223d"/><stop offset="1" stop-color="rgb(37,30,54)"/></linearGradient><linearGradient id="rb2-Left" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="rgb(47,38,68)"/><stop offset="1" stop-color="rgb(54,43,77)"/></linearGradient><linearGradient id="rb2-Right" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="rgb(47,38,68)"/><stop offset="1" stop-color="rgb(54,43,77)"/></linearGradient><radialGradient id="rb2-Light" cx=".5" cy=".12" r=".75"><stop offset="0" stop-color="#fff8dc" stop-opacity="0.22"/><stop offset="1" stop-color="#fff8dc" stop-opacity="0"/></radialGradient><linearGradient id="rb2-Cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6c8" stop-opacity="0.16"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></linearGradient><clipPath id="rb2-FloorClip"><polygon points="9,62 91,62 100,100 0,100"/></clipPath><filter id="rb2-Rough" filterUnits="userSpaceOnUse" x="-5" y="-5" width="110" height="110"><feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="0.9"/></filter></defs><rect x="9" y="8" width="82" height="54" fill="url(#rb2-Light)"/><polygon points="0,0 100,0 91,8 9,8" fill="rgb(41,33,60)"/><polygon points="0,0 9,8 9,62 0,100" fill="url(#rb2-Left)"/><polygon points="100,0 91,8 91,62 100,100" fill="url(#rb2-Right)"/><polygon points="9,62 91,62 100,100 0,100" fill="url(#rb2-Floor)"/><g clip-path="url(#rb2-FloorClip)"><g filter="url(#rb2-Rough)"><line x1="9.00" y1="62" x2="-39.69" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="16.45" y1="62" x2="-23.38" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="23.91" y1="62" x2="-7.07" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="31.36" y1="62" x2="9.23" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="38.82" y1="62" x2="25.54" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="46.27" y1="62" x2="41.85" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="53.73" y1="62" x2="58.15" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="61.18" y1="62" x2="74.46" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="68.64" y1="62" x2="90.77" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="76.09" y1="62" x2="107.07" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="83.55" y1="62" x2="123.38" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="91.00" y1="62" x2="139.69" y2="100" stroke="rgb(35,29,51)" stroke-width="1.2" vector-effect="non-scaling-stroke"/><line x1="5.67" y1="64.6" x2="13.73" y2="64.6" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="29.85" y1="64.6" x2="37.91" y2="64.6" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="54.03" y1="64.6" x2="62.09" y2="64.6" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="78.21" y1="64.6" x2="86.27" y2="64.6" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="18.69" y1="68.4" x2="27.64" y2="68.4" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="45.53" y1="68.4" x2="54.47" y2="68.4" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="72.36" y1="68.4" x2="81.31" y2="68.4" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="3.67" y1="74.2" x2="13.96" y2="74.2" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="34.56" y1="74.2" x2="44.85" y2="74.2" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="65.44" y1="74.2" x2="75.74" y2="74.2" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="96.33" y1="74.2" x2="106.63" y2="74.2" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="-17.91" y1="83" x2="-5.56" y2="83" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="19.13" y1="83" x2="31.48" y2="83" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="56.17" y1="83" x2="68.52" y2="83" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="93.21" y1="83" x2="105.56" y2="83" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="-3.00" y1="95" x2="12.14" y2="95" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="42.43" y1="95" x2="57.57" y2="95" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="87.86" y1="95" x2="103.00" y2="95" stroke="rgb(36,29,52)" stroke-width="1" vector-effect="non-scaling-stroke"/></g></g><ellipse cx="50" cy="83" rx="27" ry="8.5" fill="rgb(83,72,105)" opacity=".9"/><ellipse cx="50" cy="83" rx="23" ry="6.6" fill="none" stroke="rgb(167,161,179)" stroke-width="2" stroke-dasharray="6 5" opacity=".8" filter="url(#rb2-Rough)" vector-effect="non-scaling-stroke"/><rect x="9" y="59.6" width="82" height="2.4" fill="rgb(46,37,66)"/><polygon points="0,96 9,59.6 9,62 0,100" fill="rgb(41,33,60)"/><polygon points="100,96 91,59.6 91,62 100,100" fill="rgb(41,33,60)"/><g stroke="#ffffff1f" stroke-width="1.5" fill="none" filter="url(#rb2-Rough)" vector-effect="non-scaling-stroke"><polyline points="0,0 9,8 91,8 100,0" vector-effect="non-scaling-stroke"/><line x1="9" y1="8" x2="9" y2="62" vector-effect="non-scaling-stroke"/><line x1="91" y1="8" x2="91" y2="62" vector-effect="non-scaling-stroke"/><polyline points="0,100 9,62 91,62 100,100" vector-effect="non-scaling-stroke"/></g><polygon points="45.5,10.5 54.5,10.5 66,62 34,62" fill="url(#rb2-Cone)"/><line x1="50" y1="0" x2="50" y2="6.5" stroke="rgb(27,21,38)" stroke-width="1.5" vector-effect="non-scaling-stroke"/><ellipse cx="50" cy="10.4" rx="2.6" ry="1.2" fill="#fff6c8"/><path d="M47.6,6.5 H52.4 L54.8,10.4 H45.2 Z" fill="rgb(27,21,38)"/></svg>
```

## Every thing, back to front
Draw them in this order, so later rows sit in front of earlier ones.

| Map | Thing | Centre x | Centre y | Width | Where | How it looks |
|---|---|---|---|---|---|---|
| A | Spider web (holds the clue) | 24% | 24% | 9% (about 115 px) | fixed to the wall, with a soft shadow on the wall behind it | a chunky clay-toy spider web in its natural colours, seen straight from the front |
| G | Door (locked exit, with a padlock badge and the code box beside it) | 86% | 52% | 13% (about 166 px) | set into the wall like a real doorway: a recessed frame around it, no floor shadow | a chunky clay-toy door, mostly brown, seen straight from the front |
| C | Cat | 58% | 64% | 9% (about 115 px) | stands on the floor, with a soft oval contact shadow under it | a chunky clay-toy cat, mostly orange and brown, seen straight from the front |
| B | Dog | 38% | 70% | 10% (about 128 px) | stands on the floor, with a soft oval contact shadow under it | a chunky clay-toy dog, mostly brown and orange, seen straight from the front |
| F | Tree | 70% | 82% | 10% (about 128 px) | stands on the floor, with a soft oval contact shadow under it | a chunky clay-toy tree, mostly green and brown, seen straight from the front, flipped (mirrored) to face the other way |
| D | Candy | 26% | 84% | 9% (about 115 px) | stands on the floor, with a soft oval contact shadow under it | a chunky clay-toy candy, mostly orange and brown, seen straight from the front |
| E | Spider | 48% | 84% | 11% (about 141 px) | stands on the floor, with a soft oval contact shadow under it | a chunky clay-toy spider, mostly orange and grey, seen straight from the front, tilted 10 degrees anticlockwise |

## Map
Each letter is the centre of a thing from the table. The dotted line is where the back wall meets the floor. The star is the lamp.

```
+------------------------------------------------+
|                                                |
|                        *                       |
|                                                |
|                                                |
|           A                                    |
|                                                |
|                                                |
|                                                |
|                                        G       |
|................................................|
|                           C                    |
|                  B                             |
|                                 F              |
|            D          E                        |
|                                                |
|                                                |
+------------------------------------------------+
```
````
