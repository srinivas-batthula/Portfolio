#!/bin/bash

## This Script runs all lint & type checks...

npm run format:check
npm run format:fix

npm run lint:check
npm run lint:fix

npm run type-check

echo "✅ All Checks are Successful!\n   You can proceed to deployment..."
