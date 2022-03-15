import HeaderTask4 from "../tasksModule4/HeaderTask4"

export default function AppTask4 () {
    const properties = [
        {
            url: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            title: "Eithel",
            author: "Eithel"
        },
        {
            url: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
            title: "Baloon",
            author: "Somebody"
        },
        {
            url: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
            title: "Girl",
            author: "Somebody once told me"
        }
    ]

    return (
        <div>
            {
                properties.map((val) => 
                    <HeaderTask4 key={val} {...val}/>
                )
            }
        </div>
    )
}