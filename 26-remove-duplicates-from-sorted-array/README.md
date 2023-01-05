<h2><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/">26. Remove Duplicates from Sorted Array</a></h2><h3>Easy</h3><hr><div><p>Given an integer array <code>nums</code> sorted in <em>non-decreasing order</em>, remove the duplicates <a href="https://en.wikipedia.org/wiki/In-place_algorithm/">in-place</a> such that each unique element appears only once. The <em>relative order</em> of the elements should be kept the <em>same</em>.</p>

<p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <em>first part</em> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code> should hold the final result. It does not matter what you leave beyond the first <code>k</code> elements.</p>

  <p>Return <code>k</code> after placing the final result in the first <code>k</code> slots of <code>nums</code>.</p>
 
<p>Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.</p>
  
<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> 2, nums = [1,2,_]
<strong>Explanation:</strong> Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,0,1,1,1,2,2,3,3,4]
<strong>Output:</strong> 5, nums = [0,1,2,3,4,_,_,_,_,_]
<strong>Explanation:</strong> Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
  -100 <= nums[i] <= 100
  
<ul>
	<li><code>2 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
  <li><strong><code>nums</code> is sorted in non-decreasing order.</strong></li>
</ul>

<p>&nbsp;</p>
