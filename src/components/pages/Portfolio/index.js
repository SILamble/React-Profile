import React from "react";
import "./style.css"

function Portfolio(){
    return (
        <div className="row">
                <div className="col-sm-2 col-xs-1"></div>
                    <div className="col-sm-8 col-xs-10 cont">
                        <h2 className="col-12 title">Portfolio</h2>

                        <div className="row co">

                        <figure className="figure col-sm-4 col-xs-4">
                                <img src="Assets/living_in_the_scene.PNG" className="figure-img img-fluid rounded" alt="Screen Shot of the Living In The Scene app."/>
                                <figcaption className="figure-caption band">Living In The Scene</figcaption>
                                <li><a href="https://beenish-mha.github.io/Living-in-the-scene/">Link</a></li>
                                <li><a href="https://github.com/beenish-mha/Living-in-the-scene">GitHub Repo</a></li>
                        </figure>

                        <figure className="figure col-sm-4 col-xs-4">
                                <img src="Assets/day_planner.PNG" className="figure-img img-fluid rounded" alt="Screen Shot of the Day Planner app."/>
                                <figcaption className="figure-caption band">Day Planner</figcaption>
                                <li><a href="https://silamble.github.io/Unit-05-Third-Party-APIs-Homework-Day-Planner/">Link</a></li>
                                <li><a href="https://github.com/SILamble/Unit-05-Third-Party-APIs-Homework-Day-Planner">GitHub Repo</a></li>
                        </figure>
                        <figure className="figure col-sm-4 col-xs-4">
                                <img src="Assets/weather.PNG" className="figure-img img-fluid rounded" alt="Screen Shot of the Weather app."/>
                                <figcaption className="figure-caption band">Weather APP</figcaption>
                                <li><a href="https://silamble.github.io/Unit-06-Server-Side-APIs-Homework-Weather-Dashboard/">Link</a></li>
                                <li><a href="https://github.com/SILamble/Unit-06-Server-Side-APIs-Homework-Weather-Dashboard">GitHub Repo</a></li>
                        </figure>
                        
                        </div> 

                        <div className="row">
                            <figure className="figure col-sm-4 col-xs-4">
                                <img src="Assets/Capture001.PNG" className="figure-img img-fluid rounded" alt="Screen Shot of the Eat da Burger app."/>
                                <figcaption className="figure-caption band">Eat Da Burger App</figcaption>
                                <li><a href="https://silamble.github.io/Unit-13-Eat-Da-Burger">Link</a></li>
                                <li><a href="https://github.com/SILamble/Unit-13-Eat-Da-Burger">GitHub Repo</a></li>
                        </figure>
                        <figure className="figure col-sm-4 col-xs-4">
                                <img src="Assets/Capture003-stats page.png" className="figure-img img-fluid rounded" alt="Screen Shot of the Work Out Tracker App."/>
                                <figcaption className="figure-caption band">Work Out Tracker</figcaption>
                                <li><a href="https://workout-tracker-sil-2020.herokuapp.com/">Link</a></li>
                                <li><a href="https://github.com/SILamble/Unit-17-Nosql-Homework-Workout-Tracker">GitHub Repo</a></li>
                        </figure>
                        <figure className="figure col-sm-4 col-xs-4">
                                <img src="Assets/Capture002.png" className="figure-img img-fluid rounded" alt="Screen Shot of the Offline/Online Budget App."/>
                                <figcaption className="figure-caption band">Online/Offline Budget App</figcaption>
                                <li><a href="https://budget-tracker-sil2020.herokuapp.com/">Link</a></li>
                                <li><a href="https://github.com/SILamble/Unit-18-PWA-Homework-Online-Offline-Budget-Trackers">GitHub Repo</a></li>
                        </figure>
                        </div>
                </div>
        </div>
    )
}

export default Portfolio