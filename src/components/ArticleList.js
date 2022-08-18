import React from 'react';
import Article from './Article';

function ArticleList({ posts }){

    const postArr = posts.map((post)=>
    <Article />
    );

    return(
        <main>
            {postArr}
        </main>
    )
}

export default ArticleList;
