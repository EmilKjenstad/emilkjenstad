let publications = [
    {
        title: "Master of Puppets - How to trick the human mind to explore an infinite world",
        link: "https://www.duo.uio.no/handle/10852/103876?locale-attribute=en",
        text: `
            Virtual reality is a simulation of a threedimensional environment with which we can interact as if it were the real environment. With this technology, users can disconnect themselves from the real environment and enjoy a computer-generated world that seems real. This comes with some flaws, however. For example, a user often employs a joystick or omni-directional treadmill to move around in the virtual environment. Many experience this as either an unnatural form of movement that disconnects us from the virtual world or to be expensive and may not be affordable for everyone. An inexpensive solution that feels natural is therefore desired. The most natural form of movement would be walking, but even this has its limitations since issues such as unknowingly walking into walls or other objects can become significant safety risks in the real environment. Moreover, movement in the virtual environment would be limited to what we have available in the real environment because movements are mapped between the virtual and physical environments as 1:1 — whatever you do in the real environment, you do in the virtual environment.
            Redirected walking is a term used to describe the remapping of position and orientation between the real environment and the virtual environment. If this is done correctly, we can expand the available area in which we can explore a virtual environment. This is done by manipulating human senses to make a person perceive their movements in the virtual environment as ones they are performing in the real environment. We can achieve this by manipulating the camera in the virtual environment by injecting unnoticeable movements that redirect the user. We have emphasized three known methods of redirection in our research, namely, translation, rotation, and curvature. Our aim was to explore the extent to which redirected walking is achievable in various situations without it becoming noticed by users.
        `
    },
    {
        title: "Experiencing Rotation and Curvature Gain for Redirected Walking in Virtual Reality",
        link: "https://dl.acm.org/doi/10.1145/3592834.3592874",
        text: `
            The proliferation of virtual reality (VR) interaction in the wake of the Metaverse trend will place an increasing number of applications and services into virtual environments (VEs). Over the recent years, interactions with the VE have been studied intensely, but very frequently, such interactions are focused on stationary users or users who leverage specialized contraptions to act in the VE (e.g., omni-directional treadmills). The free movement in the VE tends to be achieved by controller input, which creates a huge hurdle to enter and act in it in a natural manner. The target of this study is the translation of the natural walking motion from the real environment (RE) into the VE. In particular, we aim to explore to which extent redirected walking (RW) is achievable without being noticed by the users. Towards this goal, we test two RW methods, i.e., rotation gain and curvature gain. According to the responses of the participants in our study, we find that there is a statistically significant difference with 90% confidence between the levels of gains for rotation gain. On the other hand, levels of gains for curvature gain are not noticeable (i.e., no statistically significant difference is observed).
        `
    },
]

