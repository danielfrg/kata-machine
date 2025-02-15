export default class DoublyLinkedList<T> {
    public length: number;

    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("oh no");
        } else if (idx == this.length) {
            this.append(item);
            return;
        } else if (idx == 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        const node = { value: item } as Node<T>;

        node.next = curr;
        if (curr && curr.prev) {
            node.prev = curr.prev;
            curr.prev = node;
            curr.prev.next = curr;
        }
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value == item) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return;
        }

        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (curr.prev) {
            curr.prev = curr.next;
        }
        if (curr.next) {
            curr.next = curr.prev;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }
        if (curr === this.tail) {
            this.tail = curr.prev;
        }
        curr.prev = curr.next = undefined;
        return curr.value;
    }

    get(idx: number): T | undefined {}

    removeAt(idx: number): T | undefined {}
}

class Node<T> {
    public next: Node<T> | undefined;
    public prev: Node<T> | undefined;

    public value: T;

    constructor(item: T) {
        this.value = item;
        this.next = undefined;
        this.prev = undefined;
    }
}
