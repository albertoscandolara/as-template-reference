#!/bin/sh

BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

echo "Checking branch: $BRANCH_NAME"

BRANCH_NAME="$BRANCH_NAME" npx branch-name-lint .branchlintrc.json
