// Declare all variables only once at the beginning of the script
let completedQuests = JSON.parse(localStorage.getItem('completedQuests')) || {};
let skillsProgress = JSON.parse(localStorage.getItem('skillsProgress')) || [];
let incompleteQuests = JSON.parse(localStorage.getItem('incompleteQuests')) || {}; // Store incomplete quests

const quests = {
    year1: [
        {
            title: "Volunteering",
            type: "Work Experience",
            description: "Get involved in a community project, charity or organisation.",
            skillTree: "Leadership & Teamwork",
            reason: "Volunteering shows commitment to your community and your field. It can provide hands-on experience in scientific or healthcare settings.",
            url: "https://www.aston.ac.uk/careers/get-experience/part-time-jobs-and-volunteering",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image1.jpg", //volunteer
            year: 1
        },
        {
            title: "Part-time Job",
            type: "Work Experience",
            description: "Look for part-time job opportunities, either on-campus or off-campus or even explore summer internship possibilities in labs or biotech companies",
            skillTree: "Leadership & Teamwork",
            reason: "Work experience, even if not directly related to biochemistry, develops professional skills and demonstrates responsibility and time management.",
            url: "https://www.aston.ac.uk/careers/get-experience/part-time-jobs-and-volunteering",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image2.jpg", //pt job
            year: 1
        },
        {
            title: "Personal Projects",
            type: "Professional Development",
            description: "Start a science blog. Develop a small research project or literature review in an area of interest.",
            skillTree: "Leadership & Teamwork",
            reason: "Personal projects showcase your initiative, creativity, and genuine interest in biochemistry beyond coursework.",
            url: "https://astonfutures.aston.ac.uk/",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image3.jpg", //personal project
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
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image4.jpg", //societies
            year: 1
        },
        {
            title: "Attend events, workshops, or external talks",
            type: "Professional Development",
            description: "Participate in networking events, seminars, or inaugural professorial talks.",
            skillTree: "Academic Excellence",
            reason: "These activities help you present yourself more effectively to potential employers.",
            url: "https://www.aston.ac.uk/careers/find-a-job/researching-employers",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image5.jpg", //prof develop
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
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image6.jpg", //placement coord
            year: 2
        },
        {
            title: "Attend All Placement Workshops",
            type: "Professional Development",
            description: "Participate in all scheduled Placement Workshops to prepare for your placement year.",
            skillTree: "Professional Skills",
            reason: "These workshops provide essential information and skills for securing and succeeding in your placement.",
            url: "https://www.aston.ac.uk/careers/placements",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image7.jpg", //Placement workshops
            year: 2
        },
        {
            title: "Attend The Big Careers Fair",
            type: "Networking",
            description: "Attend the careers fair and speak to at least 3 employers about opportunities.",
            skillTree: "Networking & Communication",
            reason: "Career fairs provide opportunities to make connections with potential employers.",
            url: "https://www.aston.ac.uk/careers/find-a-job/researching-employers",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image8.jpg", //Careers fare
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
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image9.jpg", //grad schemes
            year: 4
        },
        {
            title: "Meet with Careers Consultant",
            type: "Professional Development",
            description: "Schedule and attend a meeting with a Careers Consultant to discuss post-graduation plans.",
            skillTree: "Professional Skills",
            reason: "Career consultants provide valuable guidance on your career path and job search strategies.",
            url: "https://www.aston.ac.uk/careers/contact-us",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image6.jpg", //placement coord
            year: 4
        },
        {
            title: "Connect with Alumni",
            type: "Networking",
            description: "Connect with Alumni on LinkedIn and people who work at companies you're interested in.",
            skillTree: "Networking & Communication",
            reason: "Alumni connections can provide insights into different career paths and potential job opportunities.",
            url: "https://www.aston.ac.uk/careers/cv/cvs-and-cover-letters",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image10.jpg", //allumnus
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
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image11.jpg", //skills develop
            year: "anytime"
        },
        {
            title: "Set up a LinkedIn profile",
            type: "Professional Development",
            description: "Create a professional LinkedIn profile to start building your online presence.",
            skillTree: "Networking & Communication",
            reason: "A strong professional online presence showcases your seriousness about your career.",
            url: "https://www.aston.ac.uk/careers/cv/cvs-and-cover-letters",
            imageUrl: "https://raw.githubusercontent.com/simmsj3/CV-builder-4/main/images/image12.jpg", //linkedin
            year: "anytime"
        }
    ]
};





