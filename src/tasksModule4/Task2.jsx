function Task2 ({count, setCount}) {
  const onClickButton = () => {
    setCount(count + 1);
  }

  return (
    <button onClick={onClickButton}>Press me</button>
  )
}

export default Task2;
