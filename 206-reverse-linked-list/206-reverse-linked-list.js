/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    
    let previous = null;
    let current = head;
    
    // null <- 1 <- 2 <- 3 <- 4 <- 5
    while (current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    return previous;
};