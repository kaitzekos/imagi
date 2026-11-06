# Computer science lesson plan: can your classmates escape a world you invented?

Draft for Tomer's review. Not tried with children. Timings are targets: nothing has been timed with a class, and the Lovable build wait for eight pairs at once is not measured.

A US-style computer science lesson plan built around the CSTA K-12 Computer Science Standards. The activity sequence is Tomer's flow: a paper idea card first, then Lovable inside imagi Edu. Minute-by-minute words to say are in [lesson-plan-tom-flow.md](lesson-plan-tom-flow.md).

| | |
|---|---|
| Grade | 7 (CSTA level 2, grades 6-8) |
| Time | 45 minutes, plus an optional 15-minute extension |
| Class | 16 learners in 8 pairs, by learner number. Partner A is the odd number, Partner B the even one |
| Devices | 8 shared laptops with Chrome and Wi-Fi; 1 projector laptop |
| Tools | Paper cards; Lovable inside imagi Edu |
| Demo game | Alien Snack Shop, on the projector: <https://imagi-mockup.vercel.app/alien-snack-shop-v1.html>. A hand-built example of what the starting prompt asks Lovable to make, not a Lovable build |

## Standards addressed

| Code | Standard | Where in the lesson |
|---|---|---|
| CSTA 2-AP-13 | Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs | Idea card: world, clue, code, ending, colours and mood (5-8) |
| CSTA 2-AP-15 | Seek and incorporate feedback from team members and users to refine a solution that meets user needs | Playtest and choosing a change from what the player did (17-31) |
| CSTA 2-AP-17 | Systematically test and refine programs using a range of test cases | Prediction, Version 1 test, retest of the change and a kept rule (8-17, 31-35) |
| CSTA 2-AP-18 | Distribute tasks and maintain a project timeline when collaboratively developing computational artifacts | Partner A types Version 1, Partner B types Version 2; timed blocks |
| CSTA 2-AP-19 | Document programs in order to make them easier to follow, test, and debug | Change / Because / Keep / Check; the maker note |
| ISTE Students 1.4 | Innovative Designer: students use a variety of technologies within a design process to identify and solve problems by creating new, useful or imaginative solutions | The whole build, test and improve cycle |
| ISTE Students 1.5 | Computational Thinker: students develop and employ strategies for understanding and solving problems in ways that leverage the power of technological methods to develop and test solutions | Instructing the AI and testing what it built |
| CCSS ELA SL.7.1 | Engage effectively in a range of collaborative discussions (one-on-one, in groups, and teacher-led) with diverse partners on grade 7 topics, texts, and issues, building on others' ideas and expressing their own clearly | Choosing a change with a partner; explaining a choice to the player |

CSTA codes are from the K-12 Computer Science Standards (2017), level 2. Learners don't write code: Lovable writes it from their plain-language instructions. The alignment is to designing, instructing, testing and refining, not to programming syntax. 2-IC-20 and 2-IC-21 were considered and left out: the lesson doesn't compare tradeoffs or discuss bias. Check the wording against the current version before formal use.

## Learning objectives

Students will be able to:

1. Break a game idea into parts: world, clue, code, ending, colours and mood (2-AP-13).
2. Predict what their game will do before they test it (2-AP-17).
3. Watch a real player and write down what the player did, not what they should have done (2-AP-15).
4. Choose one change for a reason and explain it to a partner (2-AP-15, SL.7.1).
5. Give the AI a clear instruction that says what to change and what to keep (2-AP-19).
6. Test the change and one rule that should still work, against their prediction (2-AP-17).

## Vocabulary

| Word | Meaning for learners |
|---|---|
| Clue | Something in the room that helps the player find the code |
| Code | The secret answer that opens the exit |
| Hint | Help that points to where to look, without giving the code |
| Player | The person who tries to escape. Not the person who made it |
| Prediction | What you think will happen, written before you test |
| Test | Trying the game yourself to see what really happens |
| Version | The game at one point in time. Version 2 is the game after your change |
| Instruction | What you tell the AI to do, in your own words |
| Keep | The parts the AI must not change |
| "Done" | What the AI says when it finishes. It is a claim until you test it |