function showQuests(year) {
    const questArea = document.getElementById('quest-area');
    const skillsArea = document.getElementById('skills-progress-area');
    skillsArea.style.display = "none";
    questArea.style.display = "block";
    questArea.innerHTML = ''; // Clear existing quests

    // Get the default quests for the selected year
    let filteredQuests = quests[year] || [];

    // Add incomplete quests from the previous year to the current year if available
    if (year > 1 && incompleteQuests[year - 1]) {
        filteredQuests = filteredQuests.concat(incompleteQuests[year - 1]);
        delete incompleteQuests[year - 1];  // Remove these tasks from the previous year
    }

    // Filter out completed quests so they are not shown again
    filteredQuests = filteredQuests.filter(quest => !completedQuests[quest.title]);

    // If no quests are left to show, display a message
    if (filteredQuests.length === 0) {
        questArea.innerHTML = "<p>No quests available for this year.</p>";
        return;
    }

  filteredQuests.forEach(quest => {
    const questDiv = document.createElement('div');
    const questEntries = completedQuests[quest.title] || [];
    const entryCount = questEntries.length > 0 ? `(${questEntries.length} Entries)` : '';

    let linksHtml = '';
    if (quest.links && quest.links.length > 0) {
        quest.links.forEach(link => {
            linksHtml += `<a href="${link.url}" target="_blank">${link.name}</a><br>`;
        });
    }

    questDiv.innerHTML = `
        <img src="${quest.imageUrl}" alt="${quest.title} image" class="task-image" style="width: 100px; height: auto; margin-right: 20px; float: left;">
        <h4>${quest.title} ${entryCount}</h4>
        <p><strong>Type:</strong> ${quest.type}</p>
        <p>${quest.description}</p>
        <p><strong>Skills Developed:</strong> ${quest.skillTree}</p>
        <p><strong>Why it's Important:</strong> ${quest.reason}</p>
        ${linksHtml}
        <br><br>
        <button onclick="openModal('${quest.title}')">Mark as Completed</button>
        <div style="clear: both;"></div>
    `;
    questArea.appendChild(questDiv);
});



// Modal handling
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const skillsForm = document.getElementById('skills-form');
const completionDateInput = document.getElementById('completion-date');

modalClose.onclick = function() {
    modal.style.display = "none";
    skillsForm.innerHTML = ''; // Clear form when modal is closed
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        skillsForm.innerHTML = ''; // Clear form when modal is closed
    }
};

function openModal(questTitle) {
    modal.style.display = "block";

    // Clear and set up the skills form
    skillsForm.innerHTML = `
        <label for="completion-date">Completion Date:</label>
        <input type="date" id="completion-date" name="completion-date">
        <h4>Select Skills Demonstrated</h4>
        <input type="checkbox" id="academic-excellence" name="skills" value="Academic Excellence">
        <label for="academic-excellence">Academic Excellence</label><br>
        <input type="checkbox" id="professional-skills" name="skills" value="Professional Skills">
        <label for="professional-skills">Professional Skills</label><br>
        <input type="checkbox" id="leadership-teamwork" name="skills" value="Leadership & Teamwork">
        <label for="leadership-teamwork">Leadership & Teamwork</label><br>
        <input type="checkbox" id="technical-proficiency" name="skills" value="Technical Proficiency">
        <label for="technical-proficiency">Technical Proficiency</label><br>
        <input type="checkbox" id="networking-communication" name="skills" value="Networking & Communication">
        <label for="networking-communication">Networking & Communication</label><br>
    `;

    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.textContent = 'Save';
    saveBtn.id = 'save-completion';
    skillsForm.appendChild(saveBtn);

    document.getElementById('save-completion').onclick = function() {
        completeQuest(questTitle);
    };
}

