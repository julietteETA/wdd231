const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//Select the container element
const container = document.getElementById("courses");

// Loop through the array and create "course name" for each course by displaying:
function displayCourses(courses) {
    container.innerHTML = "";
    courses.forEach(course =>
    // Create card container
    {
        const courseIncluded = document.createElement("div");
        //Add a style

        //Completed or not 
        courseIncluded.classList.add("course-completion");
        if (course.completed === true) {
            courseIncluded.classList.add("completed");
        } else {
            courseIncluded.classList.add("not-completed");
        }


        courseIncluded.innerHTML = `
            
            <h3>${course.subject}${course.number}</h3>`;
        //Credits of course 
        const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
        document.getElementById("currentNumber").textContent = ` ${totalCredits}`;
        
        container.appendChild(courseIncluded);
        


    });
    
    

}


//all courses


document.querySelector("#all").addEventListener("click", () => displayCourses(courses));
displayCourses(courses);




// CSE course


document.querySelector("#cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE') ;
    displayCourses(cseCourses);
    const totalCseCredits = cseCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("currentNumber").textContent = ` ${totalCseCredits}`;
});



//WDD course
document.querySelector("#wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
    const totalWddCredits = wddCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("currentNumber").textContent = ` ${totalWddCredits}`;
});
