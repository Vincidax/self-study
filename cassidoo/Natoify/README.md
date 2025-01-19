# NATO Phonetic Alphabet Translator

A JavaScript function to translate text into the NATO phonetic alphabet. This tool supports letters, numbers, spaces, and can handle unknown characters gracefully.

---

## Features

- Converts letters (A-Z) into their NATO phonetic equivalents (e.g., "A" → "Alpha").
- Handles numbers (0-9) by converting them to their phonetic equivalents (e.g., "3" → "Three").
- Replaces spaces with `(space)` for clarity.
- Keeps unsupported characters (e.g., punctuation) as-is.
---

## Example Usage

```javascript
// Import or include the function in your project

console.log(natoify('hello world'));
// Output: "Hotel Echo Lima Lima Oscar (space) Whiskey Oscar Romeo Lima Delta"

console.log(natoify('3spooky5me'));
// Output: "Three Sierra Papa Oscar Oscar Kilo Yankee Five Mike Echo"