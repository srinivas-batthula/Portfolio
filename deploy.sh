#!/bin/bash

## This Script runs all lint & type checks...

npm run format:check
npm run format:fix

npm run lint:check
npm run lint:fix

npm run type-check

npm run build

echo "✅ All Checks & builds are Successful!\n    You can proceed to deployment..."
