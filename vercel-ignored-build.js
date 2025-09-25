// vercel-ignored-build.js          { Not In Use Now, as we are using 'Vercel_CLI' for `deployment`... }
// Controls when Vercel deploys, so only GitHub Actions deployments go through
// Add this script in Vercel's Project → Settings → "Ignored Build Step"

if (process.env.CI) {
    // Case 1: GitHub Actions pipeline
    console.log(' Allowing deploy: Triggered via GitHub Actions (CI/CD)');
    process.exit(1); // force deploy
}

if (!process.env.VERCEL_GIT_PROVIDER) {
    // Case 2: Manual deploy hook (no git vars → API trigger)
    console.log(' Allowing deploy: Triggered via Deploy Hook/API');
    process.exit(1);
}

if (process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN === 'github-actions[bot]') {
    // Case 3: Bot commit from Actions
    console.log(' Allowing deploy: GitHub Actions bot commit');
    process.exit(1);
}

// Default: skip auto-push or unknown sources
console.log(' Skipping deploy: Ignored auto-push or unknown source');
process.exit(0);
