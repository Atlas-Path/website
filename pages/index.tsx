import { NextPage } from 'next'
import * as React from "react";
import PostLink from "../components/PostLink";
import Layout from "../components/MyLayout";

interface Props {
    userAgent?: string;
}

const Page: NextPage<Props> = () => (
    <main>
        <Layout>
            <h1>Atlas Path</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
        </Layout>
        <style jsx>{`

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </main>
);

Page.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
};


function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

export default Page