// static/assets/img/...
let projects = [
    {
        title: "Redirected Walking",
        text: `
            A group research project on how we can expand the space we can explore in virtual reality when using free motion in the physical space. We achieved this by manipulating human sensory inputs, so the user observed their movements to be real, but their movements between the physical space and virtual space are different.
            Developed a system that manipulates human senses to observe their surroundings as larger than what they really are using virtual reality.
            In charge of creating the various immersive virtual environments for the user to experience.
            Co-developed the software that manipulated user movements between the two environments, to achieve redirection.
        `,
        img:"RW_project.jpg",
        from: "January 2022",
        to: "June 2023"
    },
    {
        title: "DHIS2",
        text: `
            DHIS2 is a leading health management information system (HMIS) platform, in use by 80 low and middle-income countries. Approximately 3.2 billion people live in countries where DHIS2 is used.
            DHIS2 asked the students at University of Oslo to create a new feature for their platform based on user stories. Examples of such stories are familiarity with paper version, internet connectivity, and difficulties knowing if a document is submitted. Our group created a data entry form takes such stories into account.
            I was tasked with developing the interface that retrieved already submitted forms and displaying them in an orderly fashion to the user to view.
        `,
        img:"DHIS2_logo.png",
        from: "August 2021",
        to: "November 2021"
    },
    {
        title: "Regal Finance",
        text: `
            Our project is called Regal and it is a simple budgeting tool that allows the user to track expenses and plan their financial goals.  The main functionality of the web application will be to allow the user to track income against expenses.  This information will be stored for the user to modify over time.  The user will also be able to track what expenses they deem superfluous in order to separate necessity from wasteful spending. When the user has a surplus of funds,  the application will allow the user to allocate surplus toward planning savings and investments.  Goals for such surplus will be both user defined, and suggested by the app through a few example savings milestones.  The ability to link a bank account to the app will not be supported due to issues with managing project scope as well as issues with security that we may encounter during development.
            We have chosen this project because of our shared interest in personal finance.  We all have a good idea of what we want to see in a budgeting app, and believe in our ability to create something purposeful.  An advantage of this particular project is that the app can also be subdivided into manageable, modular goals.  These goals can be easily modified to suit any time constraints or requirement changes we encounter along the way.  If we have extra time,  we can supplement the content of the app with useful widgets such as a calculator that approximates income tax,  or one which calculates interest generated by consistent contributions to savings.
            In creating this application,  standard web development platforms will be utilized.  A front end will be created using HTML, CSS, and JavaScript.   The backend of the app will be managed with scripts utilizing Python, Django, Flask, and SQL for database management.  The abilities of the team are diverse among these tools, so a separation of workflow is starting to become apparent. A management app such as Trello will act as a structure to manage workflow efficiently.
        `,
        img:"card_regal.png",
        from: "January 2021",
        to: "May 2021"
    },
    {
        title: "PAWS Lab",
        text: `
            Personalized Adaptive Web Systems Lab was established in 2004 with support from National Science Foundation and the School of Information Sciences at the University of Pittsburgh. The goal of the PAWS Lab is development and evaluation of innovative user- and group-adaptive Web-based technologies, systems, and architectures. The Lab currently explores a range of user modeling, adaptation, and personalization technologies. The work of the Lab is supported by NSF and DARPA funding.
        `,
        img:"PAWS_logo.png",
        from: "May 2020",
        to: "December 2020"
    },
    {
        title: "Metroidvania",
        text: `
            A metroidvania with a focus on ranged combat and movement. The weapons and gadgets unlocked compliment the movement system and allows for intricate navigation. Sections of proceduraly generated areas branch predesigned locations for a mix of purposefully designed world design and procedurally generated areas inbetween.
        `,
        img:"card_metroidvania.png",
        from: "August 2020",
        to: "December 2020"
    },
    {
        title: "PathFinder",
        text: `
            PathFinder is an educational web application made sometime during senior year of High School. It was a class project where each student was to create their own game from scratch. In PathFinder, you take control over the main character that is stuck inside a Labirinth where there is no way out. Upon traversing the labirinth, you discover multiple NPC's. Each NPC asks a different question where the player must get all questions correct before being able to escape the labirinth.
        `,
        img:"PathFinder.jpg",
        from: "August 2016",
        to: "May 2017"
    },
]

let education = [
    {
        school: "University of Oslo",
        degree: "Master of Science",
        major: "Programming and System Architecture",
        from: "2021",
        to: "2023",
        gpa: "4.583 / 5.000",
        img: "card_uio.png"
    },
    {
        school: "University of Pittsburgh",
        degree: "Bachelor of Science",
        major: "Computer Science",
        from: "2018",
        to: "2021",
        gpa: "3.755 / 4.000",
        img: "icon_pitt.png"
    },
    {
        school: "Community College of Allegheny County",
        degree: "N/A",
        major: "General Classes",
        from: "2017",
        to: "2018",
        gpa: "4.000 / 4.000",
        img: "icon_ccac.png"
    },
    {
        school: "Lambertseter Vidregående Skole",
        degree: "High School Diploma",
        major: "Natural Science and Mathmatics Studies",
        from: "2014",
        to: "2017",
        gpa: "3.885 / 6.000",
        img: "icon_lambertseter.png"
    },
]

let experiences = [
    {
        title: "Graduate Student Researcher",
        location: "University of Oslo",
        time: "January 2022 - June 2023",
        desc: "Lorem ipsum..."
    },
    {
        title: "Undergraduate Teaching Assistant",
        location: "University of Pittsburgh",
        time: "August 2020 - May 2021",
        desc: "I served as a UTA for two semesters at the University of Pittsburgh. In this position, i was asked to help students with any questions they had about the class or any assignments. Additionally, we were asked to proctoring our own classes and handle any additional work that was associated with this. This includes creating solutions to lab assignments, create problems for the students to solve, and more."
    },
    {
        title: "Undergraduate Student Researcher",
        location: "University of Pittsburgh",
        time: "May 2020 - December 2020",
        desc: "I compleated my capstone project under the supervision of Professor Brusilovsky at the University of Pittsburgh. In this project, I was tasked with the back-end and front-end development for their student analytics dashboard. I worked closely with PhD Student Jordan Barria-Pineda with finding the most optimal way of displaying data to the user for the interactive dashboard which was to be displayed to the user of the application. In this project, I was able to put my knowledge of programming and CS into work, creating this application from scratch (outisde an already established database). In this project, I creating an application using REST-API that connected their database to the back-end, which then would pass the processed data to the front-end. By the end of 2020, all Professors associated with the project agreed that my work was worth the highest grade."
    },
]