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
        //Iterate through list from head to index
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        //Return the node
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

    // Return true if the passed-in value is in the list; otherwise return false.
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
        // Iterate through list from head to end
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

    // Represent LinkedList object as string
    toString() {
        // Declare pointer and string
        let current = this.head;
        let string = "";
        // Concatonate each node's value to string
        do {
        string = string.concat("("+ current.value + ") -> ");
        current = current.nextNode;
        }
        while (current);
        // Concatonate "null" to the end of the string
        string = string.concat("null");
        return string;
    }

    // Insert a new node with the provided value at the given index
    insertAt(value, index) {
        // Create a new node
        let node = new Node(value);
        // Declare pointer and previous
        let current = this.head
        let prev;
        // Iterate to selected index
        for (let i = 0; i < index; i++) {
            prev = current
            current = current.nextNode;
        }
        // Set new node's pointer to current node
        node.nextNode = current;
        // Set previous node's point to new node
        prev.nextNode = node; 
    }

    // Remove the node at the given index
    removeAt(index) {
          // Declare pointer and previous
          let current = this.head
          let prev;
          // Iterate to selected index
          for (let i = 0; i < index; i++) {
              prev = current
              current = current.nextNode;
          }
          // Set previous node's point to current node's pointer, bypasses current node
          prev.nextNode = current.nextNode; 
    }
}

// Node factory
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// Function tests
const testList = new LinkedList;

// Append 2 nodes
testList.append("bravo");
testList.append("charlie");

// CHEAT!: Show a string of the object to avoid "pass by reference" issue
console.log(
    JSON.stringify(
        testList, null, 2
    )
);

// Append node to end and prepend node to beginning of list
testList.append("delta");
testList.prepend("alpha");

// Return number of nodes in list (4)
sizeCheck = testList.size()
console.log(sizeCheck);

// Return first node ("alpha")
console.log(testList.head);

// Return last node ("delta")
let tail = testList.tail();
console.log(tail);

// console.log(testList.at(2));
// console.log(
//     JSON.stringify(
//         testList, null, 2
//     )
// );

// Remove last node ("delta"), console log now shows "charlie" as last node
testList.pop();
console.log(testList.toString());

// Check if list contains "charlie" (true) and "echo" (false)
console.log(testList.contains("charlie"));
console.log(testList.contains("echo"));

// Get index of "bravo" (1) and "echo" (null)
console.log(testList.find("bravo"));
console.log(testList.find("foxtrot"));

// Output list as string ("(alpha) -> (bravo) -> (charlie) -> null")
console.log(testList.toString());

// Insert a new node at index 1 ("alpha2")
testList.insertAt("alpha2", 1);
console.log(testList.toString());

// Remove the node at index 1 ("alpha2")
testList.removeAt(1);
console.log(testList.toString());