import Article from "./Article"


function ArticleList({posts}) {

    const aPost = posts.map(post => {
        return <Article key={post.title} title={post.title} date={post.date} preview={post.preview} minutes={posts.minutes} />
    })
    return (
        <main>
            {aPost}
        </main>
    )
}

export default ArticleList;