import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

const glimmerTS = ["typescript", "typescript.glimmer"];
const glimmerJS = ["javascript", "javascript.glimmer"];
const glimmer = [...glimmerJS, ...glimmerTS];
const javascript = ["javascript"];
const typescript = ["typescript"];
const allLanguages = [...glimmer, ...javascript, ...typescript].reduce(
  (acc, language) => {
    if (!acc.includes(language)) {
      acc.push(language);
    }
    return acc;
  },
  [],
);

function newSnippet(language, path) {
  return {
    language,
    path,
  };
}
const allSnippet = allLanguages.map((language) => {
  return newSnippet(language, "./snippets/all.json");
});

const allTemplateTagSnippet = glimmer.map((language) => {
  return newSnippet(language, "./snippets/all-template-tag.json");
});

const glimmerJSSnippet = glimmerJS.map((language) => {
  return newSnippet(language, "./snippets/javascript.glimmer.json");
});

const glimmerTSSnippet = glimmerTS.map((language) => {
  return newSnippet(language, "./snippets/typescript.glimmer.json");
});

const javascriptSnippet = javascript.map((language) => {
  return newSnippet(language, "./snippets/javascript.json");
});

const typescriptSnippet = typescript.map((language) => {
  return newSnippet(language, "./snippets/typescript.json");
});

packageJson.contributes.snippets = [
  ...allSnippet,
  ...allTemplateTagSnippet,
  ...glimmerJSSnippet,
  ...glimmerTSSnippet,
  ...javascriptSnippet,
  ...typescriptSnippet,
];

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
