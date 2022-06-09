class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        start = end = 0

        for i in range(n):
            len1 = self.expand_helper(s, i, i) # to handle odd length cases
            len2 = self.expand_helper(s, i, i + 1) # to handle even length cases
            max_len = max(len1, len2)
            if max_len > end - start:
                # update start and end
                start = i - (max_len - 1) // 2
                end = i + (max_len // 2)

        return s[start:end + 1]

    def expand_helper(self, s, left, right):
        if not s: return

        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1

        return right - left - 1