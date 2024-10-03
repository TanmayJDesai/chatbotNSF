
const info = {
    summer_cohort: {
        program_name: "Summer Cohort (ZAP & BOOM) - Regional Programs Part 1 & 2",
        dates: [
            "August 30, 3-6 PM",
            "September 6, 3-6 PM",
            "September 13, 3-6 PM",
            "September 20, 4-6 PM",
            "September 27, 4-6 PM"
        ],
        location: "UCLA Engineering VI, Room 100",
        registration_link: "https://forms.gle/Lg4Ud7EzUs5FMdN66"
    },
    fall_cohort: {
        program_name: "Fall Cohort (ZAP & BOOM) - Regional Programs Part 1 & 2",
        dates: [
            "October 24, 3-6 PM",
            "October 31, 3-6 PM",
            "November 7, 3-6 PM",
            "November 14, 4-6 PM",
            "November 21, 4-6 PM"
        ],
        location: "UCLA Engineering VI, Room 300",
        registration_link: "https://forms.gle/wujHiKQu1FMnSMX96"
    },
    usc_dates: {
        september: [
            "September 3, 4-7 PM",
            "September 10, 4-7 PM",
            "September 17, 4-7 PM"
        ],
        october: [
            "October 2, 4-7 PM",
            "October 9, 4-7 PM",
            "October 16, 4-7 PM"
        ],
        december: [
            "December 2, 4-7 PM",
            "December 9, 4-7 PM",
            "December 16, 4-7 PM"
        ]
    }
};

const icorps_info = {
    description: (
        "The I-Corps program was created by the National Science Foundation (NSF) in 2011<br>" +
        "to help transition academic research to the market. The program offers select teams<br>" +
        "the opportunity to participate in a fast-paced and rigorous process that aids in moving<br>" +
        "products from the lab to the market by providing hands-on experience with customer discovery."
    ),
    structure: (
        "The program consists of two legs: ZAP and BOOM. Teams participate in ZAP individually or as a team,<br>" +
        "online or in-person. Upon completion, selected teams are invited to participate in BOOM, which is<br>" +
        "online-only. After BOOM, teams can apply for a $50,000 market research grant."
    ),
    application: (
        "You can apply to the ZAP program. After ZAP, you'll be eligible to participate in BOOM by invitation.<br>" +
        "Successful completion of BOOM qualifies you to apply for a $50,000 market research grant."
    ),
    contact: "For more information, you can contact us at startup@ita.ucla.edu.",
    faq: "For additional questions, please consult the I-Corps FAQ.",
    regional_program_info: (
        "The I-Corps Hub West offers a free regional program with courses taught by experienced entrepreneurs.<br>" +
        "Teams or individuals who complete the regional program are eligible to receive lineage and a letter of<br>" +
        "recommendation for the NSF I-Corps National program ($50,000 grant).<br><br>" +
        "Regional course participants will learn to:<br>" +
        "- Evaluate a technology’s commercialization potential<br>" +
        "- Find and talk to potential customers and industry stakeholders<br>" +
        "- Identify their customers<br>" +
        "- Identify the real problems the customer needs solved<br>" +
        "- Develop an entrepreneurial mindset"
    ),
    methodology: "For information about our methodology and selection process, please visit: <a href='https://www.ita.ucla.edu/our-methodology/' target='_blank'>our methodology</a>.",
    companies_info: (
        "Here are some of the supported companies and projects:<br><br>" +
        "- <strong>BruinPatch Inc.</strong>: Developed a solution to extend the lifetime of pothole repairs or match the original pavement's service life.<br>" +
        "- <strong>Cytovale</strong>: Cancer diagnostic instrument that measures cell deformation to detect cancer with high sensitivity.<br>" +
        "- <strong>Heirlogix</strong>: Provides energy-efficient hierarchical FPGA and programming tools with reduced power and size requirements.<br>" +
        "- <strong>Inston’s MeRAM</strong>: Electric-field-controlled magnetic memory technology offering lower power consumption, better density, and scalability.<br>" +
        "- <strong>Neural Analytics</strong>: Non-invasive solution for measuring intracranial pressure using a portable ultrasound device.<br>" +
        "- <strong>Polyradiant Corp</strong>: Developing transparent composite electrode technologies with conductive nanowires and polymers.<br>" +
        "- <strong>SELFA</strong>: UCLA semiconductor nano-tech platform for high-sensitivity In Vitro Diagnostics with minimal personnel training.<br>" +
        "- <strong>SmartestK12</strong>: Provides insights into student comprehension levels, tracking learning in real-time.<br>" +
        "- <strong>VuPad</strong>: Mobile augmented reality app for previewing furniture scaled-to-size in a user’s own space.<br><br>" +
        "More info about these companies can be found here: <a href='https://www.ita.ucla.edu/companies/' target='_blank'>our supported companies</a>."
    )
};


