import React from "react";
import Article from './Article';

function ArticleList({posts}) {
    const articles = posts.map((post) => (
        <Article key={post.id} title={post.title} preview={post.preview} date={post.date}/>
    ));
    console.log(posts)
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;