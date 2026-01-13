#!/usr/bin/env bash

echo "🚀 Running pre-push checks..."

npm run format:check || exit 1
npm run format:fix   || exit 1

npm run lint:check   || exit 1
npm run lint:fix    || exit 1

npm run type-check  || exit 1
npm run build       || exit 1

echo "✅ All checks & build successful! Ready to push."
