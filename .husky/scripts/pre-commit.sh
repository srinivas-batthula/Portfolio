#!/usr/bin/env bash

echo "🔍 Running pre-commit checks..."

npm run format:check || exit 1
npm run format:fix   || exit 1

npm run lint:check   || exit 1
npm run lint:fix    || exit 1

echo "✅ Pre-commit checks passed!"
