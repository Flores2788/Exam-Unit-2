function traverse(node, level = 0){
    if (!node) return { sum: 0, depth: level, count: 0 };

    const left = traverse(node.left, level + 1);
    const right = traverse(node.right, level + 1);

    const sum = node.value + left.sum + right.sum;
    const depth = Math.max(left.depth, right.depth);
    const count = 1 + left.count + right.count;

    return { sum, depth, count };
}