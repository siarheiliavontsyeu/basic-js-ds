const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);
    if (!this.root()) {
      this._root = node;
    } else {
      this.insertNode(this._root, node);
    }
  }

  insertNode(where, what) {
    if (what.data < where.data) {
      if (where.left === null) {
        where.left = what;
      } else {
        this.insertNode(where.left, what);
      }
    } else {
      if (where.right === null) {
        where.right = what;
      } else {
        this.insertNode(where.right, what);
      }
    }
  }

  searchNode(node, data) {
    if (data === node.data) return node;

    if (data < node.data) {
      if (node.left) {
        return this.searchNode(node.left, data);
      } else {
        return null;
      }
    } else {
      if (node.right) {
        return this.searchNode(node.right, data);
      } else {
        return null;
      }
    }
  }

  has(data) {
    return !!this.searchNode(this._root, data);
  }

  find(data) {
    return this.searchNode(this._root, data);
  }

  remove(data) {
    this._root = this.deleteNode(this._root, data);
  }

  deleteNode(node, data) {
    if (node === null) {
      return node;
    }
    if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }
      node.data = this.getMinNode(node.right).data;
      node.right = this.deleteNode(node.right, node.data);
    }
    return node;
  }

  min() {
    return this.getMinNode(this._root).data;
  }

  max() {
    return this.getMaxNode(this._root).data;
  }

  getMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.getMinNode(node.left);
    }
  }

  getMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.getMaxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
