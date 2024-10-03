import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "../component/Question";
import energybank from "../Questions/Questionbank1";
import Recyclingbank from "../Questions/Questionbank2";
import Waterbank from "../Questions/Questionbank3";
import Susbank from "../Questions/Questionbank4";
import Score from "../component/Score";
import "./Quiz.css";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: Susbank,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
        };
    }

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
        this.handleNextQuestion();
    };

    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption, score } = this.state;
        if (selectedOption === questionBank[currentQuestion].answer) {
            this.setState((prevState) => ({ score: prevState.score + 1 }));
        }
    };

    handleNextQuestion = () => {
        const { questionBank, currentQuestion } = this.state;
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            this.setState({
                quizEnd: true,
            });
        }
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
            this.state;
        return (
            <div className="container">
                <h1 className="diaplay-4 fw-4"><i>Quiz Time</i></h1>

                {!quizEnd ? (
                    <Question 
                        question={questionBank[currentQuestion]}
                        selectedOption={selectedOption}
                        onOptionChange={this.handleOptionChange}
                        onSubmit={this.handleFormSubmit}
                    />
                ) : (
                    <Score
                        score={score}
                        onNextQuestion={this.handleNextQuestion}
                        className="score"
                    />
                )}
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-5">
                        <h1 className="display-2 fw-bold mb-4 text-center text-white pt-10"><i>Quiz time</i></h1>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                            </div>
                        </div>

                        <br/>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;

{/* <div className="App d-flex flex-column align-items-center justify-content-center">
            //     <h1 className="app-title">QUIZ APP</h1>
            //     {!quizEnd ? (
            //         <Question 
            //             question={questionBank[currentQuestion]}
            //             selectedOption={selectedOption}
            //             onOptionChange={this.handleOptionChange}
            //             onSubmit={this.handleFormSubmit}
            //         />
            //     ) : (
            //         <Score
            //             score={score}
            //             onNextQuestion={this.handleNextQuestion}
            //             className="score"
            //         />
            //     )}
            // </div>*/}