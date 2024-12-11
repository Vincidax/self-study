function wrapGifts(giftLengths, paperWidth) {
    const n = giftLengths.length;

    // Create a DP array where dp[i][j] represents the max number of gifts
    // we can wrap using the first `i` gifts with a paper width of `j`.
    const dp = Array(n + 1)
        .fill(null)
        .map(() => Array(paperWidth + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= paperWidth; j++) {
            if (giftLengths[i - 1] <= j) {
                // Option 1: Include the current gift
                dp[i][j] = Math.max(
                    dp[i - 1][j], // Don't include the current gift
                    dp[i - 1][j - giftLengths[i - 1]] + 1 // Include the current gift
                );
            } else {
                // Option 2: Don't include the current gift
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // The answer is in the bottom-right corner of the DP table.
    return dp[n][paperWidth];
}
