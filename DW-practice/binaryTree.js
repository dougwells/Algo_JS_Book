function BinarySearchTree() {

    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    this.insert = function(key){

        var newNode = new Node(key);

        //special case - first element
        if (root === null){
            root = newNode;
        } else {
            insertNode(root,newNode);
        }
    };

    var insertNode = function(node, newNode){
        if (newNode.key < node.key){
            if (node.left === null){
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null){
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
        // console.log("left:", node.left.key, "key:", node.key, "right:", node.right.key)
    };


    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };

    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root, callback);
    };

    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback);
    };

    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    //find minima
    this.min = function(){
      return minNode(root);
    };

    var minNode = function(node){
      if(node.left === null){
        return node.key
      }
      return minNode(node.left);
    };

    //find maxima
    this.max = function(){
      return maxNode(root);
    };

    var maxNode = function(node){
      if(node.right === null){
        return node.key
      }
      return maxNode(node.right);
    };

  }



//test out the binary tree

  //Vars needed to build & print tree
  function printTree(a){console.log(a)}
  var tree = new BinarySearchTree();
  var treeArr = [11,7,15,5,9,13,20,3,6,8,10,12,14,18,25];

  //create tree
  treeArr.map(function(key){tree.insert(key);});

  //find min & max nodes
  console.log(tree.min());
  console.log(tree.max());

  // //print out tree
  // console.log("----- Pre Order Traverse -----")
  // tree.preOrderTraverse(printTree);
  // console.log('----- In Order Traverse -----')
  // tree.inOrderTraverse(printTree);
  // console.log('----- Post Order Traverse -----')
  // tree.postOrderTraverse(printTree);
