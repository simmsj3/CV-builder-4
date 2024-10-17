const quests = {
    year1: [
        {
            title: "Volunteering",
            type: "Work Experience",
            description: "Get involved in a community project, charity or organisation.",
            skillTree: "Leadership & Teamwork",
            reason: "Volunteering shows commitment to your community and your field. It can provide hands-on experience in scientific or healthcare settings.",
            url: "https://www.aston.ac.uk/careers/get-experience/part-time-jobs-and-volunteering",
            year: 1
        },
        {
            title: "Part-time Job",
            type: "Work Experience",
            description: "Look for part-time job opportunities, either on-campus or off-campus or even explore summer internship possibilities in labs or biotech companies",
            skillTree: "Leadership & Teamwork",
            reason: "Work experience, even if not directly related to biochemistry, develops professional skills and demonstrates responsibility and time management.",
            url: "https://astonfutures.aston.ac.uk/",
            year: 1
        },
        {
            title: "Personal Projects",
            type: "Professional Development",
            description: "Start a science blog. Develop a small research project or literature review in an area of interest.",
            skillTree: "Leadership & Teamwork",
            reason: "Personal projects showcase your initiative, creativity, and genuine interest in biochemistry beyond coursework.",
            url: "https://astonfutures.aston.ac.uk/",
            year: 1
        },
        {
            title: "Join a society or sports club",
            type: "Extracurricular Activities",
            description: "Join Aston's BioSoc, Biochemical Society or other relevant societies",
            skillTree: "Networking & Communication",
            reason: "Extracurricular activities develop soft skills like teamwork and communication. Leadership roles provide valuable experience.",
            links: [
                { name: "Aston Clubs and Societies", url: "https://www.astonsu.com/activities/clubsandsocieties/" },
                { name: "Biochemical Society", url: "https://www.biochemistry.org/" }
            ],
            year: 1
        },
        {
            title: "Attend events, workshops, or external talks",
            type: "Professional Development",
            description: "Participate in networking events, seminars, or inaugural professorial talks.",
            skillTree: "Academic Excellence",
            reason: "These activities help you present yourself more effectively to potential employers.",
            url: "https://www.aston.ac.uk/careers/find-a-job/researching-employers",
            year: 1
        }
    ],
    year2: [
        {
            title: "Meet with Placement Coordinator",
            type: "Professional Development",
            description: "Have a 1-to-1 meeting with the Placement Coordinator to discuss your career goals.",
            skillTree: "Professional Skills",
            reason: "This meeting helps you understand the placement process and align your career goals.",
            url: "https://www.aston.ac.uk/careers/contact-us",
            year: 2
        },
        {
            title: "Attend All Placement Workshops",
            type: "Professional Development",
            description: "Participate in all scheduled Placement Workshops to prepare for your placement year.",
            skillTree: "Professional Skills",
            reason: "These workshops provide essential information and skills for securing and succeeding in your placement.",
            url: "https://www.aston.ac.uk/careers/placements",
            year: 2
        },
        {
            title: "Attend The Big Careers Fair",
            type: "Networking",
            description: "Attend the careers fair and speak to at least 3 employers about opportunities.",
            skillTree: "Networking & Communication",
            reason: "Career fairs provide opportunities to make connections with potential employers.",
            url: "https://www.aston.ac.uk/careers/find-a-job/researching-employers",
            year: 2
        }
    ],
    year4: [
        {
            title: "Apply for Graduate Programmes",
            type: "Professional Development",
            description: "Research and apply for at least 3 graduate programmes (e.g., STP).",
            skillTree: "Professional Skills",
            reason: "Applying for graduate programmes helps you transition from university to professional life.",
            url: "https://www.aston.ac.uk/careers/find-a-job/researching-employers",
            year: 4
        },
        {
            title: "Meet with Careers Consultant",
            type: "Professional Development",
            description: "Schedule and attend a meeting with a Careers Consultant to discuss post-graduation plans.",
            skillTree: "Professional Skills",
            reason: "Career consultants provide valuable guidance on your career path and job search strategies.",
            url: "https://www.aston.ac.uk/careers/contact-us",
            year: 4
        },
        {
            title: "Connect with Alumni",
            type: "Networking",
            description: "Connect with Alumni on LinkedIn and people who work at companies you're interested in.",
            skillTree: "Networking & Communication",
            reason: "Alumni connections can provide insights into different career paths and potential job opportunities.",
            url: "https://www.aston.ac.uk/careers/cv/cvs-and-cover-letters",
            year: 4
        }
    ],
    anytime: [
        {
            title: "Develop your skills",
            type: "Skills Development",
            description: "Focus on developing and polishing skills that employers look for.",
            skillTree: "Technical Proficiency",
            reason: "Developing transferable skills makes you more versatile and valuable to potential employers.",
            links: [
                { name: "Careers and Placements", url: "https://www.aston.ac.uk/careers/cv/resource-library" },
                { name: "Skills need improving", url: "https://www.aston.ac.uk/current-students/support-services/disability-support/resources" },
                { name: "Polishing overall skills", url: "https://www.aston.ac.uk/current-students/learning-development-centre/academic-writing-and-study-support" }
            ],
            year: "anytime"
        },
        {
            title: "Set up a LinkedIn profile",
            type: "Professional Development",
            description: "Create a professional LinkedIn profile to start building your online presence.",
            skillTree: "Networking & Communication",
            reason: "A strong professional online presence showcases your seriousness about your career.",
            url: "https://www.aston.ac.uk/careers/cv/cvs-and-cover-letters",
            year: "anytime"
        }
    ]
};


