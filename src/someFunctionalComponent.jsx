import useSelector from "./context-store/useSelector";

const SomeFunctionalComponent = () => {
    const data = useSelector((state) => state.data)

    return (
        <>
            <h1>Func Component</h1>
            <p>useSelector Data : {data}</p>
        </>
    )
}

export default SomeFunctionalComponent;
