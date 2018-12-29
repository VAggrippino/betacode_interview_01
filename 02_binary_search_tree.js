/* eslint-disable */
/*******************************************************************************
 * 
 * 2. Write ruby code that models the following (Binary Search Tree):
 * 
 *    left child is always less than the parent & right child is always bigger
 *    than the parent.
 * 
 *    A parent can only have 2 immediate child nodes.
 * 
 *    1. Write a method to add an item to the model so the caller can build the
 *       tree like below. BST. [see BST instance method: add]
 *    2. Then perform a walk of depth first search on the model so we get result
 *       like this: `21, 56, 62, 67, 78, 81, 97, 115`
 *       [see BST instance method: preOrder]
 * 
 *    ![Binary Search Tree example](images/Binary_Search_Tree_example.jpg)
 * 
 *******************************************************************************
*/
/* eslint-enable */


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

        // Otherwise, dig deeper
        return insertValue(node.right, newValue);
      }
    };

    return insertValue(node, newValue);
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
}

const bst = new BST();
const values = [21, 56, 62, 67, 78, 81, 97, 115];

values.forEach((value) => bst.add(value));

console.log(bst.preOrder());

