export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; haystack.length; i++) {
        if (haystack[i] == needle) {
            return true;
        }
    }

    return false;
}
