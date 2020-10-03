class TreeNode {
    constructor(name) {
    this.name = name;
    this.descendents = [];
    }
   }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);

   //log the names of everyone

   function log(node){
       console.log(node.name)

        
   console.log(log(abe));

   //linked lists

   let head = {value: 10, next: node2};

   let node2 = {value: 10, next: node3};

   let node3 = {value: 109, next: node4};

   let node4 = {value: 1099, next: null}:

   //delete a node

   head.next = node3; //deletes node 2 fromt he list

   head.next = node2: //adds node 2 back in

   //find node with value 109 starting at the head

   function find88th(head){

        currentNode = head;
        while(true){
            if (currentNode.val === 109) {
                return currentNode;
            }
            else{
                if(currentNode.next === null){return null;}
                currentNode = currentNode.next;
            }
        }
   }
}

//Recursive functions, Tree Modifier

function treeModifier(treeNode, modFunc){
    modFunc(treeNode);
    if(treeNode.descendents.length === 0) {
        return null;
    } else { //loop through the array of descendents and recursively call treeModifier
        for(const node of treeNode.desscendents){
            treeModifier(node, modFunc);
        }
    }
}

function modifier(node){
    node.value = "***" + node.value + "***"
}