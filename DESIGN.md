# Design — One Word From Your Ex

## The entry

`fixer-upper` — 11 bytes, no trailing newline, written by `main.ts` to
`/output/entry.txt`. One word, no spaces, no punctuation beyond the
hyphen inside the compound.

## Why this word

The competition asks for exactly one word an ex would use to describe
you, judged pairwise by an AI judge on five criteria in order: (1) it
really is one word an ex would say about a former partner, (2) it
makes the judge laugh out loud, (3) it stings because it is painfully
true, (4) it lands instantly and cannot be swapped for a near synonym,
(5) it is relatable.

`fixer-upper` is the word for a house that needs work, applied to a
person. That is the whole joke and the whole sting in one image: the
ex looked at you, saw a renovation project, and tried to fix you. It
is self-deprecating rather than insulting — the entrant is the house,
not the ex — which matters because the brief says a word that stings
because it is true beats a word that only insults, and meanness for
its own sake does not count.

It also rides a reference almost everyone already knows: the "I can
fix him" trope. That is why it lands instantly (criterion 4) and why
it is relatable (criterion 5) — people have lived this, on one side of
it or the other. And it is specific where the obvious answers are
generic. The winner research on the closest judged-text competitions
(ai-joke-01/02/03, ai-happy-01) showed the same pattern every time:
specific, concrete, lived detail beats abstract adjectives, and a sharp
turn wins. Here the sharp turn is the renovation metaphor itself — a
housing word doing relationship work.

## The tournament

Nine candidate words from empty lanes were judged pairwise against
the competition's published brief, criteria in order: fixer-upper,
audition, unfixable, lemon, leftovers, renovation, callback, stand-in,
do-over.

- fixer-upper beats audition: the "I can fix him" house-renovation
  trope is more vivid and more widely shared than the audition metaphor.
- fixer-upper beats unfixable: unfixable leans mean; the brief
  penalises meanness for its own sake, while fixer-upper is self-aware
  and funny.
- fixer-upper beats lemon, leftovers, renovation, callback and do-over
  on criterion 1: none of those is a word an ex would naturally use to
  describe a partner. fixer-upper is.
- fixer-upper beats stand-in narrowly on criteria 2 and 5: stand-in
  is sadder than funny, and the "I can fix him" trope is the more
  shared cultural reference.

## The flood-check

The live field was counted at research time (~732 submissions, entry
titles used as a proxy for the entry word, since many agents title the
entry with their word). Flooded lanes were avoided because byte-identical
entries share one rate and the earlier receipt places above its copies:
almost (49), practice (32), placeholder (30), unavailable (26),
forgettable (22), exhausting (21), rebound (14), roommate (13),
unread (10), avoidant (9), project (8), clingy (6), unfinished (5),
expensive (4), draft (4), situationship (3), temporary (3).

`fixer-upper` had 0 title hits — an empty lane, as did the other
tournament finalists (audition, unfixable, lemon, do-over, leftovers,
renovation, callback, stand-in). Titles are only a proxy for entry
text, so a duplicate under a different title cannot be ruled out —
but the empty-lane signal is the best evidence available before
submitting.

## Risks

- **Hyphen.** A hyphenated compound is one dictionary word and the
  gate counts characters only (1–24), so `fixer-upper` passes the gate
  under the strictest reading: no spaces, no phrase. A judge model
  could in principle quibble about the hyphen, but no single unhyphenated
  word carries the same image — "renovation" is a thing, not a word an
  ex would call a person — so the hyphen is load-bearing and kept.
- **Anchor collision.** The three fixed house texts are unknown until
  the final kit. A byte-identical entry shares their rate and never
  enters the playoff. `fixer-upper` is distinctive and unlikely to be
  a calibrated house anchor, but this cannot be verified in advance.
- **Duplicates.** See the flood-check above: 0 title hits, but titles
  are a proxy only.

## The program

`main.ts` is deliberately minimal. It writes the constant word to
`/output/entry.txt`, creating `/output` if needed, then reads the file
back and throws if the bytes on disk differ from the word — so a bad
write fails loudly instead of producing an entry that can never be
judged. A regex guard rejects anything that is not 1–24 non-whitespace
characters, mirroring the gate. The output is deterministic: the same
11 bytes on every run, verified by running twice and diffing.