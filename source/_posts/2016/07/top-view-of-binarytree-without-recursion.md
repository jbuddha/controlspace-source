---
title: Top View of Binary Tree from left to right without Recursion
date: 2016-07-23
tags: ['java', 'algorithms','datastructures', 'solutions','problems']
author: Buddha
description: This article shows you how to print top view of a binary tree, which using recursion. 
---

<div style="text-align: center">
<svg width="100%" viewBox="0 0 700 450"><g transform="translate(262.5,150)" style="z-index: 1; cursor: inherit;"><line class="binary-tree-arrow" x1="67.20" y1="-38.40" x2="-67.20" y2="38.40"></line><line x1="-67.20" y1="38.40" x2="-56.28" y2="39.01" class="binary-tree-arrow"></line><line x1="-67.20" y1="38.40" x2="-62.18" y2="28.68" class="binary-tree-arrow"></line></g><g transform="translate(131.25,250)" style="z-index: 1; cursor: inherit;"><line x1="28.35" y1="-32.40" x2="-28.35" y2="32.40" class="binary-tree-arrow"></line><line x1="-28.35" y1="32.40" x2="-17.83" y2="29.42" class="binary-tree-arrow"></line><line x1="-28.35" y1="32.40" x2="-26.79" y2="21.58" class="binary-tree-arrow"></line></g><g transform="translate(65.62,350)" style="z-index: 1; cursor: inherit;"><line x1="12.50" y1="-28.58" x2="-12.50" y2="28.58" class="binary-tree-arrow"></line><line x1="-12.50" y1="28.58" x2="-3.37" y2="22.56" class="binary-tree-arrow"></line><line x1="-12.50" y1="28.58" x2="-14.27" y2="17.79" class="binary-tree-arrow"></line></g><g transform="translate(218.75,250)" style="z-index: 1; cursor: inherit;"><line x1="-28.35" y1="-32.40" x2="28.35" y2="32.40" class="binary-tree-arrow"></line><line x1="28.35" y1="32.40" x2="26.79" y2="21.58" class="binary-tree-arrow"></line><line x1="28.35" y1="32.40" x2="17.83" y2="29.42" class="binary-tree-arrow"></line></g><g transform="translate(240.62,350)" style="z-index: 1; cursor: inherit;"><line x1="12.50" y1="-28.58" x2="-12.50" y2="28.58" class="binary-tree-arrow"></line><line x1="-12.50" y1="28.58" x2="-3.37" y2="22.56" class="binary-tree-arrow"></line><line x1="-12.50" y1="28.58" x2="-14.27" y2="17.79" class="binary-tree-arrow"></line></g><g transform="translate(437.5,150)" style="z-index: 1; cursor: inherit;"><line x1="-67.20" y1="-38.40" x2="67.20" y2="38.40" class="binary-tree-arrow"></line><line x1="67.20" y1="38.40" x2="62.18" y2="28.68" class="binary-tree-arrow"></line><line x1="67.20" y1="38.40" x2="56.28" y2="39.01" class="binary-tree-arrow"></line></g><g transform="translate(481.25,250)" style="z-index: 1; cursor: inherit;"><line x1="28.35" y1="-32.40" x2="-28.35" y2="32.40" class="binary-tree-arrow"></line><line x1="-28.35" y1="32.40" x2="-17.83" y2="29.42" class="binary-tree-arrow"></line><line x1="-28.35" y1="32.40" x2="-26.79" y2="21.58" class="binary-tree-arrow"></line></g><g transform="translate(568.75,250)" style="z-index: 1; cursor: inherit;"><line x1="-28.35" y1="-32.40" x2="28.35" y2="32.40" class="binary-tree-arrow"></line><line x1="28.35" y1="32.40" x2="26.79" y2="21.58" class="binary-tree-arrow"></line><line x1="28.35" y1="32.40" x2="17.83" y2="29.42" class="binary-tree-arrow"></line></g><g transform="translate(350,100)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -highlight"></circle><text x="0" dy="0.6ex" y="0">44</text></g><g transform="translate(175,200)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -highlight"></circle><text x="0" dy="0.6ex" y="0">23</text></g><g transform="translate(87.5,300)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -highlight"></circle><text x="0" dy="0.6ex" y="0">13</text></g><g transform="translate(43.75,400)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -highlight"></circle><text x="0" dy="0.6ex" y="0">7</text></g><g transform="translate(262.5,300)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -dull"></circle><text x="0" dy="0.6ex" y="0">27</text></g><g transform="translate(218.75,400)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -dull"></circle><text x="0" dy="0.6ex" y="0">26</text></g><g transform="translate(525,200)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -highlight"></circle><text x="0" dy="0.6ex" y="0">51</text></g><g transform="translate(437.5,300)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -dull"></circle><text x="0" dy="0.6ex" y="0">50</text></g><g transform="translate(612.5,300)" style="z-index: 3; cursor: pointer;"><circle cx="0" cy="0" r="21.87" class="binary-tree-circle -highlight"></circle><text x="0" dy="0.6ex" y="0">65</text></g></svg>
<p></p><span class="caption">Top View of Binary Tree</span>
</div>

## The Problem

Imagine you have a binary tree and wants to get all the nodes that will be visible when seen from the top of the tree. How do you print all such nodes? Final output for this tree should be 7, 13, 23, 44, 51, 65. A similar problem about printing right view is given in the previous post about {% post_link 2016/07/right-view-of-binarytree-without-recursion Right View of Binary Tree without Recursion %}

 <!-- more -->

## The Solution

We can use a mechanism similar preorder traversal, but the solution is not as straight forward. When we are printing nodes on left subtree, ignoring all right nodes, we will visit each left node starting from root, however we can't print them straight away, as we need to print them in reverse order. Otherwise the output will be 44, 23, 13, 7. So, in order to print them in reverse order, we make use of auxiliary datastructure. Stack is what we need in this case. 

We keep pushing left node onto stack until we reach a leaf node while visiting only the left nodes. Once we reach a leaf node, just pop all elements from the stack and print all of them. Once left subtree is complete, print the root node and continue with right subtree. 

Right subtree is much simpler solution, as we have to print the right most nodes in the order we visit them. Begin with root and move to its right node, print the node and continue to its right node. Proceed till the right child becomes null. Find the program below written in java.

{% codeblock Program to print top view of a Binary Tree lang:java %}
public void topView(Node root) {    
    Node temp = root.left;
    Stack<Node> stack = new Stack<>();

    while(temp != null) {
        stack.push(temp);
        temp = temp.left;
    }
    while (!stack.isEmpty())
        System.out.println(stack.pop().data);

    System.out.println(root.data);
    temp = root.right;
    while (temp != null) {
        System.out.println(temp.data);
        temp = temp.right;
    }
}
{% endcodeblock %}

What do you think of this solution? Can you think of a simpler solution? Let me know in the comments. 

---
SVG for BinaryTree diagram is generated by using [Binary Tree Visualizer](http://btv.melezinek.cz/binary-search-tree.html)
