function inputForm(){
    const handleOnClick = (e) =>{
        console.log(e.target.value)
        alert("Submitted");
    }

return(
<div>
<button onClick={handleOnClick}>Submit</button>
</div>

)
};

export default inputForm;