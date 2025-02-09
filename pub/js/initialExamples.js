'use strict';

document.head.insertAdjacentHTML('beforeend', "<link rel='stylesheet' type='text/css' href='AdvancedTimeline.css'>");

const timeline1 = new AdvancedTimeline();

const [setup, end] = timeline1.makeTimeline('#container1', false, 'gainsboro',  "SETUP", "FINISHED", '2-3 Months Before Active Event', 'Event Completed!', {'background-color': 'blue', '--box-shadow-color': 'darkgreen'}, {'background-color': 'purple', '--box-shadow-color': 'pink'}, {'background-color': 'darkred', '--box-shadow-color': 'green'})
const promote = timeline1.makeNewPoint("PROMOTE", '4-5 Weeks Before Active Event', {'background-color': 'green', '--box-shadow-color': 'darkgreen'}, {'background-color': 'red', '--box-shadow-color': 'darkred'})
const remind = timeline1.makeNewPoint("REMIND",'1-7 Days Before Active Event') 
const inspire = timeline1.makeNewPoint('INSPIRE', "LIVE Day of Active Event")
const thank = timeline1.makeNewPoint('THANK', "1-3 Days of Active Event") 
const engage = timeline1.makeNewPoint("ENGAGE", "1-3 Days of Active Event")

const point1 = timeline1.makeSubPoint(setup, "Goal 1 (click to see more information)", "Prepare participant, team and sponsor sign-up forms")
timeline1.addAudioToSubPoint(point1, '../bts_butter_feat_megan_thee_stallion_official_visualizer_-1736450934529516850.mp3', "Butter")
timeline1.addTextElementToSubPoint(point1, 'what a lovely day it is today')
timeline1.addAudioToSubPoint(point1, '../bts_butter_feat_megan_thee_stallion_official_visualizer_-1736450934529516850.mp3', "Butter", '', '60', '', 20, {color: 'blue', 'font-size': '15px'})
timeline1.addTextElementToSubPoint(point1, 'what a lovely day it is today', 50, 20, '', '', {'width': '15px', color: 'green'})
timeline1.addImageElementToSubPoint(point1, '../Nonprofit-Fundraising-Timeline.png', '','','','', {width: '30px', height: '50px'})
timeline1.addImageElementToSubPoint(point1, '../Nonprofit-Fundraising-Timeline.png', '','','','', {width: '60px'})
timeline1.addVideoElementToSubPoint(point1, '../video-1596638300.mp4');
timeline1.addVideoElementToSubPoint(point1, 'https://www.youtube.com/embed/WMweEpGlu_U', true);
timeline1.addVideoElementToSubPoint(point1, '../video-1596638300.mp4',false ,'', '', '', '', {width: '200px'});
timeline1.makeSubPoint(setup, "Goal 2 (click to see more information)", "Prepare Peer-to-peer fundraising sign-up form", {'background-color': 'pink', '--box-shadow-color': 'blue'})
timeline1.makeSubPoint(setup, "Goal 3 (click to see more information)", "Mobile number verification")
timeline1.makeSubPoint(setup, "Goal 4 (click to see more information)", "Text-to keywords and short links for social sharing")
timeline1.makeSubPoint(setup, "Goal 5 (click to see more information)", "Participant and donor email confirmations")
timeline1.makeSubPoint(setup, "Goal 6 (click to see more information)", "Instructions for fundraisers (toolkit)")

timeline1.makeSubPoint(remind, "Reminder 1 (click to see more information)", "Participant sign-up deadline")
timeline1.makeSubPoint(remind, "Reminder 2 (click to see more information)", "How many participants have signed up so far")
timeline1.makeSubPoint(remind, "Reminder 3 (click to see more information)", "Top fundraisers and teams so far")
timeline1.makeSubPoint(remind, "Reminder 4 (click to see more information)", "How much left to reach goal")
timeline1.makeSubPoint(remind, "Reminder 5 (click to see more information)", "Date, time and location via text and email (ongoing updates)")
timeline1.makeSubPoint(remind, "Reminder 6 (click to see more information)", "Tips for training")
timeline1.makeSubPoint(remind, "Reminder 7 (click to see more information)", "Out-of-towner donation options")

timeline1.makeSubPoint(promote, "Task 1 (click to see more information)", "Invitations via direct mail, text messaging, email and social media")
timeline1.makeSubPoint(promote, "Task 2 (click to see more information)", "Videos, photos and testimonials showcasing your campaign – participants will use to promote fundraising pages")
timeline1.makeSubPoint(promote, "Task 3 (click to see more information)", "Featured teams and participants")
timeline1.makeSubPoint(promote, "Task 4 (click to see more information)", "Sign-up and donation forms via team captains")

timeline1.makeSubPoint(inspire, "Inspiration 1 (click to see more information)", "Encourage participants via text all day long")
timeline1.makeSubPoint(inspire, "Inspiration 2 (click to see more information)", "Send fundraising goal results via text and email")
timeline1.makeSubPoint(inspire, "Inspiration 3 (click to see more information)", "Send special Instructions to team captains")
timeline1.makeSubPoint(inspire, "Inspiration 4 (click to see more information)", "Instruct everyone to post photos and videos to social all day long with event #hashtag")
timeline1.makeSubPoint(inspire, "Inspiration 5 (click to see more information)", "Show thermometer with all revenue totals and make asks to reach goal")

timeline1.makeSubPoint(engage, "Task 1 (click to see more information)", "Announce upcoming campaign dates and details")
timeline1.makeSubPoint(engage, "Task 2 (click to see more information)", "Share the different ways participants and donors can get involved")
timeline1.makeSubPoint(engage, "Task 3 (click to see more information)", "Internal recap to discuss improvements needed for next campaign")


timeline1.makeSubPoint(thank, "Task 1 (click to see more information)", "Send thank you videos via text, email and social")
timeline1.makeSubPoint(thank, "Task 2 (click to see more information)", "Share the different ways participants and donors can get involved")
timeline1.makeSubPoint(thank, "Task 3 (click to see more information)", "Share photos, videos and highlight reels")
timeline1.makeSubPoint(thank, "Task 4 (click to see more information)", "Post personal thank yous on social media for captains, donors and fundraising participants")
