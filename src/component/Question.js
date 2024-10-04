import React, {Component} from "react";
import Options from "../Questions/Option";

class Question extends Component{
    render() {
        const {question, selectedOption, onOptionChange, onSubmit} = this.props;

        return(
            <div className="">
                <h3>Question {question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form onSubmit={onSubmit} className="mt-2 mb-2">
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <div className="grid">
                        <button className="btn btn-light me-4 rounded-pill px-4 py-2 " type="submit">Previous</button>
                        <button className="btn btn-light me-4 rounded-pill px-4 py-2 ">Next</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Question;