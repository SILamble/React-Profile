import React from "react";
import "./style.css"

function About (){
    return(
        <div className="row">
        <div className="col-sm-2 col-xs-1"></div>
        <div className="col-sm-8 col-xs-10 cont">
            <h2 className="col-12">About Me</h2>
            <div className="row">
                <img className="col-3 meImg" src="Assets/Me.jpg" title="Image of me"/>
                <div className="col-8">
                    <p>Full Stack Web Developer student with experience in project management, 
                        marketing and educated at University Coding Bootcamp. 
                        Skills in HTML, CSS and JavaScript and strengths in meeting deadlines, 
                        project and team management including budgeting and prioritising a dynamic workload.</p>
                        <p>Passionate about approaching programming challenges from different angles and using 
                        previously honed skills in new environments. Excited to develop responsive 
                        websites in a team role and individually. Positioned well to provide unique 
                        perspectives on how to manage projects through the development process in 
                        relation to wider business contexts.</p>

                </div>
        </div>
            <div className="col-sm-2 col-xs-1"></div>
        </div>
    </div>
    )
}

export default About;