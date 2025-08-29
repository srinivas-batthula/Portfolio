// vercel-ignored-build.js
// This 'Script' tells 'Vercel' when to 'deploy' & when not to deploy to production  for every 'changes' made to main branch in 'GitHub-repo'...
// This Script is run by Vercel when a new req. is got to trigger a deploy by GitHub's Auto-Push Or by GitHub-Action pipeline...

if (
    process.env.VERCEL_GIT_PROVIDER &&
    process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN !== 'github-actions[bot]'
) {
    // Case 1: Deployment triggered from GitHub auto-push → block
    console.log('Skipping Git auto-push deploy');
    process.exit(0); // skip
} else if (!process.env.VERCEL_GIT_PROVIDER) {
    // Case 2: Deployment triggered via deploy hook (no GIT vars) → allow
    console.log('Allowing deploy from GitHub Actions via deploy hook');
    process.exit(1); // deploy
} else if (process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN === 'github-actions[bot]') {
    // Case 3: Deployment triggered by GitHub Actions (bot commit) → allow
    console.log('Allowing deploy from GitHub Actions bot');
    process.exit(1); // deploy
} else {
    // Default → block
    console.log('Skipping unknown deploy req.');
    process.exit(0); // skip
}
