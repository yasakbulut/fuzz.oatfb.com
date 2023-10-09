import {nouns, verbs} from "./fuzz-words";

function verbTheNoun() {
    const noun = random(nouns);
    const verb = random(verbs);
    return `${verb} the ${noun}`;
}

function notEmpty(maybeWord: string) {
    return maybeWord.trim().length > 0;
}

function nounOfNoun() {
    const the = maybeThe();
    const result = [the, `${random(nouns)} of`, the, random(nouns)]
    return result.filter(notEmpty).join(' ');
}

function nounSNoun() {
    const result = [maybeThe(), `${random(nouns)}'s`, random(nouns)];
    return result.filter(notEmpty).join(' ');
}

function nounAndNoun() {
    const result = [maybeThe(), `${random(nouns)} and`, maybeThe(), random(nouns)]
    return result.filter(notEmpty).join(' ');
}

function random<T>(items: T[]): T {
    return items[randInt(items.length)];
}

function maybeThe() {
    if (Math.random() < 0.5) {
        return 'the'
    }
    return '';
}

const templates = [verbTheNoun, nounSNoun, nounAndNoun, nounOfNoun];
export function generate() {
    return random(templates)().trim();
}

function randInt(nExclusive: number) {
    return Math.floor(Math.random()*nExclusive);
}