#!/usr/bin/env node

import chalk from "chalk";

const word = process.argv.slice(2).join(" ");

if (!word) {
  console.error(chalk.red("Usage: define <word>"));
  process.exit(1);
}

async function define(word) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
  );

  if (res.status === 404) {
    console.error(chalk.red(`No definition found for "${word}".`));
    process.exit(1);
  }

  if (!res.ok) {
    console.error(chalk.red(`Error fetching definition (HTTP ${res.status}).`));
    process.exit(1);
  }

  const entries = await res.json();
  const entry = entries[0];
  const wordLabel = chalk.bold.white(
    entry.word.charAt(0).toUpperCase() + entry.word.slice(1)
  );

  // Gather all meanings across all entries
  const allMeanings = entries.flatMap((e) => e.meanings);

  // Group by part of speech
  const grouped = {};
  for (const meaning of allMeanings) {
    const pos = meaning.partOfSpeech;
    if (!grouped[pos]) grouped[pos] = [];
    grouped[pos].push(...meaning.definitions);
  }

  console.log();

  for (const [pos, defs] of Object.entries(grouped)) {
    console.log(`${wordLabel} ${chalk.dim.italic("<" + pos + ">")}`);
    console.log();

    defs.slice(0, 4).forEach((def, i) => {
      console.log(chalk.yellow(`${i + 1}.`) + " " + chalk.white(def.definition));
      if (def.example) {
        console.log(chalk.dim(`   "${def.example}"`));
      }
    });

    console.log();
  }

  // Phonetic
  const phonetic = entries.flatMap((e) => e.phonetics).find((p) => p.text);
  if (phonetic) {
    console.log(chalk.dim("  Pronunciation: " + phonetic.text));
    console.log();
  }
}

define(word).catch((err) => {
  console.error(chalk.red("Unexpected error: " + err.message));
  process.exit(1);
});
