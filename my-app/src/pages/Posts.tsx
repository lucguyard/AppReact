const Posts = () => {
    return (
        <div className="post-container">
            <h1>Page principale</h1>
        <div>
            <label htmlFor="posts"> Nombre de publication 5</label>
            <input type="range" min={1} max={5}></input>
        </div>    
        </div>
    )
}
 export default Posts