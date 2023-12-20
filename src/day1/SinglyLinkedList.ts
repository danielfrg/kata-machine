export default class SinglyLinkedList<T> {
    public length: number;

    public first: Node<T> | undefined;
    public last: Node<T> | undefined;

    constructor() {}

    print(): void {
        if (this.first == undefined) {
            return;
        }

        let curr: Node<T> = this.first;
        for (let i = 0; i < this.length; ++i) {
            console.log(curr.value);
            if (curr.next) {
                curr = curr.next;
            }
        }
    }

    append(item: T): void {
        if (this.first == undefined && this.last == undefined) {
            this.first = new Node(item);
            this.last = this.first;
            this.length = 1;
        } else if (this.last != undefined) {
            this.last.next = new Node(item);
            this.last = this.last.next;
            this.length++;
        }
    }

    prepend(item: T): void {
        if (this.first == undefined && this.last == undefined) {
            this.first = new Node(item);
            this.last = this.first;
            this.length = 1;
        } else {
            const first = new Node(item);
            first.next = this.first;
            this.first = first;
            this.length++;
        }
    }

    insertAt(item: T, idx: number): void {}

    get(idx: number): T | undefined {
        if (this.first == undefined) {
            return undefined;
        }

        let curr: Node<T> = this.first;
        for (let i = 0; i < idx; ++i) {
            if (curr.next) {
                curr = curr.next;
            } else {
                return undefined;
            }
        }

        return curr.value;
    }

    removeAt(idx: number): T | undefined {
        if (this.first == undefined || idx > this.length) {
            return undefined;
        }

        if (idx == 0) {
            const val = this.first.value;
            this.first = this.first.next;
            this.length--;
            return val;
        }

        let prev: Node<T> = this.first;
        let curr: Node<T> = this.first.next!;
        for (let i = 1; i <= idx; ++i) {
            if (i == idx) {
                if (idx == this.length) {
                    prev.next = undefined;
                    this.last = prev;
                } else if (prev.next && curr.next) {
                    prev.next = curr.next;
                }
                this.length--;
                return curr.value;
            }

            if (curr.next) {
                prev = prev.next!;
                curr = curr.next;
            } else {
                return undefined;
            }
        }

        return undefined;
    }

    remove(item: T): T | undefined {
        if (this.first == undefined) {
            return undefined;
        }

        if (this.first.value == item) {
            const val = this.first.value;
            this.first = this.first.next;
            this.length--;
            return val;
        }

        let prev: Node<T> = this.first;
        let curr: Node<T> = this.first.next!;
        for (let i = 1; i < this.length; ++i) {
            if (curr.value == item) {
                if (i == this.length - 1) {
                    prev.next = undefined;
                    this.last = prev;
                } else if (prev.next && curr.next) {
                    prev.next = curr.next;
                }
                this.length--;
                return curr.value;
            }

            if (curr.next) {
                prev = prev.next!;
                curr = curr.next;
            } else {
                return undefined;
            }
        }

        return curr.value;
    }
}

class Node<T> {
    public next: Node<T> | undefined;

    public value: T;

    constructor(item: T) {
        this.value = item;
        this.next = undefined;
    }
}
