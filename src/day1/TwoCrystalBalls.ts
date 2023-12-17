export default function two_crystal_balls(breaks: boolean[]): number {
    let dist = Math.floor(Math.sqrt(breaks.length));

    let i = dist;
    for (; i < breaks.length; i = i + dist) {
        if (breaks[i]) {
            break;
        }
    }

    i = i - dist;

    for (let j = i; j < i + dist; j++) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}
