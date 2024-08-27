import { useState } from "react";

const AddMovie = (props) => {
    const [name, setname] = useState('');

    function FormSubmit(e) {
        e.preventDefault();
        props.HandleAddMovie(name);
        setname('');  // Correctly resetting the state
    }

    return (
        <form onSubmit={FormSubmit}>
            <div className="row text-white">
                <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
                <div className="col-8 offset-1">
                    <input
                        type="text"
                        placeholder="Movie Name..."
                        className="form-control"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-success form-control">Add</button>
                </div>
                <hr className="mt-3" />
            </div>
        </form>
    );
};

export default AddMovie;
