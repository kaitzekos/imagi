# Starting prompt

Status: revised 2026-11-05 to a full build brief. In imagi, Kai found that short prompts built plain games and full design packs (the nine game ZIPs) built much better ones. The children still fill the same five blanks; everything else is written for them. Not yet sent to imagi in this form. Test it with two different worlds before any child uses it.

## Before the prompt: the idea card (3 minutes, no laptop)

Each partner fills at least one line. Say it, write it or sketch it.

| | Your idea |
|---|---|
| My world: one place with one strange detail (and a name, if you like) | |
| My clue: where the secret code is hidden, and what the player reads there | |
| My code: 3 numbers or one word | |
| My ending: what happens when someone escapes | |
| My colours and mood: two or three colours and how it should feel | |

Questions the facilitator can ask, one at a time and only if a pair is stuck:

- "Who will play it? What would make them smile?"
- "What is one thing in your room that could hide a number?"
- "Name two places the clue could be. Which is fairer for a first-time player?"

## The prompt children copy

Partner A copies everything in the box, fills the five blanks under "Our game" from the idea card, and sends it as one message. It is long on purpose: imagi builds a far better game from an exact brief.

```text
# Build brief: our escape room

Build a one-screen escape room game for 12-year-olds, played on a school laptop. Read this whole brief before you write any code, then follow it exactly. Everything under "Our game" was written by the young makers: use their words as written (fix spelling only) and never swap their ideas for your own. Do not add anything this brief does not ask for.

## Our game
- Our world: ______
- The clue (where the code is hidden, and what the player reads there): ______
- The secret code: ______
- Ending (what happens when someone escapes): ______
- Colours and mood: ______
- Name: make a short, fun name from our world.
- Things in the room: 4 to 6 things that belong in our world. One of them holds the clue. The locked exit is another thing from our world, like a door, a chest or a fridge.
- Hint button says: one short hint that points to where the clue is, never the code.
- Wrong code message: a short, funny message that fits our world.
- Empty code message: "Nothing typed. It stays locked."

## Look and feel
Direction: the room is a real place in our world, in our colours and mood. It should look like a scene from a game, not a web page or a form.
- Draw a back wall and a floor in our colours, with depth: light coming from one side, a soft shadow under each thing, a darker edge where wall meets floor.
- Draw every thing as its own inline SVG illustration in a chunky clay-toy style: rounded shapes, flat colours, one lighter highlight at the top-left, one darker shade at the bottom-right, a 2 to 3 px outline in a darker shade. If a thing is hard to draw, draw a simpler version with the same shapes and colours. Make things big: 100 to 180 px wide.
- No emoji anywhere in the game: not for things, buttons, messages or the ending, unless we typed one in our own words above. Don't use the UI kit's Card, Badge or Button components for things in the room; things are drawings, not UI.
- Never put a thing inside a card, tile, box, bubble, border or frosted-glass panel. Each thing stands directly in the room, like an object in a real room: floor things on a soft oval shadow, wall things with a small shadow on the wall, pictures and posters hanging from a nail on a string.
- Place them around the room where they would really be: on the floor, on a shelf, on the wall. Never in a grid or a list.
- Every thing reacts when the mouse is over it (it lifts 4px with a stronger shadow) and when clicked (a short wiggle), so players can tell it is clickable. No hover background.
- The locked exit is the biggest thing in the room and looks like the real thing (a door has a frame, panels and a handle) with a padlock on it. Its code box and Open button sit in a small panel just under it. It opens with a short, happy animation when the code is right.
- The page around the room is light and calm (white or a very pale tint of the wall colour).
- One bold, playful heading font that fits the mood, and easy-to-read body text of at least 18px. Strong contrast everywhere.
- Buttons are big (at least 44px tall) with clear words. Never use colour as the only signal.
- The whole game fits a 1366 x 768 laptop screen with no scrolling, and still works on a tablet.
- Respect prefers-reduced-motion: keep everything visible and drop the movement.

## The screen, top to bottom
1. Top bar: the game name, and a goal line like "Find the clue. Open the door."
2. The room, filling most of the screen, with the things to click. The code box and an Open button sit on or right next to the locked exit.
3. One message bar under the room, in big text. Every click, wrong guess and hint shows here.
4. Bottom bar: big Hint and Restart buttons, always visible.
When the player escapes, an ending screen covers the room: our ending, big and joyful, and a Play again button that works exactly like Restart.

## Rules
- Clicking a thing shows one or two playful sentences in the message bar that fit our world.
- Clicking the thing that holds the clue opens a big, readable close-up of the clue. A Close button and the Escape key close it.
- A first-time player can work out the code from the clue in about a minute.
- Check the code without caring about capitals, spaces or punctuation. For example, TEAMWORK, teamwork and team work all open a lock whose code is "team work".
- A wrong code keeps the exit shut, shakes the code box and shows the wrong code message. Never show the code. Players can try again as often as they like.
- An empty code keeps it shut and shows the empty code message.
- The right code opens the exit and shows the ending.
- Hint shows the hint in the message bar. It never shows the code.
- Restart puts everything back exactly as it was at the start: close-ups closed, code box empty, message bar cleared, exit locked, ending gone.

## Keep it simple
- One screen, one clue, one locked exit, one code. 60 to 90 seconds of play.
- No sign-in, database, saving, sounds, timer, score, image files, internet pictures, AI inside the game, sharing buttons, external links or extra levels.
- Friendly and silly, never scary or violent. Suitable for 12-year-olds.
- Keep all the game's words (names, messages, clue, code, hint, ending) together in one place at the top of the code, with plain-English comments, so we can change them later.

## Build in this order
1. The room: wall, floor and every thing with its click message. Check every thing can be clicked.
2. The clue and the lock: the close-up, the code box, the Open button and the code check. Check the right code opens it and wrong or empty codes don't.
3. Hint, Restart and the ending. Check Restart after escaping puts everything back.
4. The look: colours, depth, shadows, the hover and click reactions, the opening animation.

## Before you say it's done
Play it yourself and check every line below. Fix anything that fails, then tell me which lines passed.
- Every thing in the room shows its message when clicked.
- The clue is easy to read in its close-up.
- The code opens the exit typed in capitals, in small letters, and with or without spaces.
- A wrong code keeps it shut, shakes, shows the wrong code message and never shows the code.
- An empty code keeps it shut.
- The hint never contains the code.
- Restart after escaping puts everything back, and the game plays the same the second time.
- Nothing from "Keep it simple" was added.
- No errors in the browser console.

When you finish, tell me in plain words what to click to test it.
```