let completedQuests = JSON.parse(localStorage.getItem('completedQuests')) || [];

// Show quests based on the selected year
function showQuests(year) {
    const questArea = document.getElementById('quest-area');
    questArea.innerHTML = ''; // Clear existing quests
    const filteredQuests = quests[year];

    filteredQuests.forEach(quest => {
        const isCompleted = completedQuests.some(q => q.title === quest.title);
        const questDiv = document.createElement('div');
        questDiv.innerHTML = `
            <h4>${quest.title} ${isCompleted ? '(Completed)' : ''}</h4>
            <p><strong>Type:</strong> ${quest.type}</p>
            <p>${quest.description}</p>
            <p><strong>Skills Developed:</strong> ${quest.skillTree}</p>
            <p><strong>Why it's Important:</strong> ${quest.reason}</p>
            <a href="${quest.url}" target="_blank">Learn More</a>
            <br><br>
            <button onclick="completeQuest('${quest.title}')">Mark as Completed</button>
        `;
        questArea.appendChild(questDiv);
    });
}

// Mark quest as complete
function completeQuest(questTitle) {
    const completionDate = prompt('Enter the completion date (YYYY-MM-DD):');
    completedQuests.push({ title: questTitle, date: completionDate });
    localStorage.setItem('completedQuests', JSON.stringify(completedQuests));
    updateProgress();
    showQuests('year1'); // Reload quests to show updated status
}

// Update skill progress based on completed quests
function updateProgress() {
    const skillProgress = {
        "Academic Excellence": 0,
        "Professional Skills": 0,
        "Leadership & Teamwork": 0,
        "Technical Proficiency": 0,
        "Networking & Communication": 0
    };

    completedQuests.forEach(completedQuest => {
        const questData = findQuestByTitle(completedQuest.title);
        if (questData) {
            skillProgress[questData.skillTree]++;
        }
    });

    updateProgressBars(skillProgress);
}

// Update progress bars
function updateProgressBars(skillProgress) {
    const totalQuests = completedQuests.length;
    document.getElementById('academic-progress').textContent = `Academic Excellence: ${skillProgress['Academic Excellence']}%`;
    document.getElementById('professional-progress').textContent = `Professional Skills: ${skillProgress['Professional Skills']}%`;
    document.getElementById('leadership-progress').textContent = `Leadership & Teamwork: ${skillProgress['Leadership & Teamwork']}%`;
    document.getElementById('technical-progress').textContent = `Technical Proficiency: ${skillProgress['Technical Proficiency']}%`;
    document.getElementById('networking-progress').textContent = `Networking & Communication: ${skillProgress['Networking & Communication']}%`;

    // Update the visual bar width (example logic)
    document.getElementById('academic-progress').style.width = `${(skillProgress['Academic Excellence'] / totalQuests) * 100}%`;
    // Do the same for other progress bars
}

// Find quest by title (helper function)
function findQuestByTitle(title) {
    for (let year in quests) {
        const quest = quests[year].find(q => q.title === title);
        if (quest) return quest;
    }
    return null;
}

// Load the quests for the selected year
document.getElementById('year1-btn').addEventListener('click', () => showQuests('year1'));
document.getElementById('year2-btn').addEventListener('click', () => showQuests('year2'));
document.getElementById('year4-btn').addEventListener('click', () => showQuests('year4'));
document.getElementById('anytime-btn').addEventListener('click', () => showQuests('anytime'));

window.onload = function() {
    updateProgress(); // Load progress when page loads
    showQuests('year1'); // Default view is Year 1 quests
};