function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    const chatBody = document.getElementById('chat-body');
    
    if (userInput) {
        let response = getChatbotResponse(userInput.toLowerCase());
        
        // Display user message
        chatBody.innerHTML += `<div class="message user-message">${userInput}</div>`;
        
        // Display chatbot response
        chatBody.innerHTML += `<div class="message bot-message">${response}</div>`;
        
        // Clear input field
        document.getElementById('user-input').value = '';
        
        // Scroll to the bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function clearChat() {
    document.getElementById('chat-body').innerHTML = '';
}

function getChatbotResponse(userInput) {
    if (userInput.includes("null") || userInput.includes("void")) {
        return "Information on upcoming national cohorts can be accessed through this link: [National Cohorts](https://new.nsf.gov/funding/initiatives/i-corps/cohorts)"
    } else if (userInput.includes("location") || userInput.includes("where")) {
        return "Information on upcoming national cohorts can be accessed through this link: [National Cohorts](https://new.nsf.gov/funding/initiatives/i-corps/cohorts)"
    } else if (userInput.includes("registration") || userInput.includes("sign up") || userInput.includes("register")) {
        return "Information on how to register/form a team can be accessed through this link: https://new.nsf.gov/funding/initiatives/i-corps/national-teams-applicants"
    } else if (userInput.includes("icorps") || userInput.includes("i-corps")) {
        return icorps_info.description;
    } else if (userInput.includes("program structure") || userInput.includes("structure")) {
        return icorps_info.structure;
    } else if (userInput.includes("how to apply") || userInput.includes("apply")) {
        return icorps_info.application;
    } else if (userInput.includes("contact") || userInput.includes("reach out to") || userInput.includes("who can I reach out to") || userInput.includes("reach")) {
        return icorps_info.contact;
    } else if (userInput.includes("faq")) {
        return icorps_info.faq;
    } else if (userInput.includes("regional program") || userInput.includes("regional")) {
        return icorps_info.regional_program_info;
    } else if (userInput.includes("methodology") || userInput.includes("selection process")) {
        return icorps_info.methodology;
    } else if (userInput.includes("companies") || userInput.includes("projects")) {
        return icorps_info.companies_info;
    } else if (userInput.includes("icorps") || userInput.includes("what is icorps") || userInput.includes("icorps description")) {
        return "The U.S. National Sscience Foundation’s Innovation Corps (I-Corps™) program is an immersive, entrepreneurial training program that facilitates the transformation of invention to impact. This immersive, seven-week experiential training program prepares scientists and engineers to extend their focus beyond the university laboratory — accelerating the economic and societal benefits of NSF-funded and other basic research projects that are ready to move toward commercialization.";
    } else if (userInput.includes("national needs") || userInput.includes("what are the urgent national needs") || userInput.includes("urgent national needs of icorps")) {
        return "Widely recognized as an effective training program in the U.S. and internationally, I-Corps addresses four urgent national needs:\n\n- Training an entrepreneurial workforce\n- Translating technologies\n- Enabling positive economic impact\n- Nurturing an innovation ecosystem";
    } else if (userInput.includes("accomplishments") || userInput.includes("opportunities for icorps participants") || userInput.includes("what have icorps participants achieved")) {
        return "Since the launch of the I-Corps program, participants have formed more than 1,000 startups that have raised over $760 million in funding. Participants who have completed I-Corps have engaged in the following opportunities:\n\n- **Launching a startup**: Raising private capital or applying for federal grants including America's Seed Fund powered by NSF, also known as the Small Business Innovation Research and Small Business Technology Transfer (SBIR/STTR) programs to further develop and test their research and product concepts and validate their business model.\n\n- **Conducting more use-driven research**: Further refining their idea to make it market ready or to develop a new technology to fill a market need.\n\n- **Pursuing licensing or knowledge transfers**: Working with a university’s technology transfer office, licensing their technology to an existing business to bring the product or idea to the marketplace.";
    } else if (userInput.includes("team formation") || userInput.includes("how to apply") || userInput.includes("forming a team for icorps")) {
        return "To apply for the I-Corps program, form a team consisting of three to five members, with each member playing a distinct role:\n\n- **Technical lead**: Typically, a faculty member who is the technology inventor and serves as principal investigator, or a postdoctoral researcher who has deep expertise in the core technology area to be evaluated for market potential.\n\n- **Entrepreneurial lead**: Typically, a graduate student or postdoctoral researcher who leads the team and is committed to commercialization.\n\n- **Industry mentor**: An industry expert with business/entrepreneurial experience who is independent from the technology development and team.\n\nTeams may include additional members but must not exceed five members. A principal investigator (PI) of record may also be identified, who submits the proposal, manages the award, and is connected with the technology development but does not participate in the training program.";
    } else if (userInput.includes("checklist") || userInput.includes("application requirements") || userInput.includes("who can apply for icorps")) {
        return "Checklist for I-Corps Applicants:\n\n1. Applicants must have a technology development connection to an institution of higher education and submit their application from an institution of higher education.\n2. Applicants who have had an active NSF research award in the last five years in a relevant research area –– from any field of science or engineering –– are eligible to apply to the national I-Corps program.\n3. Researchers who have not received a research award from NSF may earn eligibility for the national I-Corps program by first participating in a regional I-Corps program and receiving a letter of recommendation following completion of the program.";
    } else if (userInput.includes("information for accepted national teams") || userInput.includes("accepted national teams") || userInput.includes("information for icorps teams")) {
        return "Congratulations to all teams that have been accepted into the U.S. National Science Foundation's Innovation Corps (I-Corps™) Teams training program. As you prepare for the program, browse this page for information pertaining to your participation.\n\nPlease expect to receive information on registration seven to eight weeks before the training begins. Each team member will need to register and select your team's name, which is an important part of your entrepreneurial journey.\n\nYou will also receive a welcome letter four weeks out from the start of the training from VentureWell, NSF's curriculum and assessment partner for the I-Corps program. VentureWell will introduce you to your teaching team and provide important information on pre-program homework, the agenda and syllabus, online course management software, and how to connect virtually for meetings.";
    } else if (userInput.includes("training agenda") || userInput.includes("icorps training program") || userInput.includes("what is the icorps training")) {
        return "The agenda for the training program consists of:\n\n- A three and one-half day kickoff session\n- Five weekly half-day sessions\n- A final two-day session, including a lessons learned presentation\n\nThe entire training program lasts seven weeks, and participants are expected to dedicate a minimum of 15 hours per week to the program. The sessions combine instructor and team presentations with active discussion and interaction. The focus of the program is customer discovery, in which teams interview potential customers and industry stakeholders to evaluate the potential product-market fit of their technology and inform their potential business model. By the end of the program, each team is expected to have conducted at least 100 interviews with potential customers and other stakeholders in their proposed target markets. Teams will present their customer discovery results and next steps during a final 'lessons learned' presentation.";
    } else if (userInput.includes("upcoming national cohorts") || userInput.includes("cohorts") || userInput.includes("times") || userInput.includes("dates") || userInput.includes("locations") || userInput.includes("Where") || userInput.includes("where")|| userInput.includes("next cohorts")) {
        return "Upcoming national cohorts can be accessed through this link: [National Cohorts](https://new.nsf.gov/funding/initiatives/i-corps/cohorts)";
    } else if (userInput.includes("impact data") || userInput.includes("nsf icorps impact data")) {
        return "For more information on NSF I-Corp Impact Data, visit: [NSF I-Corp Impact Data](https://new.nsf.gov/funding/initiatives/i-corps/impact-data)";
    } else if (userInput.includes("alumni team highlights") ||  userInput.includes("nsf icorps alumni team highlights")) {
        return "Check out the NSF I-Corp Alumni Team Highlights here: [NSF I-Corp Alumni Team Highlights](https://new.nsf.gov/funding/initiatives/i-corps/team-highlights)";
    } else if (userInput.includes("mission") || userInput.includes("what is the mission") || userInput.includes("what does icorps do") || userInput.includes("what does ucla icorps do") || userInput.includes("what does ucla nsf icorps do")) {
        return "The mission of I-Corps is to reduce the risk associated with translating technologies from the laboratory to the marketplace. To do this, I-Corps uses experiential education to help researchers reduce the time it takes to translate promising ideas from the laboratory to widespread implementation.";
    } else if (userInput.includes("benefits") || userInput.includes("what are the benefits of icorps") || userInput.includes("benefits of icorps participation")) {
        return "The I-Corps curriculum is not about how to write a research paper, business plan, or NSF proposal. The result is not a publication or a presentation of slides. Instead, I-Corps participants receive direct, hands-on experience in customer discovery — a key step in the entrepreneurial process that involves talking to potential customers, partners, and other industry stakeholders. The interview results allow the team to evaluate the commercial potential of their innovation for translation into a successful product and/or service.";

    } else if (userInput.includes("mission") || userInput.includes("what is the mission") || userInput.includes("what does icorp do") || userInput.includes("what does ucla icorp do") || userInput.includes("what does ucla nsf icorp do")) {
            return "The mission of I-Corps is to reduce the risk associated with translating technologies from the laboratory to the marketplace. To do this, I-Corps uses experiential education to help researchers reduce the time it takes to translate promising ideas from the laboratory to widespread implementation.";
    } else if (userInput.includes("research experiences") || userInput.includes("reu")) {
        return (
            "The Research Experiences for Undergraduates (REU) program offers research opportunities to undergraduates in the research areas funded by NSF.<br>"
            + "Participants work closely with faculty and other researchers, receiving mentorship and building their professional network.<br><br>"
            + "Eligibility: Check specific program criteria.<br>"
            + "How to apply: Follow application guidelines for the REU site of interest."
        );
    } else if (userInput.includes("international research") || userInput.includes("ires")) {
        return (
            "The International Research Experiences for Students (IRES) program offers international research opportunities to undergraduate and graduate students.<br>"
            + "Participants are mentored by researchers at a foreign lab, allowing them to build their professional network.<br><br>"
            + "Eligibility: Check specific program criteria.<br>"
            + "How to apply: Follow application guidelines for the IRES site of interest."
        );
    } else if (userInput.includes("pathways internship") || userInput.includes("pathways program")) {
        return (
            "The federal Pathways Program is designed to recruit the next generation of the best and brightest to the federal workforce.<br>"
            + "Through NSF's Pathways Program, students can find paid internships in a variety of science and engineering fields.<br><br>"
            + "Eligibility: Check specific program criteria.<br>"
            + "How to apply: Follow application guidelines for the Pathways Program."
        );
    } else if (userInput.includes("summer scholars") || userInput.includes("summer internship")) {
        return (
            "NSF's Summer Scholars Internship Program is a 10-week-long summer internship for undergraduate and graduate students.<br>"
            + "Students work in NSF offices that align with their academic interests.<br><br>"
            + "Eligibility: Check specific program criteria.<br>"
            + "How to apply: Follow application guidelines for the Summer Scholars Internship Program."
        );
    } else if (userInput.includes("graduate school") || userInput.includes("graduate program")) {
        return (
            "Undergraduates and bachelor's degree holders applying to graduate programs are eligible to apply to NSF's Graduate Research Fellowship Program.<br>"
            + "This program provides financial support for graduate study in NSF-supported fields.<br>"
        );
    } else {
        return ("For more infromation please visit: https://www.nsf.gov/ <br><br>"
            +"Hi there! I'm happy to provide information about our cohorts, the NSF I-Corps program, "
                + "supported companies, NSF research opportunities, and more. You can ask about:<br><br>"
                + "- Dates<br>"
                + "- Locations<br>"
                + "- Registration<br>"
                + "- Specific cohort details (e.g., Summer or Fall Cohort)<br>"
                + "- Program Description<br>"
                + "- Program Structure<br>"
                + "- How to Apply<br>"
                + "- Contact Information<br>"
                + "- Frequently Asked Questions<br>"
                + "- Regional Program Information<br>"
                + "- Methodology and Selection Process<br>"
                + "- ITA-supported Companies and Projects<br>"
                + "- Research Experiences for Undergraduates (REU)<br>"
                + "- International Research Experiences for Students (IRES)<br>"
                + "- Pathways Internship Program<br>"
                + "- Summer Scholars Internship Program<br>"
                + "- Applying to Graduate School");
    }
}



document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if inside a form
        sendMessage();
    }
});

document.getElementById('clear-button').addEventListener('click', clearChat);


/*




*/
