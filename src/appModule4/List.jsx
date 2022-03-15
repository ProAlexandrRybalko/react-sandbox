import { useEffect } from "react";

export function MyList ({setList}) {

    const list = setList();

    useEffect(() => {
        console.log('render');
    }, [setList])
    
    return (
        <div>
            {
                list.map((val) => <div>{ val.id }</div>)
            }
        </div>
    )
}