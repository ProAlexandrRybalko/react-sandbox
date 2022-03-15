import Task1 from '../tasksModule4/Task1';

function AppTask1() {

    const myChildren = [
        "aaa",
        "bbb",
        "ccc"
    ];

    return (
        <div>
        {
            myChildren.map((val, index) =>
                <Task1>{val}</Task1>
            )
        }
        </div>
    );
}

export default AppTask1;
