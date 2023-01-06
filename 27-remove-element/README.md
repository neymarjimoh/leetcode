<h2><a href="https://leetcode.com/problems/remove-element/">27. Remove Element</a></h2><h3>Easy</h3><hr><div><p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <a href="https://en.wikipedia.org/wiki/In-place_algorithm/">in-place</a>. The relative order of the elements may be changed.</p>

<p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <em>first part</em> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code> should hold the final result. It does not matter what you leave beyond the first <code>k</code> elements.</p>

  <p>Return <code>k</code> after placing the final result in the first <code>k</code> slots of <code>nums</code>.</p>
 
<p>Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.</p>
  
<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,2,3], val = 3
<strong>Output:</strong> 2, nums = [2,2,_,_]
<strong>Explanation:</strong> Explanation: Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,1,2,2,3,0,4,2], val = 2
<strong>Output:</strong> 5, nums = [0,1,4,0,3,_,_,_]
<strong>Explanation:</strong> Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
  
<ul>
	<li><code>2 &lt;= nums.length &lt;= 100</code></li>
	<li><code>-0 &lt;= nums[i] &lt;= 50</code></li>
  <li><strong><code>0 &lt;= val &lt;= 50</code></li>
</ul>

<p>&nbsp;</p>