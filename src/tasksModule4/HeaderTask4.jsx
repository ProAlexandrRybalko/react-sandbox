export default function HeaderTask4 ({url, title, author}) {
    return (
        <div>
            <img src={url} alt={title}/>
            <p>{ title }</p>
            <p>{ author }</p>
        </div>
    )
}