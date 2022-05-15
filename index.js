const StatesAndCapitals = (props) =>{
    const {StateList} = props
    const {state,imageUrl,capital} = StateList
    return(
        <>
            <div className="infoStyle">
            <h2>{state}</h2>
            <img src={imageUrl} alt='state images'/>
            <h2>{capital}</h2>
            </div>
        </>
    )
}
export default StatesAndCapitals