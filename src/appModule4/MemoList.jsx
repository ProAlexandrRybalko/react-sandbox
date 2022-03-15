import React from "react";

const MemoList = (props) => {
    
    console.log('aaa');

    return (
        <div>
            {
                props.setList().map((val) => <div>{ val.id }</div>)
            }
        </div>
    );
}

export default React.memo(MemoList);