// One node of the Binary Search Tree
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


// BST is the Binary Search Tree that contains all of the nodes.
class BST {
  constructor() {
    this.node = null;
  }

  add(newValue) {
    // If there's no node here yet, create a new one for the new value.
    const node = this.node;
    if (node === null) {
      this.node = new Node(newValue);
      return;
    }

    // There's a node at this level, so search for the right spot to create a
    // new node for the new value.
    const insertValue = function(node, newValue) {
      // If the new value is lower than the value at the current level, search
      // the left side for an empty place.
      if (newValue < node.value) {
        // If there's no value to the left of the current node, insert the
        // provided value there.
        if (node.left === null) {
          node.left = new Node(newValue);
          return;
        }

        // Otherwise, dig deeper
        return insertValue(node.left, newValue);

      // If the new value is higher than the value of the current node, look for
      // an empty spot on the right.
      } else if (newValue > node.value) {
        if (node.right === null) {
          node.right = new Node(newValue);
          return;
        }

        return insertValue(node.right, newValue);
      }
    };

    return insertValue(node, newValue);
  }

  // Return the node with the lowest value in the Binary Search Tree.
  findMin() {
    let current = this.node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.node;
  }

  // Return the node with the highest value in the Binary Search Tree.
  findMax() {
    let current = this.node;
    while (current.right !== null) {
      current = current.right;
    }
    return current.node;
  }

  // Return a specific node from the Binary Search Tree
  find(value) {
    let current = this.node;
    while (current.value !== value) {
      // If the provided value is less than the value at the current level, go
      // down the left side. Otherwise, go down the right side.
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }

      // If we get here and the current value is null, the requested value
      // wasn't found.
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  // Return true or false... Is there a node with the specified value in the
  // tree?
  isPresent(value) {
    let current = this.node;
    while (current !== null) {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // Remove a node with the specified value from the tree.
  remove(value) {
    // Remove a node with the specified value and return the replacement node.
    const removeNode = function(node, value) {
      if (node === null) {
        return null;
      }

      // If the node's value matches the specified value, we found the right
      // one.
      if (value === node.value) {
        // If the node has no children, return null... There's no node to
        // replace the removed node with.
        if (node.left === null && node.right === null) {
          return null;
        }

        // If the node has no left child, return the right child... That's the
        // replacement.
        if (node.left == null) {
          return node.right;
        }

        // If the node has no right child, return the left child... That's the
        // replacement.
        if (node.right == null) {
          return node.left;
        }

        // If we get here, the node has two children.

        // Find the last node on the left side of the node to the right.
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        // Replace the current node with the leaf node from the previous step.
        node.value = tempNode.value;

        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };

    this.node = removeNode(this.node, value);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }

  findMinHeight(node = this.node) {
    if (node === null) {
      return -1;
    };

    const left = this.findMinHeight(node.left);
    const right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  findMaxHeight(node = this.node) {
    if (node === null) {
      return -1;
    };

    const left = this.findMaxHeight(node.left);
    const right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  inOrder() {
    if (this.node === null) {
      return null;
    } else {
      const result = [];
      const traverseInOrder = (node) => {
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      };

      traverseInOrder(this.node);
      return result;
    };
  }

  preOrder() {
    if (this.node === null) {
      return null;
    } else {
      const result = [];
      const traversePreOrder = (node) => {
        result.push(node.value);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };

      traversePreOrder(this.node);
      return result;
    };
  }

  postOrder() {
    if (this.node === null) {
      return null;
    } else {
      const result = [];
      const traversePostOrder = (node) => {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.value);
      };

      traversePostOrder(this.node);
      return result;
    }
  }

  levelOrder() {
    const result = [];
    const queue = [];

    if (this.node !== null) {
      queue.push(this.node);

      while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value);

        if (node.left != null) {
          queue.push(node.left);
        };

        if (node.right != null) {
          queue.push(node.right);
        };
      }

      return result;
    } else {
      return null;
    };
  };
}

const bst = new BST();
const values = [21, 56, 62, 67, 78, 81, 97, 115];
// const values = [9, 4, 17, 3, 6, 22, 5, 7, 20];

values.forEach((value) => bst.add(value));

console.log('minHeight: ' + bst.findMinHeight());
console.log('maxHeight: ' + bst.findMaxHeight());
console.log('isBalanced: ' + bst.isBalanced());

/*
bst.add(10);
console.log('minHeight: ' + bst.findMinHeight());
console.log('maxHeight: ' + bst.findMaxHeight());
console.log('isBalanced: ' + bst.isBalanced());
*/

console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());
console.log('levelOrder: ' + bst.levelOrder());
