# Working example: Alien Snack Shop

Kai's checkpoint build. Uses the teaching example from the guide. Record every prompt exactly as sent.

## Version 1 prompt

Status: not sent yet.

The starting prompt from [starting-prompt.md](starting-prompt.md) with these blanks:

```text
MY WORLD: A tiny snack shop on a spaceship, run by three silly aliens. The snack fridge is locked.
MY CLUE: A receipt on the counter lists snacks with numbers: Star = 4, Moon = 2, Rocket = 7. The fridge lock shows three pictures in a row: Rocket, Star, Moon.
MY CODE: 742
MY ENDING: The fridge pops open, snacks float out and the aliens throw a snack party.
MY COLOURS AND MOOD: Warm lilac and lime green. Cosy and silly.
```

MY COLOURS AND MOOD is a suggestion taken from the vision-deck picture (Imaginable_Brand_and_Source_Pack/assets/escape.png). Kai to confirm before sending.

Sent on: ______ Build time: ______ Credits used: ______

## Version 1 expected path

The chain the child should be able to explain:

| Clue | Player action | Rule | Feedback |
|---|---|---|---|
| Receipt: Star 4, Moon 2, Rocket 7; lock pictures Rocket, Star, Moon | Type 742 and press Open | Open only when the code is exactly 742 | Fridge opens, party ending, Restart shown |

Tests for checkpoint/test-log.md section 2: click every object; receipt readable; lock pictures visible; 999 stays shut with a funny message and no code shown; empty stays shut; Hint points to the receipt without numbers; 742 opens and shows the ending; Restart returns to the start; play again works.

## The playtest

A first-time player who hasn't been told anything plays V1. Kai watches without speaking and writes only what the player does.

Observation: ______

## Version 2

Pick the change from the observation. If the player missed the receipt (the guide's example), the decision question is: "Should the hint reveal the code or help them find the receipt? What would each choice do to the puzzle?"

Prompt for that case. Status: not sent yet. Replace it if the observation was different.

```text
Change: after a wrong or empty code, make the receipt on the counter glow so the player notices it.
Keep: the code 742, the funny wrong-code message, the ending and Restart.
Check: we will type 111 and expect the receipt to glow with no numbers shown on the lock; then 742 opens the fridge; then Restart and the glow is gone.
```

Sent on: ______ Build time: ______ Credits used: ______

## Version 2 tests

| Test | Kind | Expected |
|---|---|---|
| Type 111, press Open | The change | Receipt glows; fridge shut; 742 not shown anywhere |
| Leave empty, press Open | The change | Receipt glows; fridge shut |
| Type 742, press Open | Kept rule | Fridge opens, party ending |
| Restart after a glow | Side effect | Glow gone; room back to start |
| A new first-time player | Clarity | Finds the receipt sooner than the V1 player (note the time) |

Evidence: screenshot of V1 after a wrong guess and V2 after a wrong guess, without account details.
