const { nouns, verbs } = require('./fuzz-words');

function verbTheNoun() {
    const noun = random(nouns);
    const verb = random(verbs);
    return `${verb} the ${noun}`;
}

function nounOfNoun() {
    const the = maybeThe();
    const result = [the, `${random(nouns)} of`, the, random(nouns)]
    return result.join(' ');
}

function nounSNoun() {
    const result = [maybeThe(), `${random(nouns)}'s`, random(nouns)];
    return result.join(' ');
}

function nounAndNoun() {
    const result = [maybeThe(), `${random(nouns)} and`, maybeThe(), random(nouns)]
    return result.join(' ');
}

function random(items) {
    return items[randInt(items.length)];
}

function maybeThe() {
    if (Math.random() < 0.5) {
        return 'the'
    }
    return '';
}

const templates = [verbTheNoun, nounSNoun, nounAndNoun, nounOfNoun];
function generate() {
    return random(templates)();
}

function randInt(nExclusive) {
    return Math.floor(Math.random()*nExclusive);
}

module.exports = generate;