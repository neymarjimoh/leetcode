<h2><a href="https://leetcode.com/problems/string-to-integer-atoi/">8. String to Integer (atoi)</a></h2><h3>Medium</h3><hr><div><p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++'s <code>atoi</code> function).</p>

<p>The algorithm for <code>myAtoi(string s)</code> is as follows:</p>

<p>Read in and ignore any leading whitespace.</p>

<p>Check if the next character (if not already at the end of the string) is <code>'-'</code> or <code>'+'</code>. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.</p>

<p>Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.</p>

<p>Convert these digits into an integer (i.e. <code>"123" -> 123</code>, <code>"0032" -> 32</code>). If no digits were read, then the integer is <code>0</code>. Change the sign as necessary (from step 2).</p>
  
<p>If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.</p>
  
<p>Return the integer as the final result.</p>
 
<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>s = "42"
<strong>Output:</strong> 42
<strong>Explanation:</strong> The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>s = "   -42"
<strong>Output:</strong> -42
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 200</code></li>
	<li><strong><code>s</code> consists of English letters (lower-case and upper-case), digits (<code>0-9</code>), <code>' '</code>, <code>'+'</code>, <code>'-'</code>, and <code>'.'</code>.</strong></li>
</ul>

<p>&nbsp;</p>
