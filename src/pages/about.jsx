import {Link} from "react-router-dom"
import image from "../assets/images/about.jpg"
import NavBar from "../components/navBar"
import "./about.css"

function About() {
    return (
        <div id="about">
        <div class="container">
            <NavBar />
            <div class="row">
                <div class="about-col-1">
                    <img src={image} alt="" />
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">About Me</h1>
                    <p>I am a final year Aerospace Engineering Student at Bandung Institute of Technology.
                        Currently working on my final research about social distancing monitoring at airport terminal using Artificial Intelligence.
                        Took a bootcamp at Purwadhika Digital School to pursue my dream to become
                        web developer.
                    </p>
                    
                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                        <p class="tab-links" onclick="opentab('experience')">Experience</p>
                        <p class="tab-links" onclick="opentab('education')">Education</p>
                    </div>
                    <div class="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>Computer Vision</span><br />Create AI based system for Computer Vision</li>
                            <li><span>Web Development</span><br />HTML and CSS based web development</li>
                            <li><span>Language</span><br />Indonesian (Native), English (IELTS band: 5.5), Japanese (JLPT N4)</li>

                        </ul>
                    </div>
                    <div class="tab-contents" id="experience">
                        <ul>
                            <li><span>2023 - Current</span><br />Web Development Bootcamp at Purwadhika Digital School</li>
                            <li><span>2020</span><br />Internsip as Network Planner and Management Engineer at PT. Citilink Indonesia</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="education">
                        <ul>
                            <li><span>2017 - Current</span><br />Aerospace Engineering, Bandung Institute of Technology</li>
                            <li><span>2014 - 2017</span><br />Dwiwarna Boarding High School</li>
                            <li><span>2011 - 2014</span><br />YPJ Tembagapura Jr. High School</li>
                            <li><span>2005 - 2011</span><br />YPJ Tembagapura Elementary School</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About