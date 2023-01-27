// LinkedList factory
class LinkedList {
    constructor() {
        this.head = null;
        // this.size = 0;
    }
    // Functions:
    // Add a node to the end of the list
    append(value) {
        // Create a new node
        let node = new Node(value);
        // Pointer to current node while iterating
        let current;
        // Set the new node as the head if the list is empty
        if (this.head == null) {
            this.head = node;
        } else {
            //Iterate through list from head to end
            current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            //Add the new node to the end
            current.nextNode = node;
        }
    }

    // Add a node to the start of the list
    prepend(value) {
        // Create a new node
        let node = new Node(value);
        // Set the new node as the head if the list is empty
        if (this.head == null) {
            this.head = node;
        } else {
            // Move current head to new node's pointer
            let current = this.head;
            node.nextNode = current;
            // Set new node as the new head
            this.head = node;
        }
    }

    // Return total number of nodes in the list
    size() {
        let size = 0;
        let current;
        // Return 0 for an empty list
        if (this.head == null) {
            return size;
        } else {
           // Interate through list and increase size counter for each node
            current = this.head;
            do {
                size++;
                current = current.nextNode
            }
            while (current);
            return size;
        }
    }

    // Return the first node in the list
    head() {
        return this.head;
    }

    // Return the last node in the list
    tail() {
        //Iterate through list from head to end
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        //Return the last node
        return current;
    }

     // Return the node at the given index
    at(index) {
        //Iterate through list from head to end
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        //Return the last node
        return current;
    }

    // Remove the last element from the list
    pop() {
        //Iterate through list from head to end and keep track of node previous to current
        let prev;
        let current = this.head;
        while (current.nextNode) {
            prev = current
            current = current.nextNode;
        }
        // Set next-to-last node's pointer to null
        prev.nextNode = null;
    }

    // Returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
         //Iterate through list from head to end
         let current = this.head;
         // Return true if the current node's value matches the argument
         do {
            if (current.value === value) {
                return true;
             }
             current = current.nextNode;
        }
        while (current);
        // Return false if no node returned true
        return false;
    }

    // Returns the index of the node containing value, or null if not found.
    find(value)  {
        //Iterate through list from head to end
        let current = this.head;
        let index = 0;
        // Return index if the current node's value matches the argument
        do {
           if (current.value === value) {
               return index;
            }
            index++
            current = current.nextNode;
       }
       while (current);
       // Return null if no node matches the argument
       return null;
   }

    toString() {
         //Iterate through list from head to end
         let current = this.head;
         let string = "";
         // Return index if the current node's value matches the argument
         do {
            string = string.concat("("+ current.value + ") -> ");
            current = current.nextNode;
        }
        while (current);
        // Return null if no node matches the argument
        string = string.concat("null");
        return string;
    }
    // OPTIONAL: insertAt(value, index), removeAt(index)

}
// Node factory
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}


const testList = new LinkedList;
testList.append("bravo");
testList.append("charlie");
// Show a string of the object to avoid "pass by reference" issue
console.log(
    JSON.stringify(
        testList, null, 2
    )
);

testList.append("delta");
testList.prepend("alpha");

sizeCheck = testList.size()
console.log(sizeCheck);

console.log(testList.head);

let tail = testList.tail();
console.log(tail);

console.log(testList.at(2));
console.log(
    JSON.stringify(
        testList, null, 2
    )
);

testList.pop();
console.log(
    JSON.stringify(
        testList, null, 2
    )
);

console.log(testList.contains("charlie"));
console.log(testList.contains("echo"));

console.log(testList.find("bravo"));
console.log(testList.find("foxtrot"));

console.log(testList.toString());