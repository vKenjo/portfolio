import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className='qualification section' id='qualification'>
			<h2 className='section_title'>Qualifications</h2>
			<span className='section_subtitle'>My personal history</span>

			<div className='qualification_container container'>				<div className='qualification_tabs'>
					<div
						className={
							toggleState === 1
								? 'qualification_button qualification_active button--flex'
								: 'qualification_button button--flex'
						}
						onClick={() => toggleTab(1)}
					>
						<i className='uil uil-graduation-cap qualification_icon'></i>
						Education
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification_button qualification_active button--flex'
								: 'qualification_button button--flex'
						}
						onClick={() => toggleTab(2)}
					>
						<i className='uil uil-briefcase-alt qualification_icon'></i>
						Experience
					</div>

					<div
						className={
							toggleState === 3
								? 'qualification_button qualification_active button--flex'
								: 'qualification_button button--flex'
						}
						onClick={() => toggleTab(3)}
					>
						<i className='uil uil-users-alt qualification_icon'></i>
						Organizations
					</div>
				</div>

				<div className='qualification_sections'>					<div
						className={
							toggleState === 1
								? 'qualification_content qualification_content-active'
								: 'qualification_content'
						}
					>
						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>
									BS Computer Science
								</h3>
								<span className='qualification_degree'>
									Specializing in Data Science
								</span>
								<span className='qualification_subtitle'>
									University of Santo Tomas
								</span>
										<div className='qualification_honor'>
									<span className='honor_badge'>🏆</span>
									<span>UST Benavides Outstanding Achievement Award 2025</span>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🏆 Competition Achievements</h4>
									<div className='achievements_grid'>										<div className='achievement_item champion'>
											<span className='achievement_badge'>🥇</span>
											<span>National Innovation Day's FLIP HABI Health & Wellbeing Track - Champion</span>
										</div>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>🥇</span>
											<span>iThink Hackathon - Champion</span>
										</div>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>🥇</span>
											<span>Hooked Unitour Hackathon - Champion</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>🥈</span>
											<span>BPI DATAWave Hackathon - 1st Runner Up</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>🥈</span>
											<span>Kaya Founders Hackathon - 1st Runner Up</span>
										</div>										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>🥈</span>
											<span>DLSU Hackercup 2024 - 2nd Place</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>🥈</span>
											<span>FEU Tech ACM Codequest 2024 - 1st Runner Up & Best Poster</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>🥉</span>
											<span>ASES Manila Bootcamp 2024 - 2nd Runner Up</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>🎯</span>
											<span>DICT Philippine Startup Challenge 9 - Top 15</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>🎯</span>
											<span>MAPUA NextGen IS StartUp Challenge 2024 - Top 4</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> August 2022 - Present
								</div>
							</div>

							<div>
								<span className='qualification_rounder active'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Senior High School</h3>
								<span className='qualification_subtitle'>
									University of Santo Tomas
								</span>
								<div className='qualification_honor'>
									<span className='honor_badge'>🎓</span>
									<span>Graduated with Honors</span>
								</div>
								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> August 2020 - June 2022
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Junior High School</h3>
								<span className='qualification_subtitle'>
									Olivarez College
								</span>
								<div className='qualification_honor'>
									<span className='honor_badge'>🏅</span>
									<span>Graduated with High Academic Distinctions</span>
								</div>
								
								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🏆 Notable Achievements</h4>
									<div className='achievements_list'>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🏆</span>
											<span>Hon. Cong. Eric L. Olivarez Award of Academic Excellence</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>🧪</span>
											<span>PNU PRISMO 2019 - Top 30</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>🔬</span>
											<span>PSAP-ALAM Science Investigatory Project - 1st Runner-Up</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🎤</span>
											<span>PSAP-ALAM Best Presenter</span>
										</div>
										<div className='achievement_item bronze'>
											<span className='achievement_badge'>🥉</span>
											<span>MathScore Competition - Bronze Medalist</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> June 2018 - May 2020
								</div>
							</div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
						</div>
					</div>					<div
						className={
							toggleState === 2
								? 'qualification_content qualification_content-active'
								: 'qualification_content'
						}
					>
						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>AI Intern</h3>
								<span className='qualification_degree'>
									Artificial Intelligence & Machine Learning
								</span>
								<span className='qualification_subtitle'>
									AlertoPh - Philippines
								</span>
								
								<div className='qualification_description'>
									<p>Working on AI-driven disaster alert systems and machine learning models to enhance public safety through intelligent data analysis and predictive modeling.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🚀 Key Responsibilities</h4>
									<div className='achievements_list'>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🤖</span>
											<span>Developing AI models for disaster prediction</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>📊</span>
											<span>Implementing machine learning algorithms</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🔍</span>
											<span>Data analysis and pattern recognition</span>
										</div>
									</div>
								</div>
								
								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> February 2025 - Present
								</div>
							</div>

							<div>
								<span className='qualification_rounder active'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Data Management Intern</h3>
								<span className='qualification_degree'>
									Business Intelligence & Analytics
								</span>
								<span className='qualification_subtitle'>
									realme - Taguig, Philippines
								</span>

								<div className='qualification_description'>
									<p>Managed and analyzed large datasets for business intelligence, created comprehensive reports, and optimized data workflows for the mobile technology company.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>📈 Key Accomplishments</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>📊</span>
											<span>Optimized data processing workflows</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>📋</span>
											<span>Created automated reporting systems</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>🔧</span>
											<span>Database optimization and maintenance</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> June 2024 - August 2024
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Web Development Intern</h3>
								<span className='qualification_degree'>
									Full-Stack Development
								</span>
								<span className='qualification_subtitle'>
									Perfumity LLC - New Jersey, USA
								</span>

								<div className='qualification_description'>
									<p>Developed and maintained e-commerce web applications, implemented responsive designs, and worked on both frontend and backend technologies for the fragrance retail platform.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>💻 Technical Contributions</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>🌐</span>
											<span>Built responsive web applications</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>🛒</span>
											<span>E-commerce functionality development</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>⚡</span>
											<span>Performance optimization</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🔧</span>
											<span>API integration and testing</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> Dec 2023 - Mar 2024
								</div>
							</div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
						</div>
					</div><div
						className={
							toggleState === 3
								? 'qualification_content qualification_content-active'
								: 'qualification_content'
						}
					>
						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>City Lead</h3>
								<span className='qualification_degree'>
									Community Leadership & Event Management
								</span>
								<span className='qualification_subtitle'>
									Sip & Scale Manila
								</span>

								<div className='qualification_description'>
									<p>Leading Manila's startup community events, organizing networking sessions, and fostering entrepreneurial growth in the local tech ecosystem.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🌟 Leadership Impact</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>🎯</span>
											<span>Organizing startup community events</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🤝</span>
											<span>Building entrepreneurial networks</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> February 2025 - Present
								</div>
							</div>

							<div>
								<span className='qualification_rounder active'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder active'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Internal Relations Manager</h3>
								<span className='qualification_degree'>
									Cloud Technology & Community Relations
								</span>
								<span className='qualification_subtitle'>
									Amazon Web Services (AWS) Cloud Clubs Philippines
								</span>

								<div className='qualification_description'>
									<p>Managing internal communications and relationships across AWS Cloud Clubs nationwide, coordinating collaborative projects and knowledge sharing initiatives.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>☁️ Cloud Community Leadership</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>🌐</span>
											<span>National cloud community coordination</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>📊</span>
											<span>Inter-club collaboration programs</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> August 2024 - Present
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Founder and Lead</h3>
								<span className='qualification_degree'>
									Cloud Computing & Technical Leadership
								</span>
								<span className='qualification_subtitle'>
									Amazon Web Services (AWS) Learning Club - España
								</span>

								<div className='qualification_description'>
									<p>Founded and leading the AWS Learning Club at UST España campus, organizing workshops, study sessions, and certification preparation programs for cloud computing enthusiasts.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🚀 Founding Achievements</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>🏗️</span>
											<span>Established new AWS learning community</span>
										</div>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>📚</span>
											<span>Organized cloud computing workshops</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>🎓</span>
											<span>AWS certification study programs</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> August 2024 - Present
								</div>
							</div>

							<div>
								<span className='qualification_rounder active'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder active'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Auditor</h3>
								<span className='qualification_degree'>
									Financial Oversight & Governance
								</span>
								<span className='qualification_subtitle'>
									UST Computer Science Society
								</span>

								<div className='qualification_description'>
									<p>Ensuring financial transparency and accountability within the Computer Science Society, conducting audits and maintaining fiscal responsibility for organizational activities.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>💼 Governance Excellence</h4>
									<div className='achievements_list'>
										<div className='achievement_item special'>
											<span className='achievement_badge'>📋</span>
											<span>Financial audit and compliance</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>⚖️</span>
											<span>Organizational governance oversight</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> July 2024 - Present
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Operations and Analytics Quantum Education Fellow</h3>
								<span className='qualification_degree'>
									Quantum Computing & Data Analytics
								</span>
								<span className='qualification_subtitle'>
									Quantum Society of the Philippines
								</span>

								<div className='qualification_description'>
									<p>Contributed to quantum education initiatives through operations management and data analytics, helping to advance quantum computing literacy in the Philippines.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>⚛️ Quantum Impact</h4>
									<div className='achievements_list'>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🔬</span>
											<span>Quantum education program development</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>📊</span>
											<span>Educational analytics and insights</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> July 2024 - November 2024
								</div>
							</div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Auditor</h3>
								<span className='qualification_degree'>
									Student Governance & Financial Management
								</span>
								<span className='qualification_subtitle'>
									UST ICS Student Council
								</span>

								<div className='qualification_description'>
									<p>Served as auditor for the Institute of Computer Studies Student Council, ensuring transparency in financial operations and supporting student governance initiatives.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🏛️ Student Leadership</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>📊</span>
											<span>Student council financial oversight</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🗳️</span>
											<span>Governance and transparency advocacy</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> May 2023 - May 2024
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Corporate Secretary</h3>
								<span className='qualification_degree'>
									Administrative Leadership & Documentation
								</span>
								<span className='qualification_subtitle'>
									UST Thomasian Gaming Society
								</span>

								<div className='qualification_description'>
									<p>Managed organizational documentation, meeting minutes, and administrative operations for the university's premier gaming organization.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🎮 Gaming Community Leadership</h4>
									<div className='achievements_list'>
										<div className='achievement_item special'>
											<span className='achievement_badge'>📝</span>
											<span>Administrative excellence</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>🎯</span>
											<span>Gaming community management</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> January 2023 - June 2023
								</div>
							</div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Executive Associate to the Auditor</h3>
								<span className='qualification_degree'>
									Financial Support & Administrative Excellence
								</span>
								<span className='qualification_subtitle'>
									UST Computer Science Society
								</span>

								<div className='qualification_description'>
									<p>Provided executive support to the auditor role, assisting in financial reviews, documentation, and ensuring compliance with organizational standards.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>💼 Executive Support</h4>
									<div className='achievements_list'>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>📋</span>
											<span>Financial documentation support</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🤝</span>
											<span>Executive assistance excellence</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> October 2022 - June 2023
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Executive Associate to the Technical Head</h3>
								<span className='qualification_degree'>
									Technical Support & Operations
								</span>
								<span className='qualification_subtitle'>
									UST TOMCAT
								</span>

								<div className='qualification_description'>
									<p>Supported technical operations and initiatives within UST TOMCAT, contributing to technology-focused projects and organizational development.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>⚙️ Technical Excellence</h4>
									<div className='achievements_list'>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🔧</span>
											<span>Technical operations support</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>💻</span>
											<span>Technology project assistance</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> October 2022 - June 2023
								</div>
							</div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Executive Coordinator to the Corporate Secretary</h3>
								<span className='qualification_degree'>
									Coordination & Administrative Support
								</span>
								<span className='qualification_subtitle'>
									UST Thomasian Gaming Society
								</span>

								<div className='qualification_description'>
									<p>Coordinated administrative functions and provided executive support to the Corporate Secretary, ensuring smooth organizational operations.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🎮 Administrative Coordination</h4>
									<div className='achievements_list'>
										<div className='achievement_item special'>
											<span className='achievement_badge'>📋</span>
											<span>Administrative coordination</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> October 2022 - December 2022
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Executive Staff of the Network Promotion Committee</h3>
								<span className='qualification_degree'>
									Network Development & Promotion
								</span>
								<span className='qualification_subtitle'>
									UST Central Student Council
								</span>

								<div className='qualification_description'>
									<p>Contributed to network promotion initiatives within the Central Student Council, helping to build connections and promote university-wide collaboration.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🌐 Network Building</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>🤝</span>
											<span>Inter-organizational networking</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>📢</span>
											<span>Promotion and outreach campaigns</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> August 2022 - May 2023
								</div>
							</div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Technical Head</h3>
								<span className='qualification_degree'>
									Technical Leadership & Innovation
								</span>
								<span className='qualification_subtitle'>
									UST Tiger SHOOT
								</span>

								<div className='qualification_description'>
									<p>Led technical operations and innovations for UST Tiger SHOOT, managing technology infrastructure and driving digital transformation initiatives.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🚀 Technical Leadership</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>💻</span>
											<span>Technical team leadership</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>⚡</span>
											<span>Innovation and digital transformation</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> May 2021 - May 2022
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Executive Staff of the Media Coverages Committee</h3>
								<span className='qualification_degree'>
									Media Production & Communications
								</span>
								<span className='qualification_subtitle'>
									UST Central Student Council
								</span>

								<div className='qualification_description'>
									<p>Managed media coverage and communications for Central Student Council events, producing content and ensuring comprehensive documentation of university activities.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>📸 Media Excellence</h4>
									<div className='achievements_list'>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>📹</span>
											<span>Event coverage and documentation</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>📢</span>
											<span>Communications and media strategy</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> August 2021 - May 2022
								</div>
							</div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Executive Committee Co-Director</h3>
								<span className='qualification_degree'>
									STEM Leadership & Program Management
								</span>
								<span className='qualification_subtitle'>
									UST STEM Society
								</span>

								<div className='qualification_description'>
									<p>Co-directed executive committee operations for the STEM Society, coordinating programs and initiatives to promote science, technology, engineering, and mathematics education.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🔬 STEM Leadership</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>🧪</span>
											<span>STEM program coordination</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>📊</span>
											<span>Executive committee leadership</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> July 2020 - May 2021
								</div>
							</div>
						</div>

						<div className='qualification_data'>
							<div>
								<h3 className='qualification_title'>Secretariat Head of Externals</h3>
								<span className='qualification_degree'>
									External Relations & Partnership Development
								</span>
								<span className='qualification_subtitle'>
									UST Future Scientists Club
								</span>

								<div className='qualification_description'>
									<p>Managed external relations and partnerships for the Future Scientists Club, building connections with other organizations and coordinating collaborative scientific initiatives.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>🔬 Scientific Collaboration</h4>
									<div className='achievements_list'>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🤝</span>
											<span>Inter-organizational partnerships</span>
										</div>
										<div className='achievement_item top-finalist'>
											<span className='achievement_badge'>🧬</span>
											<span>Scientific community building</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> August 2020 - May 2021
								</div>
							</div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
						</div>

						<div className='qualification_data'>
							<div></div>

							<div>
								<span className='qualification_rounder'></span>
								<span className='qualification_line'></span>
							</div>
							<div>
								<h3 className='qualification_title'>Editor-in-Chief</h3>
								<span className='qualification_degree'>
									Editorial Leadership & Content Management
								</span>
								<span className='qualification_subtitle'>
									The Olivarian Oracle
								</span>

								<div className='qualification_description'>
									<p>Led the editorial team of the school publication, overseeing content creation, editorial standards, and publication management while fostering journalistic excellence.</p>
								</div>

								<div className='qualification_achievements'>
									<h4 className='achievements_title'>📰 Editorial Excellence</h4>
									<div className='achievements_list'>
										<div className='achievement_item champion'>
											<span className='achievement_badge'>✍️</span>
											<span>Editorial team leadership</span>
										</div>
										<div className='achievement_item runner-up'>
											<span className='achievement_badge'>📖</span>
											<span>Publication quality management</span>
										</div>
										<div className='achievement_item special'>
											<span className='achievement_badge'>🏆</span>
											<span>Journalistic standards excellence</span>
										</div>
									</div>
								</div>

								<div className='qualification_calendar'>
									<i className='uil uil-calendar-alt'></i> July 2018 - March 2019
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
