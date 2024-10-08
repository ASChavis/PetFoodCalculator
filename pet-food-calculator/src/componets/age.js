function age() {

    return(
        <div>
            <p>Select an age group</p>

                <select id="age">
                <option value="youth">Under 1 year</option>
                <option value="young-adult">Young Adult</option>
                <option value="adult">Adult</option>
                <option value="mature-adult">Mature Adult</option>
                </select>
        </div>
    );
};

export default age;