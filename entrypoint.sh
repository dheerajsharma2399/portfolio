#!/bin/sh
set -e

# Define source (mounted volume) and target (app public dir)
SOURCE_DIR="/app/overrides"
TARGET_DIR="/app/public"

# Check if the source directory exists and is not empty
if [ -d "$SOURCE_DIR" ] && [ "$(ls -A $SOURCE_DIR)" ]; then
    echo "Found external assets in $SOURCE_DIR. Syncing to $TARGET_DIR..."
    
    # Copy files recursively, overwriting defaults (-f)
    # 2>/dev/null suppresses error if nothing to copy
    cp -rf $SOURCE_DIR/* $TARGET_DIR/ || echo "No files copied."
    
    echo "Asset sync complete."
else
    echo "No external assets found in $SOURCE_DIR. Using default built-in assets."
fi

# Execute the main container command (Next.js server)
exec "$@"
