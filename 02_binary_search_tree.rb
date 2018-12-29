###############################################################################
#
# 2. Write ruby code that models the following (Binary Search Tree):
# 
#     left child is always less than the parent & right child is always bigger than
#     the parent.
# 
#     A parent can only have 2 immediate child node.
# 
#     1. Write a method to add item to the model so caller can build the tree
#        like below. [see Binary_Search_Tree instance method: add]
#     2. Then perform a walk of depth first search on the model so we get result
#        like this: `21, 56, 62, 67, 78, 81, 97, 115`
#        [see Binary_Search_Tree instance method: pre_order]
# 
#     ![Binary Search Tree example](images/Binary_Search_Tree_example.jpg)
#
################################################################################

class Node
  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end

  def value
    @value
  end

  def value=(value)
    @value = value
  end

  def left
    @left
  end

  def left=(node)
    @left = node
  end

  def right
    @right
  end

  def right=(node)
    @right = node
  end
end

class Binary_Search_Tree
  def initialize
    @node = nil
  end

  def add(new_value)
    # If there's no node here yet, create a new one for the new value.
    node = @node
    if (node == nil)
      @node = Node.new(new_value)
      return nil
    end

    # If we get here, there was already a node at this level, so search for the
    # right spot to insert a node with the new value.
    return insert_value(node, new_value)
  end

  def pre_order
    result = []
    traverse_pre_order(@node, result)
    result
  end

  ## Helpers

  # Find an empty spot in the tree and insert a new node with the specified
  # value.
  def insert_value(node, value)
    # If the provided value is lower than the current node's value, search the
    # left side for an empty spot.
    if value < node.value
      # If there's no value to the left of the current node, insert the
      # provided value there.
      if (node.left == nil)
        node.left = Node.new(value)
        return nil
      end

      # Otherwise, dig deeper
      return self.insert_value(node.left, value)

    # If the provided value is higher than the value of the current node, look
    # for an empty spot on the right side of the node.
    elsif value > node.value
      # If there's no value to the right of the current node, insert the
      # provided value there.
      if (node.right == nil)
        node.right = Node.new(value)
        return nil
      end

      # Otherwise, dig deeper
      return insert_value(node.right, value)
    end
  end

  def traverse_pre_order(node, result)
    result << node.value
    self.traverse_pre_order(node.left, result) if node.left != nil
    self.traverse_pre_order(node.right, result) if node.right != nil
  end
end

values = [21, 56, 62, 67, 78, 81, 97, 115]

bst = Binary_Search_Tree.new

values.each { |value| bst.add(value) }

p bst.pre_order