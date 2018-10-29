export class Stack<TData> {

    private _topNode!: Node<TData>;
    private _count: number = 0;

    //return the total number of the elements in the stack
    public count(): number {
        return this._count;
    }

    //push a new value into the stack
    public push(data: TData): void {
        //create a new node and put it on the top of the stack
        // if (this._topNode === undefined){
        //     throw new Error("Top node is undefined")
        // }
        // else {
        let node = new Node<TData> (data, this._topNode);
        this._topNode = node;
        //update the count
        this._count ++;
        // }
    }

    //pop the value of the top node out of the stack
    public pop(): TData {
        // if (this._topNode === undefined) {
        //     throw new Error ('Top node is undefined')
        // }
        // else {
        //Get the top node of the stack
        let poppedNode = this._topNode;
        this._topNode = poppedNode.previous;

        //update the count
        this._count --;

        return poppedNode.data;
        // }
    }

    //get the value of the top data without changing the stack
    public peek(): TData {
        if (this._topNode === undefined) {
            throw new Error ('Top node is undefined')
        }
        else {        
        return this._topNode.data;
        }
    }
}

export class Node<T> {
    previous: Node<T>;
    data: T;

    constructor (data: T, previous: Node<T>) {
         this.data = data;
         this.previous = previous;
    }
}