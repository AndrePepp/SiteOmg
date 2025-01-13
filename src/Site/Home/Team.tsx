import '../../Css/about.css'

function About(){
    return (
        <>
            <div className='section'> 
                <div className='text-content'>
                    <h1 className='red'>Peppers:</h1>
                    <h1 className='yellow'>&nbsp;A&nbsp;team&nbsp;</h1>
                    <h1 className='blue'>from&nbsp;Iasi</h1>
                    <p >
                        We are team Peppers #19044 from Computer Science High School “Grigore Moisil” Iași. 15 active members, 4 volunteers, 5 peer mentors and 4 mentors and a much larger community of people that inspired us and that we aim to inspire ourselves.
                    </p>
                </div>
                <div className='poza' id='poza-0'></div>
            </div>

            <div className='section reverse'>
                <div className='text-content'> 
                    <h1>About&nbsp;</h1>
                    <h1 className='red'>FIRST</h1>
                    <h1 className='yellow'>&nbsp;Tech&nbsp;</h1>    
                    <h1 className='blue'>Challange</h1>
                    
                    <p>
                        <a href='https://firstinspires.org' target='_blank'>
                            FIRST Tech Challenge (For Inspiration and Recognition of Science and Technology)
                        </a> is an international robotics competition, launched in the United States in 2005, designated for high schoolers who have a passion for science and technology. The initiative was taken by Romanian students, and with the help of BRD and Nație prin Educație, over 200 teams were formed nationwide. FIRST Tech Challenge is more than building robots. Teams are given the task of designing, building, programming, and operating robots tailored to the season's challenges. These robots will later engage in a series of matches against each other to prove who can accomplish the given tasks the most efficiently.
                    </p>
                </div>
                <div className='poza' id='poza-1'></div>
            </div>
        </>
    );
}

export default About;
