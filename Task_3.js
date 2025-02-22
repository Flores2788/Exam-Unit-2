function traverse(node, level = 0){
    if (!node) return { sum: 0, depth: level, count: 0 };

    const left = traverse(node.left, level + 1);
    const right = traverse(node.right, level + 1);

    const sum = node.value + left.sum + right.sum;
    const depth = Math.max(left.depth, right.depth);
    const count = 1 + left.count + right.count;

    return { sum, depth, count };
}



const nodesTree = 
{
"value": 281,
"left": null,
"right": {
    "value": 168,
    "left": {
        "value": 732,
        "left": {
            "value": 653,
            "left": {
                "value": 372,
                "left": null,
                "right": {
                    "value": 879,
                    "left": null,
                    "right": {
                        "value": 330,
                        "left": {
                            "value": 752,
                            "left": null,
                            "right": {
                                "value": 328,
                                "left": null,
                                "right": {
                                    "value": 278,
                                    "left": null,
                                    "right": {
                                        "value": 983,
                                        "left": {
                                            "value": 924,
                                            "left": {
                                                "value": 269,
                                                "left": {
                                                    "value": 558,
                                                    "left": {
                                                        "value": 571,
                                                        "left": null,
                                                        "right": {
                                                            "value": 241,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    },
                                                    "right": null
                                                },
                                                "right": null
                                            },
                                            "right": null
                                        },
                                        "right": {
                                            "value": 912,
                                            "left": null,
                                            "right": {
                                                "value": 438,
                                                "left": {
                                                    "value": 977,
                                                    "left": null,
                                                    "right": {
                                                        "value": 119,
                                                        "left": null,
                                                        "right": {
                                                            "value": 410,
                                                            "left": null,
                                                            "right": {
                                                                "value": 97,
                                                                "left": null,
                                                                "right": {
                                                                    "value": 906,
                                                                    "left": null,
                                                                    "right": null
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "right": {
                                                    "value": 971,
                                                    "left": null,
                                                    "right": {
                                                        "value": 441,
                                                        "left": null,
                                                        "right": null
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "right": null
                    }
                }
            },
            "right": null
        },
        "right": {
            "value": 364,
            "left": {
                "value": 131,
                "left": null,
                "right": {
                    "value": 125,
                    "left": null,
                    "right": {
                        "value": 895,
                        "left": {
                            "value": 910,
                            "left": null,
                            "right": {
                                "value": 838,
                                "left": {
                                    "value": 12,
                                    "left": null,
                                    "right": {
                                        "value": 703,
                                        "left": {
                                            "value": 809,
                                            "left": null,
                                            "right": null
                                        },
                                        "right": null
                                    }
                                },
                                "right": null
                            }
                        },
                        "right": {
                            "value": 86,
                            "left": null,
                            "right": {
                                "value": 429,
                                "left": null,
                                "right": {
                                    "value": 547,
                                    "left": null,
                                    "right": {
                                        "value": 545,
                                        "left": null,
                                        "right": {
                                            "value": 267,
                                            "left": {
                                                "value": 652,
                                                "left": null,
                                                "right": null
                                            },
                                            "right": null
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "right": null
        }
    },
    "right": null
}
}



const result = traverse(nodesTree);

console.log("sum", result.sum);
console.log("depth", result.depth);
console.log("count", result.count);