#!/bin/sh

echo "Running ESLint..."
npx eslint . --ext .ts,.js --cache

if [ $? -ne 0 ]; then
  echo "❌ ESLint errors detected. Fix them before pushing."
  exit 1
fi

echo "✔ ESLint passed."