## Materials

| Item | How many | File |
|---|---|---|
| Idea card | 8, one per pair | [kit/student/idea-card.md](../student/idea-card.md); PDF: [kit/student/pdf/idea-card.pdf](../student/pdf/idea-card.pdf) |
| Playtest card | 8, one per pair | [kit/student/playtest-card.md](../student/playtest-card.md); PDF: [kit/student/pdf/playtest-card.pdf](../student/pdf/playtest-card.pdf) |
| Starting prompt in a shared document | 1 | [lovable/starting-prompt.md](../../lovable/starting-prompt.md); [link from Liba] |
| Student guide slides | 1, on the projector | [kit/student/guide.md](../student/guide.md) |
| Help card | 8 | [kit/student/help-card.md](../student/help-card.md) |
| Checks A and B | 16 each | [kit/student/checks.md](../student/checks.md) |
| Maker note | 16 | [kit/student/maker-note.md](../student/maker-note.md) |
| Take-home card | 16 | [take-home-card.md](take-home-card.md) |
| Paper backup | 2 sets | [paper-backup.md](paper-backup.md) |
| Scoring guide and observation sheet | 1 | [scoring-guide.md](scoring-guide.md) |
| Pencils | 16 | |

Preparation takes under 20 minutes. The steps and their status are in [lesson-plan-tom-flow.md](lesson-plan-tom-flow.md), "Setup before class".

## Warm-up (0-5 minutes)

| Min | Teacher | Students |
|---|---|---|
| 0-2 | Open Alien Snack Shop on the projector. Say: "Can your classmates escape a world you invented? Today you'll build one, test it on a classmate and make it better." Invite one volunteer by learner number. If they're stuck: "Want a hint, or one more try?" | The volunteer plays: a wrong code, Hint, the receipt and the lock pictures, the right code, the snack party. The class calls out guesses |
| 2-5 | Hand out the starting check: odd numbers A, even numbers B. Say: "On your own. Write what you think. There's no trick." | Starting check alone, up to 3 minutes. No partner, no AI |

## Main activities (5-35 minutes)

| Min | Activity | Keyboard | Teacher | Students | Standard |
|---|---|---|---|---|---|
| 5-8 | Plan on paper | Nobody | "Your idea first. The AI comes after. Each of you writes at least one line." Check each idea is suitable for school | Fill the idea card: world, clue, code, ending, colours and mood | 2-AP-13 |
| 8-10 (target, untimed. reference/assignment.md asks for a first playable game by minute 10. With the prompt sent at 8-10 and up to 3 minutes of build, it may arrive at 11-13. Loom 1 times one build; it still needs timing with children) | Instruct the AI | Partner A | "Copy the prompt, fill the five blanks from your card, and send it. While it builds, each of you writes one prediction." | In imagi Edu, open Lovable; new project "Escape - pair N"; paste the starting prompt; fill the five blanks; send. Both write: "When I type a wrong code, I think the game will ___." | 2-AP-17, ISTE 1.5 |
| 10-17 | Test Version 1 and make it theirs | Partner A | "Was your prediction right? What would make it feel more like your world?" | Play: things, a wrong code, an empty code, Hint, the right code, Restart. Send one change in their own words. Play it again | 2-AP-17 |
| 17-23 | User test | The player | Pairs 1 and 2 swap, 3 and 4, and so on. "Players, play. Creators, no helping and no pointing." At 20: "Swap." | One learner plays the neighbours' game while a creator watches and writes: "The player clicked ___ first. They got stuck at ___." | 2-AP-15 |
| 23-31 | Refine from feedback | Partner B | "What did your player do? Which change helps them? Why that one?" | Each child proposes a change. The pair picks one and writes Change / Because / Keep / Check. Partner B sends it. Both predict what a new player will do | 2-AP-15, 2-AP-19, SL.7.1 |
| 31-35 | Retest | Partner B | "Test the change, then one thing that should still work." "Lovable says it's done. What happened when you tried it?" | Test the change, then a kept rule. Write the result next to the prediction. If there's time, a new player tries it | 2-AP-17, ISTE 1.4 |

