#!/bin/bash

# Create a new blog post
# Usage: ./scripts/create-blog.sh "My New Blog Post"

# Exit if any subcommand fails
set -e

# Exit if any variable is uninitialized
set -u

# Get the title from the command line
title=$1

# Get the current date
date="$(date +%Y-%m-%d)"

# Create the file name
filename=$(echo $title | tr " " "-" | tr "[:upper:]" "[:lower:]")

if test -f "content/blogs/$filename.md"; then
  echo "File already exists"
  exit 1
fi

echo "---
title: \"$title\"
excerpt: \"Short description of the post\"
coverImage: \"/assets/blogs/$filename/cover.jpg\"
date: \"$date\"
---

Write your content here...

" >> "content/blogs/$filename.md"

echo "Created content/blogs/$filename.md"

if [ ! -d "public/assets/blogs/$filename" ]; then
  mkdir -p "public/assets/blogs/$filename";
  echo "Created public/assets/blogs/$filename for blog assets"
fi
