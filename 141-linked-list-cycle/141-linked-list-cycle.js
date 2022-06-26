/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
//     if (head == null) return false;
//     const obj = {};
    
//     while (head) {
//         if (head in obj) return true;
//         obj[head] = 1;
//         head = head.next;
//     }
    
//     return false;
    
    let set = new Set();
    while (head) {
        if (set.has(head)) return true;
        set.add(head);
        head = head.next;
    }
    return false;
    
};