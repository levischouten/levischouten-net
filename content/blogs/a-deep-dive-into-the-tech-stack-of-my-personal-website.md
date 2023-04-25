---
title: "A Deep Dive into the Tech Stack of My Personal Website"
excerpt: "Join me as I walk you through the tech stack I used to build my personal website, including Next.js for static site generation, Tailwind for styling, and Framer Motion for animations."
coverImage: "/assets/blogs/a-deep-dive-into-the-tech-stack-of-my-personal-website/cover.jpg"
date: "2023-04-25"
---

I'm excited to announce the launch of my [personal website](https://levischouten.net), and for my first blog post, I want to walk you through the technology stack that I used to build it.

The main purpose of my website is to publish content, primarily blogs at the moment. To ensure good SEO and performance, I needed a framework that could handle static site generation. After some research, I chose [Next.js](https://nextjs.org/), a React-based framework, due to its excellent features, good documentation, and easy integration with [Vercel](https://vercel.com/), my hosting platform of choice.

For styling, I used [Tailwind](https://tailwindcss.com/), which comes with a great design system out of the box, along with a utility first approach which I really like. Plus, it's great for performance since it compiles to vanilla CSS.

To add animations to my website, I used [Framer Motion](https://www.framer.com/motion). Although my current animations are straightforward, I plan to implement more ambitious ones in the future and want to get comfortable using Framer Motion.

All of my content is written in Markdown, which is more than enough since this project is not handed off to a non-technical person. To simplify the process of creating new blogs, I wrote a [bash script](https://github.com/levischouten/levischouten-net/blob/main/scripts/create-blog.sh).

Finally, I deployed the entire project to [Vercel](https://vercel.com/) with just a few clicks, thanks to the integration with Next.js. I've been enjoying Vercel because it's easy to set up and provides pipelines, analytics, insights, and logs with minimal configuration.

Overall, I'm thrilled with the technology stack I chose for my personal website. It provides me with the flexibility and features I need to publish content efficiently and effectively. I look forward to using these technologies and tools more in the future to improve my website even further.
