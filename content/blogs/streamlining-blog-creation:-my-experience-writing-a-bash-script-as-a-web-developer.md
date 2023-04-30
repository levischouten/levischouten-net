---
title: "Streamlining Blog Creation: My Experience Writing a Bash Script as a Web Developer"
excerpt: "As a web developer, I was looking for ways to streamline my blogging workflow, and that's how I stumbled upon Bash scripting. In this blog, I'll share my experience of writing a Bash script to automate the process of creating new blog posts."
coverImage: "/assets/blogs/streamlining-blog-creation:-my-experience-writing-a-bash-script-as-a-web-developer/cover.jpg"
date: "2023-04-30"
---

As a web developer, I must admit that I have never delved much into bash scripting. It just never seemed necessary for my work. However, recently, I launched my personal website, and all of the content is written in markdown files. Since I'm the one responsible for maintaining the content, I decided to make the process of creating new blogs easier by writing a script.

I could have written the script in TypeScript or JavaScript like the rest of the project. Still, I felt this was an excellent opportunity to learn bash scripting, as the script only had to execute a set of CLI commands with minimal logic in between. In this post, I want to share my experience of writing my first bash script as a web developer.

To start, I added the [she-bang](https://medium.com/@codingmaths/bin-bash-what-exactly-is-this-95fc8db817bf) at the top of the script to ensure it was executed using the bash shell, followed by comments explaining what the script would do. Next, I set the '-e' option to instruct bash to exit the script immediately if any command has a non-zero exit status, and the '-u' option to ensure that every variable is defined before it is used. (Learn more about that [here](https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca))

```bash
#!/bin/bash

# Create a new blog post
# Usage: ./scripts/create-blog.sh "My New Blog Post"

# Exit if any subcommand fails
set -e

# Exit if any variable is uninitialized
set -u
```

Then came the actual script. I defined a few variables that the blog required, such as the title (which we get from the CLI), the date (which we generated based on the current date), and the filename (which we got by turning the title into kebab case).

```bash
# Get the title from the command line
title=$1

# Get the current date
date="$(date +%Y-%m-%d)"

# Create the file name
filename=$(echo $title | tr " " "-" | tr "[:upper:]" "[:lower:]")
```

With these variables defined, I was ready to create the blog. First, I made sure the file did not already exist. Then, I created the actual blog, making use of all the variables we defined earlier. Finally, I created a folder where we would store all the assets related to the blog.

```bash
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
```

And voila! The script was complete. I learned a lot about bash scripting by building this simple script, and it has definitely opened up the doors for me to start automating many more tasks using bash. If you're interested in seeing that process, be sure to keep an eye out for this [blog](https://www.levischouten.net/blogs), or follow me on [Twitter](https://twitter.com/levischoute), where I'll be posting about my future findings.

Thank you for taking the time to read about my experience. I hope this post has been helpful to any developers out there who, like me, may be hesitant to dip their toes into bash scripting.

Source code: [Github](https://github.com/levischouten/levischouten-net/blob/main/scripts/create-blog.sh)

Personal website: [levischouten.net](https://www.levischouten.net/)

Socials: [Twitter](https://twitter.com/levischoute)