// Dynamically add freeform textboxes for each skill
skillsForm.onchange = function() {
    const checkedSkills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(el => el.value);
    let freeformHtml = '';

    checkedSkills.forEach(skill => {
        freeformHtml += `
            <div>
                <label for="evidence-${skill}"><strong>${skill} Evidence:</strong></label><br>
                <textarea id="evidence-${skill}" rows="3" cols="50" placeholder="Provide evidence for how you demonstrated ${skill}."></textarea>
                <p><em>Write about specific actions or achievements related to ${skill}. For example, explain how you applied the skill in the task, what impact you made, or any challenges you overcame.</em></p>
            </div>
        `;
    });

    skillsForm.innerHTML += freeformHtml; // Append textboxes for selected skills
};

// Mark quest as complete
function completeQuest(questTitle) {
    const completionDate = document.getElementById('completion-date').value;
    const skillsSelected = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(el => el.value);
    const evidence = skillsSelected.map(skill => ({
        skill: skill,
        evidence: document.getElementById(`evidence-${skill}`).value
    }));

    if (!completedQuests[questTitle]) {
        completedQuests[questTitle] = [];
    }

    completedQuests[questTitle].push({
        date: completionDate,
        skills: skillsSelected,
        evidence: evidence
    });

    localStorage.setItem('completedQuests', JSON.stringify(completedQuests));

    // Remove from incomplete tasks if it exists
    Object.keys(incompleteQuests).forEach(year => {
        incompleteQuests[year] = incompleteQuests[year].filter(quest => quest.title !== questTitle);
    });

    localStorage.setItem('incompleteQuests', JSON.stringify(incompleteQuests));

    updateSkillsProgress(skillsSelected, evidence);
    modal.style.display = "none";
    showQuests('year1'); // Refresh the quest list
}

// Update skill progress based on completed quest
function updateSkillsProgress(skills, evidence) {
    skills.forEach(skill => {
        skillsProgress.push({ skill: skill, evidence: evidence });
    });
    localStorage.setItem('skillsProgress', JSON.stringify(skillsProgress));
}

// Save incomplete quests and roll them over to the next year
function saveIncompleteQuests() {
    Object.keys(quests).forEach(year => {
        if (!incompleteQuests[year]) incompleteQuests[year] = [];

        const yearQuests = quests[year];
        yearQuests.forEach(quest => {
            if (!completedQuests[quest.title]) {
                incompleteQuests[year].push(quest);
            }
        });
    });
    localStorage.setItem('incompleteQuests', JSON.stringify(incompleteQuests));
}

// Show Skills Progress tab
document.getElementById('skills-tab-btn').addEventListener('click', function() {
    const skillsContent = document.getElementById('skills-content');
    const questArea = document.getElementById('quest-area');
    const skillsArea = document.getElementById('skills-progress-area');
    questArea.style.display = "none";
    skillsArea.style.display = "block";

    skillsContent.innerHTML = ''; // Clear existing skills

    if (skillsProgress.length === 0) {
        skillsContent.innerHTML = '<p>No skills recorded yet.</p>';
    } else {
        skillsProgress.forEach((progress, index) => {
            const skillDiv = document.createElement('div');
            skillDiv.innerHTML = `
                <p><strong>Skill:</strong> ${progress.skill}</p>
                <p><strong>Evidence:</strong> ${progress.evidence.map(e => e.evidence).join(', ')}</p>
            `;
            skillsContent.appendChild(skillDiv);
        });
    }
});

// Load the quests for the selected year
document.getElementById('year1-btn').addEventListener('click', () => showQuests('year1'));
document.getElementById('year2-btn').addEventListener('click', () => {
    saveIncompleteQuests(); // Save incomplete tasks before moving to the next year
    showQuests('year2');
});
document.getElementById('year4-btn').addEventListener('click', () => {
    saveIncompleteQuests();
    showQuests('year4');
});
document.getElementById('anytime-btn').addEventListener('click', () => showQuests('anytime'));

window.onload = function() {
    showQuests('year1'); // Default view is Year 1 quests
};