No playable game by minute 12: the pair moves to the paper backup. The help steps for every stuck moment are in [lesson-plan-tom-flow.md](lesson-plan-tom-flow.md), "When someone is stuck".

## Closure (35-45 minutes)

| Min | Teacher | Students |
|---|---|---|
| 35-38 | Hand out the other check. "Same as before: on your own." | The other check, alone |
| 38-45 | "Close your Lovable tab. Open your project again from imagi and check it's still there. What would you add next?" If a minute is left, ask two pairs: "What did you change that made it work better?" | Reopen the project from imagi (not tested on the student route). Fill the maker note and the take-home card: the game, one choice we made, the next idea |

## Assessment

### Formative, during class

| Evidence | When | Look for |
|---|---|---|
| Idea card | 5-8 | At least one line from each partner, in their own words |
| Prediction line | 8-10, 23-31 | Written before the test |
| Playtest line | 17-23 | What the player did, not what they should have done |
| Change / Because / Keep / Check | 23-31 | The change comes from what the player did; says what must stay |
| Retest result | 31-35 | The change and a kept rule, compared with the prediction |
| "What happened when you tried it?" | Any time | They describe what they saw, not what Lovable said |

Record per pair on the per-pair sheet in [scoring-guide.md](scoring-guide.md): first playable minute, paper backup used, adult rescues, build waits, the change chosen and why, and whether a player asked to make their own game.

### Checks A and B

Each child does one check at the start (2-5) and the other at the end (35-38), alone, up to 3 minutes each. Odd learner numbers do A then B; even numbers do B then A. Record any reading support. Keep the first answer before any coaching.

| Check | 0 | 1 | 2 |
|---|---|---|---|
| Reason (Q1) | No relevant reason | Spots the failure | Uses the result and names an untested rule |
| Instruction (Q2) | Vague or breaks a rule | Specifies the change | Specifies the change and what to keep |
| Test (Q3) | Only "test it" | An action and expected result | Checks the fix and a kept rule, with expected results |

Score each child alone with [scoring-guide.md](scoring-guide.md). A pair's game is not an individual score. Missing answers stay missing, not zero. These are classroom checks, not validated measures. The maker note shows each child's own account: "The player did ___. We changed ___. The next test showed ___."

## Differentiation

| Learners | Support |
|---|---|
| Need reading support | Read check questions aloud on request and note it on the sheet. The help card has one action per line. Children fill five blanks, not a whole prompt. A child may say or sketch an idea; the partner or teacher writes it in the child's words |
| English learners | Put the vocabulary on the board with a small drawing for each word. Sentence frames on the playtest card ("The player clicked ___ first.") give the structure. A pair may plan in their home language, then put the five blanks into English with the teacher, keeping the child's words. Not tested: how Lovable handles blanks in other languages |
| Early finishers | A second player who hasn't seen the game tries it, and the pair writes what happened. Or one step up the challenge ladder (below). Or write the invitation: "Can you escape my ___?" |
| Learners who struggle | Ask one question at a time and wait. Keep to one change. The paper backup lets a pair choose, play, change and retest without a laptop. The teacher may scribe, but never fills a blank with an idea |

## Extensions

The optional 15 minutes are for an upgrade or a second test, never for finishing the core. Next challenges, one at a time:

1. A second clue that the player needs before the code works.
2. A new rule: click things in the right order.
3. Two players taking turns on one laptop. No second device and no link.
4. Freestyle: the pair's own kind of game, still one screen.

## Cross-curricular links

| Area | Where it shows up |
|---|---|
| English (speaking and listening) | Explaining a choice to a partner and to the player (SL.7.1) |
| Values: respect and fair play | Taking turns at the keyboard; not helping or pointing while a classmate plays |
| Mathematics | Number codes, order, counting clues (only if the learners choose a number code) |
| Digital safety | Learner numbers, never names; no personal details in AI; sharing only through an adult |

These are links to other areas, not extra learning claims.
