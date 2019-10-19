export const universities = [
  {
    "slug": "b6d80aee-dd64-421d-bab2-cdf536b1a7cd",
    "name": "Michigan State University",
    "iped": "171100",
    "scid": "2800089",
    "applications": [
        "Coalition App",
        "Common App"
    ],
    "supplements": [
        {
            "slug": "0c87db2a-7904-4824-bcc3-0b0485f776c6",
            "name": "Criminal & Disciplinary Background",
            "applications": [
                "Coalition App",
                "University Application"
            ],
            "last_updated": 2018,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "4212dbce-2a3c-404f-8f23-97f18e2b74f0",
                    "prompt": "<p><strong>Expelled, suspended, disciplined, or placed on probation?</strong></p><p>Have you ever been expelled, suspended, disciplined, or placed on probation by any secondary school or college you have attended because of: academic dishonesty, financial impropriety, or an offense that harmed or had the potential to harm others? Please indicate below.</p><p><strong>Criminal offense</strong></p><p>Have you ever been convicted of a criminal offense (including in juvenile court) other than minor traffic violations, or are there criminal charges pending against you at this time? Please indicate below.</p>",
                    "topic": "School Discipline",
                    "max_length": null,
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": ""
                }
            ],
            "optional": true,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "<p>If you answer yes to either of these questions, please provide a thorough explanation of the circumstances surrounding the situation(s). If circumstances arise in the future (until the time you begin attending classes) that make your answer to the above questions inaccurate, misleading, or incomplete, you must provide the Office of Admissions with updated information.</p>",
            "topic": "School Discipline",
            "min_length": null,
            "max_length": null,
            "display_length": "No max length",
            "recommended_length": null
        },
        {
            "slug": "57b9ecf4-96b3-4903-ba8b-f444755a3e13",
            "name": "Criminal Charges",
            "applications": [
                "Common App"
            ],
            "last_updated": 2019,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "1e5b6915-b5c2-4420-be66-d0540a2aca6e",
                    "prompt": "<p>Have you ever been convicted of a criminal offense (including in juvenile court) other than minor traffic violations, or are there criminal charges pending against you at this time? If yes, please provide a thorough explanation of the circumstances surrounding the situation(s). If circumstances arise in the future (until the time you begin attending classes) that make your answer to the above question inaccurate, misleading, or incomplete, you must provide the Office of Admissions with updated information.</p>",
                    "topic": "Criminal Charges or Conviction",
                    "max_length": {
                        "unit": "words",
                        "value": 800
                    },
                    "min_length": {
                        "unit": "words",
                        "value": 1
                    },
                    "recommended_length": null,
                    "display_length": "800 Words"
                }
            ],
            "optional": true,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": "Criminal Charges or Conviction",
            "min_length": {
                "unit": "words",
                "value": 1
            },
            "max_length": {
                "unit": "words",
                "value": 800
            },
            "display_length": "800 words",
            "recommended_length": null
        },
        {
            "slug": "8b981042-6091-4c89-b685-290adad0b7a0",
            "name": "Choose 1 of 7",
            "applications": [
                "Coalition App",
                "University Application"
            ],
            "last_updated": 2019,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "d9b6ff2e-7106-40b2-b74c-b642f489c2d6",
                    "prompt": "<p>1. Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "e49a2482-584f-4cfe-84e8-ce35eef976d1",
                    "prompt": "<p>2. The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "9f90a9dd-7e7d-47bd-9a38-41327f6c0f7c",
                    "prompt": "<p>3. Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "e3eeae3b-fe49-4d47-84e9-80569c782705",
                    "prompt": "<p>4. Describe a problem you've solved or a problem you'd like to solve. It can be an intellectual challenge, a research query, an ethical dilemma - anything that is of personal importance, no matter the scale. Explain its significance to you and what steps you took or could be taken to identify a solution.</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "bebb7ef2-622a-47bf-9685-bf585b503e3d",
                    "prompt": "<p>5. Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "fe960d1b-fa86-41a2-96e2-36fe40f89dbf",
                    "prompt": "<p>6. Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "b50e036c-37d2-4eb4-a6aa-eb1fdc7b9352",
                    "prompt": "<p>7. Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                }
            ],
            "optional": false,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "<p>Choose 1 of 7</p>",
            "topic": "Personal Statement",
            "min_length": null,
            "max_length": {
                "unit": "words",
                "value": 650
            },
            "display_length": "650 words",
            "recommended_length": null
        },
        {
            "slug": "cd5cf770-8310-4ac4-a892-d35f6f16909b",
            "name": "Additional Info",
            "applications": [
                "Coalition App"
            ],
            "last_updated": 2018,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "4d00dd29-c167-411f-9d14-f6572c3bbc36",
                    "prompt": "<p>Please provide any additional details, circumstances, or qualifications not reflected in the application for admission.</p>",
                    "topic": "Additional Info",
                    "max_length": null,
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": ""
                }
            ],
            "optional": true,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": "Additional Info",
            "min_length": null,
            "max_length": null,
            "display_length": "No max length",
            "recommended_length": null
        }
    ],
    "programs": [
        {
            "slug": "7e3b63cb-1175-4d1a-a2ce-c3c8d6b38d8a",
            "name": "College of Agriculture and Natural Resources",
            "url": "http://www.canr.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "7cde3d75-2f7e-4f66-b297-726550c03b14",
            "name": "Eli Broad College of Business and Eli Broad Graduate School of Management",
            "url": "http://broad.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "71f1e342-1eea-4f62-951c-879044401d6e",
            "name": "College of Arts and Letters",
            "url": "http://www.cal.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "bb5d896a-5269-4149-b58b-18b83adfa921",
            "name": "College of Communication Arts and Sciences",
            "url": "http://cas.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "bfdd3287-58ac-4af9-8abf-8643657b3005",
            "name": "College of Education",
            "url": "http://www.educ.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "3efe6961-d586-4fea-a49e-7d8a9d4b35cc",
            "name": "College of Engineering",
            "url": "http://www.egr.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "ff0b9cfa-6633-4b6e-95e4-e32fb2ad4c74",
            "name": "Honors College",
            "url": "http://honorscollege.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "81f71a34-84ba-4c85-b302-d50757a2ce95",
            "name": "College of International Studies and Programs",
            "url": "http://www.isp.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "c74274cf-70e2-4038-892e-6edadafc9bc3",
            "name": "James Madison College",
            "url": "http://jmc.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "27891caf-f3e1-461b-9790-3873195d5c03",
            "name": "Lyman Briggs College",
            "url": "http://lymanbriggs.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "901186b6-f0dc-43de-9338-c530cd931a82",
            "name": "College of Music",
            "url": "http://music.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "5fa171b9-dcb5-4201-b5b0-a433c047d285",
            "name": "College of Natural Science",
            "url": "https://natsci.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "7b72e6ca-dd0a-41c7-9fcc-014d40f6c3c1",
            "name": "Residential College in the Arts and Humanities",
            "url": "http://rcah.msu.edu/",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "0c88985a-dd4d-4461-b006-fa8ddc20c5fa",
            "name": "College of Social Science",
            "url": "http://socialscience.msu.edu/",
            "program_type": "Program",
            "supplements": []
        }
    ],
    "has_own_application": true,
    "application_essays": [
        {
            "slug": "b65c641f-6378-4854-b049-014c5b38105e",
            "name": "Activities list (see description)",
            "applications": [],
            "last_updated": 2019,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "63db6051-62f7-433f-9ae2-13861e3708ce",
                    "prompt": "10 activities. 50 characters each for position/leadership description and organization name. 150 characters each for details, honors won, and accomplishments.",
                    "topic": null,
                    "max_length": null,
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": ""
                }
            ],
            "optional": false,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": null,
            "min_length": null,
            "max_length": null,
            "display_length": "No max length",
            "recommended_length": null
        },
        {
            "slug": "4444edb8-5480-470b-a240-fdbb07c25945",
            "name": "Common App Additional Info",
            "applications": [],
            "last_updated": 2019,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "52900dd9-7f21-482c-bfa7-64bcd0fa7b7f",
                    "prompt": "If you wish to provide details of circumstances or qualifications not reflected in your application, you may use the space below to provide any additional information you wish to share. (Please limit your response to 650 words.)",
                    "topic": "Additional Info",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                }
            ],
            "optional": true,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": "Additional Info",
            "min_length": null,
            "max_length": {
                "unit": "words",
                "value": 650
            },
            "display_length": "650 words",
            "recommended_length": null
        },
        {
            "slug": "ecc2efc4-bc60-478b-96e4-933eb8b89073",
            "name": "CA Personal Statement",
            "applications": [],
            "last_updated": 2019,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "d9b6ff2e-7106-40b2-b74c-b642f489c2d6",
                    "prompt": "<p>1. Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "e49a2482-584f-4cfe-84e8-ce35eef976d1",
                    "prompt": "<p>2. The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "9f90a9dd-7e7d-47bd-9a38-41327f6c0f7c",
                    "prompt": "<p>3. Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "e3eeae3b-fe49-4d47-84e9-80569c782705",
                    "prompt": "<p>4. Describe a problem you've solved or a problem you'd like to solve. It can be an intellectual challenge, a research query, an ethical dilemma - anything that is of personal importance, no matter the scale. Explain its significance to you and what steps you took or could be taken to identify a solution.</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "bebb7ef2-622a-47bf-9685-bf585b503e3d",
                    "prompt": "<p>5. Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "fe960d1b-fa86-41a2-96e2-36fe40f89dbf",
                    "prompt": "<p>6. Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                },
                {
                    "slug": "b50e036c-37d2-4eb4-a6aa-eb1fdc7b9352",
                    "prompt": "<p>7. Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.</p>",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "words",
                        "value": 650
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "650 Words"
                }
            ],
            "optional": false,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": "Personal Statement",
            "min_length": null,
            "max_length": {
                "unit": "words",
                "value": 650
            },
            "display_length": "650 words",
            "recommended_length": null
        }
    ]
  },
  {
    "slug": "dfbb9fb1-9a67-4f88-90a8-aee02b5431df",
    "name": "Georgetown",
    "iped": "131496",
    "scid": "1100973",
    "applications": [],
    "supplements": [
        {
            "slug": "5d610530-255b-4416-80f8-8d540701d17d",
            "name": "Optional Portfolio: Dance Supplemen",
            "applications": [
                "University Application"
            ],
            "last_updated": 2018,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "ca5b2d2a-c499-41c7-8ba6-4bc9814d29a9",
                    "prompt": "<p>A cover letter outlining your specific interest in the Department, your relevant experience, why you are applying to Georgetown, and how you envision being involved in the Performing Arts at Georgetown (e.g. <a href=\"https://performingarts.georgetown.edu/academics/dance/performing-arts-minor\" style=\"background-color: rgb(255, 255, 255); color: rgb(18, 57, 101);\" target=\"_blank\"><em>as a Performing Arts minor</em></a><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">? </span>participant in academic dance courses and performances?  <a href=\"https://performingarts.georgetown.edu/participate/perform/dance-groups\" style=\"background-color: rgb(255, 255, 255); color: rgb(18, 57, 101);\" target=\"_blank\"><em>co-curricular activity</em></a><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">only?</span> as a dancer with other performing arts interests, such as music and/or theater?) Please be explicit in the cover letter about any other materials you are submitting. If you are interested in submitting materials for more than one discipline, craft your single cover letter accordingly addressing your multiple interests.</p>",
                    "topic": null,
                    "max_length": null,
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": ""
                }
            ],
            "optional": true,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": null,
            "min_length": null,
            "max_length": null,
            "display_length": "No max length",
            "recommended_length": null
        },
        {
            "slug": "a1298e02-9440-49ee-8cf3-790c1a9c7408",
            "name": "Optional Portfolio: Theater Supplement",
            "applications": [
                "University Application"
            ],
            "last_updated": 2018,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "f631dcf1-de3a-4cf9-9f3b-ee9d761760c8",
                    "prompt": "<p>A cover letter outlining your specific interest in the Department, your relevant experience, why you are applying to Georgetown, and how you envision being involved in the Performing Arts at Georgetown (e.g. as a <a href=\"https://performingarts.georgetown.edu/academics/tpst/majors-and-minors\" style=\"background-color: rgb(255, 255, 255); color: rgb(18, 57, 101);\" target=\"_blank\"><em>Theater &amp; Performance Studies major? minor?</em></a> supplemental academic courses and productions? co-curricular projects only?) Please be explicit in the cover letter about any other materials you are submitting. If you are interested in submitting materials for more than one discipline, craft your single cover letter accordingly addressing your multiple interests.</p>",
                    "topic": null,
                    "max_length": null,
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": ""
                }
            ],
            "optional": true,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": null,
            "min_length": null,
            "max_length": null,
            "display_length": "No max length",
            "recommended_length": null
        },
        {
            "slug": "34e73a46-a8e6-475f-8a56-55f0ca117b16",
            "name": "Optional Portfolio: Music Supplement",
            "applications": [
                "University Application"
            ],
            "last_updated": 2018,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "0c789ca4-f84b-4263-93d4-05c1a12b8c1a",
                    "prompt": "<p> A cover letter outlining your specific interest in the Department, your relevant experience, why you are applying to Georgetown, and how you envision being involved in the Performing Arts at Georgetown (e.g. as an <a href=\"https://performingarts.georgetown.edu/academics/music/majors-and-minors\" style=\"background-color: rgb(255, 255, 255); color: rgb(18, 57, 101);\" target=\"_blank\"><em>American Musical Culture major? Minor? </em></a>Supplemental<span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\"> </span><a href=\"http://courses.georgetown.edu/index.cfm?Action=List&amp;ProgramID=123&amp;AcademicYear=2014&amp;AcademicTerm=FallSpring\" style=\"background-color: rgb(255, 255, 255); color: rgb(18, 57, 101);\" target=\"_blank\"><em>music courses</em></a><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\"> </span>and<span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\"> </span><a href=\"https://performingarts.georgetown.edu/music-ensemble-performances\" style=\"background-color: rgb(255, 255, 255); color: rgb(18, 57, 101);\" target=\"_blank\"><em>ensembles</em></a><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">? </span><a href=\"https://performingarts.georgetown.edu/participate/perform/music-ensembles\" style=\"background-color: rgb(255, 255, 255); color: rgb(18, 57, 101);\" target=\"_blank\"><em>co-curricular activities</em></a><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">?)</span> Please be explicit in the cover letter about any other materials you are submitting. If you are interested in submitting materials for more than one discipline, craft your single cover letter accordingly addressing your multiple interests.</p>",
                    "topic": null,
                    "max_length": null,
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": ""
                }
            ],
            "optional": true,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": null,
            "min_length": null,
            "max_length": null,
            "display_length": "No max length",
            "recommended_length": null
        },
        {
            "slug": "146348d0-4e72-4f62-bb3d-c6481ad270eb",
            "name": "Skill or Talent",
            "applications": [
                "University Application"
            ],
            "last_updated": 2018,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "c11c7b0c-beb4-4065-bbbc-1283d36dad94",
                    "prompt": "<p>Indicate any special talents or skills you possess (250 words).</p>",
                    "topic": null,
                    "max_length": {
                        "unit": "words",
                        "value": 250
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "250 Words"
                }
            ],
            "optional": false,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "<p>Note: This prompt only appears after the application fee is paid.</p>",
            "topic": null,
            "min_length": null,
            "max_length": {
                "unit": "words",
                "value": 250
            },
            "display_length": "250 words",
            "recommended_length": null
        },
        {
            "slug": "6d8816ba-2611-4bce-829d-fa1370aa86e3",
            "name": "About You",
            "applications": [
                "University Application"
            ],
            "last_updated": 2018,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "ec88cf70-ef0a-48ec-bd62-036a1841a605",
                    "prompt": "As Georgetown is a diverse community, the Admissions Committee would like to know more about you in your own words. Please submit a brief essay, either personal or creative, which you feel best describes you. (approximately 1 page single spaced)",
                    "topic": "Personal Statement",
                    "max_length": {
                        "unit": "pages",
                        "value": 1
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "1.0 Pages"
                }
            ],
            "optional": false,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "In addition to this essay, applications must compose an essay based on the school they’re applying to (view essay prompts with the associated programs when confirming essays).",
            "topic": "Personal Statement",
            "min_length": null,
            "max_length": {
                "unit": "pages",
                "value": 1
            },
            "display_length": "1.0 pages",
            "recommended_length": null
        },
        {
            "slug": "a0c2d402-9c00-46f4-bfdf-fa3538aadd3d",
            "name": "Describe an Activity",
            "applications": [
                "University Application"
            ],
            "last_updated": 2018,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "5fc5a589-10a6-44fd-ac97-907c27a2ac3b",
                    "prompt": "Briefly discuss the significance to you of the school or summer activity in which you have been most involved. (approximately 1/2 page single spaced)",
                    "topic": "Describe an Activity",
                    "max_length": {
                        "unit": "pages",
                        "value": 0.5
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "0.5 Pages"
                }
            ],
            "optional": false,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "",
            "topic": "Describe an Activity",
            "min_length": null,
            "max_length": {
                "unit": "pages",
                "value": 0.5
            },
            "display_length": "0.5 pages",
            "recommended_length": null
        }
    ],
    "programs": [
        {
            "slug": "0e7f1c15-793a-4cdf-a980-ce52d1ff7150",
            "name": "Walsh School Of Foreign Service",
            "url": "",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "f9541f9c-0810-4403-a58b-5c8dadc7507c",
            "name": "Mcdonough School Of Business",
            "url": "",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "9d363173-b33a-4711-8914-218c961262ab",
            "name": "Georgetown College",
            "url": "https://college.georgetown.edu/#_ga=2.202481873.1149092159.1498216570-197818372.1498216570",
            "program_type": "Program",
            "supplements": [
                {
                    "slug": "84cf8754-6659-4973-aeb7-c3f8bc114548",
                    "name": "Education",
                    "applications": [
                        "University Application"
                    ],
                    "last_updated": 2018,
                    "number_of_prompts_to_choose": 1,
                    "prompts": [
                        {
                            "slug": "169fdbdb-0036-4906-bf1b-ffd17ce470a3",
                            "prompt": "What does it mean to you to be educated? How might Georgetown College help you achieve this aim? (Applicants to the Sciences and Mathematics or the Faculty of Languages and Linguistics should address their chosen course of study).",
                            "topic": "Why Us?",
                            "max_length": {
                                "unit": "pages",
                                "value": 1
                            },
                            "min_length": null,
                            "recommended_length": null,
                            "display_length": "1.0 Pages"
                        }
                    ],
                    "optional": false,
                    "recommended": false,
                    "restricted_student_types": [],
                    "instructions": "",
                    "topic": "Why Us?",
                    "min_length": null,
                    "max_length": {
                        "unit": "pages",
                        "value": 1
                    },
                    "display_length": "1.0 pages",
                    "recommended_length": null
                }
            ]
        },
        {
            "slug": "79e7e474-6dd5-45b3-9e74-809098930bb7",
            "name": "School Of Nursing & Health Studies",
            "url": "",
            "program_type": "Program",
            "supplements": []
        },
        {
            "slug": "0010f623-fe08-4141-9bf8-2e8b0eb7b6b8",
            "name": "McDonough School of Business",
            "url": "",
            "program_type": "Major",
            "supplements": [
                {
                    "slug": "9fe9370b-da27-47ac-8ccf-966d6aed15a3",
                    "name": "McDonough School of Business 1",
                    "applications": [
                        "University Application"
                    ],
                    "last_updated": 2018,
                    "number_of_prompts_to_choose": 1,
                    "prompts": [
                        {
                            "slug": "fa55f4b6-c40a-476c-9d45-e753535493bd",
                            "prompt": "The McDonough School of Business is a national and global leader in providing graduates with essential ethical, analytical, financial and global perspectives.  Please discuss your motivations for studying business at Georgetown.",
                            "topic": "Why Us?",
                            "max_length": {
                                "unit": "pages",
                                "value": 1
                            },
                            "min_length": null,
                            "recommended_length": null,
                            "display_length": "1.0 Pages"
                        }
                    ],
                    "optional": false,
                    "recommended": false,
                    "restricted_student_types": [],
                    "instructions": "",
                    "topic": "Why Us?",
                    "min_length": null,
                    "max_length": {
                        "unit": "pages",
                        "value": 1
                    },
                    "display_length": "1.0 pages",
                    "recommended_length": null
                }
            ]
        },
        {
            "slug": "9e9bfffb-6af2-4b28-b678-2c4816e0a5fd",
            "name": "School of Nursing and Health Studies",
            "url": "",
            "program_type": "Major",
            "supplements": [
                {
                    "slug": "ea556647-e20c-46fd-9b6c-9bce9c88c800",
                    "name": "School of Nursing and Health Studies 1",
                    "applications": [
                        "University Application"
                    ],
                    "last_updated": 2018,
                    "number_of_prompts_to_choose": 1,
                    "prompts": [
                        {
                            "slug": "aff9203a-f010-485c-963e-414c1efdd7a9",
                            "prompt": "Describe the factors that have influenced your interest in studying health care.  Please specifically address your intended major (Global Health, Health Care Management &amp; Policy, Human Science, or Nursing).",
                            "topic": "Why Major?",
                            "max_length": {
                                "unit": "pages",
                                "value": 1
                            },
                            "min_length": null,
                            "recommended_length": null,
                            "display_length": "1.0 Pages"
                        }
                    ],
                    "optional": false,
                    "recommended": false,
                    "restricted_student_types": [],
                    "instructions": "",
                    "topic": "Why Major?",
                    "min_length": null,
                    "max_length": {
                        "unit": "pages",
                        "value": 1
                    },
                    "display_length": "1.0 pages",
                    "recommended_length": null
                }
            ]
        },
        {
            "slug": "25efb92f-e120-4c12-b333-a9df62fa4534",
            "name": "Walsh School of Foreign Service",
            "url": "",
            "program_type": "Major",
            "supplements": [
                {
                    "slug": "322a6ba7-deb1-4431-a6d9-1156f988e795",
                    "name": "Walsh School of Foreign Service 1",
                    "applications": [
                        "University Application"
                    ],
                    "last_updated": 2018,
                    "number_of_prompts_to_choose": 1,
                    "prompts": [
                        {
                            "slug": "d930569d-80de-4d4c-937c-3efba3793442",
                            "prompt": "Briefly discuss a current global issue, indicating why you consider it important and what you suggest should be done to deal with it.",
                            "topic": null,
                            "max_length": {
                                "unit": "pages",
                                "value": 1
                            },
                            "min_length": null,
                            "recommended_length": null,
                            "display_length": "1.0 Pages"
                        }
                    ],
                    "optional": false,
                    "recommended": false,
                    "restricted_student_types": [],
                    "instructions": "",
                    "topic": null,
                    "min_length": null,
                    "max_length": {
                        "unit": "pages",
                        "value": 1
                    },
                    "display_length": "1.0 pages",
                    "recommended_length": null
                }
            ]
        }
    ],
    "has_own_application": true,
    "application_essays": []
  },
  {
    "slug": "def580af-f63a-487d-91a2-a8f0685d5e56",
    "name": "Prompt University",
    "iped": "98765",
    "scid": "98765",
    "applications": [],
    "supplements": [
        {
            "slug": "f9249bd0-e550-4346-8053-a5f75a28346b",
            "name": "Essay 3",
            "applications": [
                "University Application"
            ],
            "last_updated": 2019,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "8c83b29c-a8c2-4a26-865b-16ce262e991c",
                    "prompt": "<p>Why is Prompt such a fun company to work at? Please answer in light of their amazing mission</p>",
                    "topic": "Background",
                    "max_length": {
                        "unit": "words",
                        "value": 500
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "500 Words"
                },
                {
                    "slug": "72471fef-5ff2-486e-8474-7ab967ff4d73",
                    "prompt": "<p>What is the best city and why is it New York City?</p>",
                    "topic": null,
                    "max_length": null,
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": ""
                }
            ],
            "optional": true,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "<p>Please be specific</p>",
            "topic": "Background",
            "min_length": null,
            "max_length": {
                "unit": "words",
                "value": 500
            },
            "display_length": "500 words",
            "recommended_length": null
        },
        {
            "slug": "109ca1ab-7926-4a44-a8a4-e82f3b08ec8b",
            "name": "Essay 2",
            "applications": [
                "University Application"
            ],
            "last_updated": 2019,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "8c83b29c-a8c2-4a26-865b-16ce262e991c",
                    "prompt": "<p>Why is Prompt such a fun company to work at? Please answer in light of their amazing mission</p>",
                    "topic": "Background",
                    "max_length": {
                        "unit": "words",
                        "value": 500
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "500 Words"
                },
                {
                    "slug": "e96c6292-969d-4dbb-a273-2ec3862c6c1b",
                    "prompt": "<p>Why is it important for students to write awesome essays?</p>",
                    "topic": "Community",
                    "max_length": null,
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": ""
                }
            ],
            "optional": false,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "Be great",
            "topic": null,
            "min_length": null,
            "max_length": {
                "unit": "words",
                "value": 500
            },
            "display_length": "500 words",
            "recommended_length": null
        },
        {
            "slug": "1705c294-91a8-495b-bcfb-1611be2dad20",
            "name": "Essay 1",
            "applications": [
                "University Application"
            ],
            "last_updated": 2019,
            "number_of_prompts_to_choose": 1,
            "prompts": [
                {
                    "slug": "8c83b29c-a8c2-4a26-865b-16ce262e991c",
                    "prompt": "<p>Why is Prompt such a fun company to work at? Please answer in light of their amazing mission</p>",
                    "topic": "Background",
                    "max_length": {
                        "unit": "words",
                        "value": 500
                    },
                    "min_length": null,
                    "recommended_length": null,
                    "display_length": "500 Words"
                }
            ],
            "optional": false,
            "recommended": false,
            "restricted_student_types": [],
            "instructions": "Write a super good essay",
            "topic": "Background",
            "min_length": null,
            "max_length": {
                "unit": "words",
                "value": 500
            },
            "display_length": "500 words",
            "recommended_length": null
        }
    ],
    "programs": [],
    "has_own_application": true,
    "application_essays": []
  }
]
