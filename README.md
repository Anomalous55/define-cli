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
- Node.js v18 or higher

### Steps

**1. Clone the repository and install dependencies:**
```bash
git clone https://github.com/YOUR_USERNAME/define-cli.git
cd define-cli
npm install
```

**2. If npm link fails with a permissions error**, configure npm to use a local directory:

**bash** — add to `~/.bashrc`:
```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH="$HOME/.npm-global/bin:$PATH"
```
Then `source ~/.bashrc`.

**zsh** — add to `~/.zshrc`:
```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH="$HOME/.npm-global/bin:$PATH"
```
Then `source ~/.zshrc`.

**fish:**
```fish
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
set -Ux fish_user_paths $HOME/.npm-global/bin $fish_user_paths
```

**3. Link globally:**
```bash
npm link
```

Now run `define` from anywhere:
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
