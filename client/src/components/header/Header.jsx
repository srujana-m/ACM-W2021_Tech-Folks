import "./header.css"
export default function Header()
{
    return(
        <div className="header">
            <div className="headerTitles">
                {/* <span className="headerTitleSm">React & Node</span> */}
                <span className="headerTitleLg">Edu-Hub</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt=""/>
        </div>
    );
}