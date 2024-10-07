


function inputForm(){
    const handleOnSubmit = () =>{
        alert("Submitted");
    }
return(
<div>

<p>Select a species</p>

<button>Dog</button>
<button>Cat</button>

<p>Select an age group</p>

<select id="age">
  <option value="youth">Under 1 year</option>
  <option value="young-adult">Young Adult</option>
  <option value="adult">Adult</option>
  <option value="mature-adult">Mature Adult</option>
</select>

<p>Is your pet spayed or neutered?</p>

<select id="neutered">
  <option value="neutered">Yes</option>
  <option value="intact">No</option>
</select>

<p>Enter your pet's weight in pounds</p>

<input type='text' placeholder='Pounds' />

<p>What type of food do you prefer to feed?</p>
<button>Canned/Wet</button>
<button>Kibble/Dry</button>

<p>Please enter the Caloric content of the desired food below in KCal per cup.</p>

<input onSubmit={ handleOnSubmit } type='text' placeholder="Kcal/cup" />
<button>Submit</button>
</div>

)
};

export default inputForm;