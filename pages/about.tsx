import React from "react";
import { NextPage } from 'next'
import Layout from "../components/MyLayout";
import Page from "./index";

interface Props {
    userAgent?: string;
}

const About: NextPage<Props> = () => (
    <main>
        <Layout>
            <p>This is the about page</p>
        </Layout>
    </main>
);

export default About
