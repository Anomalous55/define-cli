# `define` — CLI Dictionary Tool

Look up word definitions right from your terminal.

## Usage

```
define <word>
```

**Example:**
```
define prudent
```

**Output:**
```
Prudent <adjective>

1. Careful or wise in handling practical matters; exercising good judgment or common sense.
   "a prudent manager of money."
2. Characterized by or resulting from care or wisdom in practical matters.
   "a prudent investment."

  Pronunciation: /ˈpruːd(ə)nt/
```

---

## Installation

### Requirements
- Node.js v18 or higher (uses native `fetch`)

### Steps

**1. Clone or download this folder, then install dependencies:**
```bash
cd define-cli
npm install
```

**2. Link globally so `define` works anywhere:**
```bash
npm link
```

That's it. Now run:
```bash
define serendipity
define ephemeral
define prudent
```

### Uninstall
```bash
npm unlink -g define-cli
```

---

## How It Works

Fetches definitions from the free [DictionaryAPI](https://dictionaryapi.dev/) — no API key needed.
Results are grouped by part of speech, showing up to 4 definitions each with example sentences where available.
# define-cli
# define-cli
# define-cli