While it builds, each child writes one prediction: "When I type the wrong code, I think the game will ______."

## Short version (if children must type the prompt)

Use only if copying from a shared document doesn't work on the student route. Expect a plainer game.

```text
Escape room game on one screen. World: ______. Clue: ______. Code: ______. Ending: ______. Colours and mood: ______.
Name and goal at the top. Room fills the screen, with things to click. Locked exit from my world, with a code box. One message bar. Wrong or empty code stays shut, never shows the code. Code check ignores capitals and spaces. Hint points to the clue. Big Hint and Restart buttons along the bottom. Draw every thing as an SVG picture standing in the room, no emoji, no tiles or cards. No sign-in, saving or internet pictures.
```

## Why each part is there

| Part | Reason |
|---|---|
| Five blanks only, all under "Our game" | The child's idea and look go in before any AI suggestion; no spec form before play |
| A long brief instead of nine lines | In imagi, short prompts built plain games; the full ZIP packs (look, content, screens, rules, build order, checklist) built much better ones |
| "Use their words as written" | Stops the builder replacing the child's idea with its own |
| Colours and mood, plus a "Direction" for the look | The look is the child's choice. Without a concrete direction the builder picks a generic layout |
| "for 12-year-olds" | Keeps content and reading level suitable |
| Name and goal line at the top | The player knows what game this is and what to do in the first seconds |
| Room drawn with depth, things placed where they'd really be | A place to explore, not a form with one button; still finishable in a minute |
| SVG things drawn in code, no emoji, no tiles, no image files | "Simple built-in art" (reference/assignment.md line 12). Emoji in tiles looked cheap in imagi (Kai, 5 Nov); things drawn in code, standing in the room, look like a game. The brief names things in words only, because emoji next to a name probably invite the builder to draw emoji (not yet tested) |
| Exit is a locked thing from the world, code box on or next to it | The lock is part of the story, so solving it feels like escaping, not filling in a box |
| Code check ignores capitals, spaces and punctuation | Candy Factory rejected "teamwork" when the code was "TEAM WORK" (found by Tomer) |
| Wrong or empty code, never show the code | The fairness rule children test later (right, wrong, empty) |
| One message bar | Every response lands in one place the player and the watching creators can see |
| Hint points to the clue | Sets up the teaching moment: should a hint reveal or guide? |
| Hint and Restart always visible along the bottom | Easy to find when stuck and on the ending; Restart is also the side-effect test after every change |
| Build order and "Before you say it's done" | The ZIP packs' milestones and checklist made the builder test its own work. "Done" from the builder is still only a claim until the child plays it |
| No sign-in, database, saving, sounds, sharing, AI | Out of scope for the class; builders add these unasked (the ZIP games added sound, sharing and printing) |
| No timer or score | Leaves those as choices children can add in Version 2 with a Change prompt |

## What playtester must test for this prompt

Full path on two worlds: every object click, clue visible, wrong code, empty code, the code in capitals, small letters and with a space, Hint, right code, ending, Restart, play again.

Layout on both worlds: name and goal line at the top; room fills most of the screen with depth; the exit is a thing from the world with the code box on or next to it; every click, wrong guess and hint message shows in the one bar; Hint and Restart visible on every screen, including the ending; colours and mood match the blank; no image files.

Also record the build time and credits used, compared with the short version, and check that the builder added nothing from "Keep it simple".
