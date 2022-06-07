/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // check if any and return the other
    if (list1 == null) return list2;
    if (list2 == null) return list1;
    
    let currentNode = new ListNode();
    let head = currentNode;
    
    while (list1 && list2) {
        // Select the smallest value from either linked list,
		// then increment that list forward.
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    
    // It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (!list1) {
        currentNode.next = list2;
    } else if (!list2) {
        currentNode.next = list1;   
    }
    
    // return .next because this first element in the linkedlist is empty
    return head.next;
    
    //N:B: there is a head variable, It's because if we don't do that we lose the head of the linked list. so the solution here is to define an empty head and return its next(which is the start of our sorted linked list)
};