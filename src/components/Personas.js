import React from "react";

const Personas = () => (
    <div id='personas'>
        <header className='problem-header'>
            <h2>Personas</h2>
        </header>
        <div id='persona-examples'>
            {/* example #1 */}
            <div className='persona-example'>
                <h3>Anna Smith</h3>
                <img src="https://d.newsweek.com/en/full/755155/484222033.jpg" alt="anna smith" />
                <p>
                    Anna is a staff member at UMD’s dining hall 
                    services specifically focusing on implementing green 
                    initiatives into our dining halls, food stops, and the 
                    student union. She works a 9 to 5 at UMD creating green 
                    programs that help the environment while dealing with large 
                    quantities of food and hungry students. She does not eat at 
                    the dining halls but she is very involved in the day to day 
                    schedule at each dining hall on campus. 
                </p>
                <div className='persona-example-lists'>
                    <div>
                        <h4>Demographics</h4>
                        <ul>
                            <li>Employed</li>
                            <li>Staff Member @ UMD</li>
                            <li>Female</li>
                            <li>Outcomes</li>
                            <li>Really cares about climate change</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Outcomes</h4>
                        <ul>
                            <li>Creates environmental friendly plans for the dining hall</li>
                            <li>Attempts to reduce wait times</li>
                            <li>Adds another sustainable dining hall</li>
                        </ul>
                    </div>
                </div>
                <h4>Changes</h4>
                <p>
                    At this point in our research we have yet 
                    to reach out to a community member who 
                    could use these extra meals to help with 
                    their families food insecurity. We decided to 
                    revise our first persona to a dining services 
                    staff member. This entire persona changed but 
                    still plays a very important role in our research 
                    and the conclusions of our research. 
                </p>
            </div>
            <div id="persona-example-bar"></div>
            {/* example #2 */}
            <div className='persona-example'>
                <h3>Jeff McCarthy</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDb2qFVWhcusrIPQo2JYh1tfnroLl-CuT_0A&usqp=CAU" alt="jeff mccarthy" />
                <p>
                    Jeff is a busy sophomore taking 20 credits and participating 
                    in plenty of extracurricular activities. When he is hungry, 
                    his primary source of food is the University of Maryland dining 
                    halls. The dining halls are great options– there’s a variety of 
                    food available, but there is a problem. Due to Jeff’s busy schedule, 
                    he has limited times in which he can eat. This is a problem 
                    because it isn’t uncommon for the lines at the dining hall to 
                    be extremely long. In addition, due to the dining hall’s 
                    limited hours, Jeff cannot eat when he is available. When he 
                    encounters these problems, he either has to eat quickly to keep 
                    to his busy schedule or he has to skip meals.
                </p>
                <div className='persona-example-lists'>
                    <div>
                        <h4>Demographics</h4>
                        <ul>
                            <li>Undergraduate student</li>
                            <li>Student that frequently uses the dining hall (daily)</li>
                            <li>Unemployed</li>
                            <li>Participates in clubs and intramural when not in class</li>
                            <li>Male</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Outcomes</h4>
                        <ul>
                            <li>More access to dining hall food</li>
                            <li>Meals available around his busy schedule</li>
                            <li>Time to focus on school or extracurriculars</li>
                        </ul>
                    </div>
                </div>

                <h4>Changes</h4>
                <p>
                    After interviewing two students about their experience 
                    with the dining hall, it was clear that the original 
                    description for Jeff McCarthy was not the persona we were 
                    looking for. The original description is a student that 
                    does not eat at the dining hall and struggles to get 
                    food. It’s clear that our interviewees are students that DO 
                    eat on campus and have encountered issues with the dining 
                    halls– whether it be with wait times or limited dining hall hours.
                </p>
            </div>
        </div>
    </div>
);

export default Personas;