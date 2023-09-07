This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run this App locally:

Makesure you have npm installed, after you clone this project, run:

```bash
npm install
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Change colors!

There are two different parts, first is the color set for selection bar. Please modify this file:

https://github.com/Denghu-JI/AWS-app-hosting/blob/main/src/components/topPanel/style.tsx

For changing the tree and background color, please modify this file:

https://github.com/Denghu-JI/AWS-app-hosting/blob/main/src/components/Rectangle/style.tsx

## Change content!

The backend is in this git repository:

https://github.com/Denghu-JI/cofi_visualisation_backend

If you want to change any content, please clone this repo, and run:

```bash
git submodule init
git submodule update
```

Then, you will have all files set! please find the forked version in /pysearch_tool.

Finally, open the root folder of this git repository, run:

```bash
#I created those special key for you to access s3 service!
python interface.py <PUBLIC_KEY> <PRIVATE_KEY>
```

refresh the visualisation, those changes you made should be there.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

every git push will update this website!~

https://aws-app-hosting.vercel.app/
