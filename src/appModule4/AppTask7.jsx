export default function AppTask7 () {
    
    const handlerSumbit = () => {
        console.log(document.getElementById('text1').value);
        console.log(document.getElementById('text2').value);
    }
    
    return (
        <form>
            <input type={'text'} id={'text1'}/>
            <input type={'text'} id={'text2'}/>
            <input type={'button'} id={'submit'} onClick={ handlerSumbit } value={"Submit"}/>
        </form>
    )
}