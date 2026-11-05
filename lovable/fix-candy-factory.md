# Fix prompts: Candy Factory Escape

Status: written 2026-11-05, not yet sent. Send them in imagi to the Candy Factory project, one at a time, in this order. Send prompt 1 to the lovable.app copy too. Write the expected result in checkpoint/test-log.md before each test, and record only what you see.

## Why

Tomer typed "TEAMWORK" and "teamwork" at the final step and the doors stayed shut; "team work" opened them. The published code shows why: the stored answer is "TEAM WORK", and the check lowercases and trims but keeps one space between words, so "teamwork" can never match.

## Prompt 1: the answer check

```text
Change: every answer check in the game (the final team word and every clue answer on both player pages) ignores capitals, spaces and punctuation. Compare the answers with all spaces and punctuation removed, so TEAMWORK, teamwork, team work, Team-Work and " team work " all count as TEAM WORK.

Because: a player typed TEAMWORK and the doors stayed shut. Only "team work" with a space worked, which isn't fair.

Keep: every answer, clue, screen, message and the escape ending exactly as they are. Keep the Detective and Wizard pages separate.

Check: on the final step, TEAMWORK, teamwork, team work and Team-Work each open the doors. A wrong word such as CANDY and an empty box keep them shut and show the wrong-answer message. Then check one clue answer on each player page the same way. Tell me which checks passed.
```

Expected: the four spellings open the doors; CANDY and empty stay shut with the wrong-answer message; the clue answers behave the same.

## Prompt 2: the look (imagi copy only)

Send only after prompt 1 passes. In imagi, the short prompt built a plain Candy Factory; this gives the builder the exact look, the way the ZIP packs did.

```text
Change: restyle the lobby and both player pages so they look like a scene from a candy factory game, not a web page.

Direction: a candy factory at dusk. Warm pink and mint, with chocolate brown for text and outlines. Candy-stripe pillars, round lollipop shapes, gumdrops and a glowing factory window, all drawn with CSS shapes, gradients and big emoji. No image files and no internet pictures.
- Lobby: the game name huge in a bold, rounded, playful font with a chocolate outline, over the drawn factory. One line saying "Two players. Two screens. One sweet escape." Two big buttons: Player A: The Detective (pink) and Player B: The Wizard (mint), each with its emoji and one line saying what that player does.
- Each player page: "Player A" or "Player B" big at the top in its own colour, so nobody mixes them up. The puzzle area looks like part of the factory (a dark storeroom lit by a torch for the Detective, an old map on parchment for the Wizard).
- Buttons at least 44px tall, body text at least 18px, strong contrast. Never colour alone: every coloured thing also has its name or an emoji.
- Small, happy movement: buttons lift on hover, wrong answers wiggle, the escape ending bursts with candy emoji. Respect prefers-reduced-motion.
- Fits a 1366 x 768 laptop screen and a tablet with no sideways scrolling.

Because: the game should feel like a candy factory the moment it opens. Right now it looks like a plain web page.

Keep: every clue, answer, message, the timer, the final team word, the answer check from the last change, and the separate Detective and Wizard pages. Don't add sounds, sign-in, saving or new levels.

Check: open the lobby and both player pages on a laptop. Play the whole game through to the escape ending with the right answers, then try one wrong answer and one empty answer on each page. Tell me what you changed and which checks passed.
```

Expected: the lobby and both pages show the factory look; the whole game still plays through to the ending; wrong and empty answers still stay shut; TEAMWORK still opens the doors.
