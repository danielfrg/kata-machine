type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;

    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;

        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;
        // free (not needed in JS)
        // head.next = undefined;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    print(): void {
        let c = this.head;
        console.log("!!!", this.head);
        for (let i = 0; i < this.length; i++) {
            if (c && c.value) {
                console.log(c.value);
            }
            if (c && c.next) {
                c = c.next;
            }
        }
    }
}
