# Second world: Tiny Moon Bakery (rough)

For the handover, after approval. It shows the lesson makes different games, not reskins: the rule is an order of clicks, not a typed code. Keep it rough.

It also tests whether the starting prompt bends to a different rule. If Lovable forces a code box anyway, note it; the prompt may need a "Rule" line under "Our game".

```text
- Our world: A tiny bakery on the moon where the cakes keep floating away on coloured balloons.
- The clue (where the code is hidden, and what the player reads there): A recipe card on the wall says "Pink, then Green, then Blue".
- The secret code: Click the balloons in the order pink, green, blue. (No code box. The oven door is the exit.)
- Ending (what happens when someone escapes): The oven opens, the cakes float back down and the moon cat eats one.
- Colours and mood: ______
```

Status: not sent yet.

| Test | Expected |
|---|---|
| Click pink, green, blue | Oven opens, ending |
| Click green first | Wrong-order message; the order resets; no answer shown |
| Click nothing, press Hint | Hint points to the recipe card, no colours given |
| Restart after a wrong order | Back to the start |
