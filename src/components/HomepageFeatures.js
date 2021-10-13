import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Try new ways to code",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Try new coding techniques, patterns, languages, libraries, frameworks,
        anything you want!
      </>
    ),
  },
  {
    title: "Focus on writing and testing new ideas",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Keep the focus on learning coding. This <code>docs</code> directory will
        help show and document which projects use which tech.
      </>
    ),
  },
  {
    title: "Enjoy a code playground",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Projects are on each branch. Want to check out a specific project? Find
        what tech stack you want to play around with, find the branch, and check
        it out on your local. Want to start a new project from scratch? Create a
        new branch!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
