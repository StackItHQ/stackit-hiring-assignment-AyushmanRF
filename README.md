
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [X] My code's working just fine! 🥳
- [X] I have recorded a video showing it working and embedded it in the README ▶️
- [X] I have tested all the normal working cases 😎
- [X] I have even solved some edge cases (brownie points) 💪
- [X] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section
*Add your video here, and your approach to the problem (optional). Leave some comments for us here if you want, we will be reading this :)*

**Video**



https://github.com/StackItHQ/stackit-hiring-assignment-AyushmanRF/assets/84237760/97395095-d2a6-4bf2-b4c2-a9b0b9fa353e

https://github.com/StackItHQ/stackit-hiring-assignment-AyushmanRF/blob/main/Nowstackit%20Challenge%20Video.mp4



**My Approach**

Upon reviewing the problem statement, I quickly realized the potential of employing extension scripting for the task. My research led me to "Apps Scripts Services," a versatile platform that facilitates the creation of web applications and seamless integration with Google Workspaces.

For any project, my initial priority is to lay down the basic functionalities. Once those are robust and functional, I then shift my focus towards enhancing the user experience through intuitive design and usability improvements.

For this particular project, I meticulously followed an iterative testing approach. After implementing each phase, I made sure to rigorously test and refine it before progressing.

**Planning & Execution**

1. **Functionality Identification (Including Brownie points):** 
   - Drag-and-drop feature for CSV files.
   - Option to select specific columns for import.
   - Data filtering prior to import.
   - Choice of data destination: appending to existing data or creating a new sheet.
   - Efficient processing of large files.

2. **Detailed Implementation:** 
   - **User Interface:** Crafted a interface within a sidebar for interactive engagement.
   - **Data Upload:** Added feature for drag and drop within the sidebar.
   - **Data Parsing:** Extracted relevant data from the CSV and introduced a feature for column selection.
   - **Data Filtering:** Developed a mechanism allowing data to be filtered by both column and specific values.
   - **Sheet Selection:** Listed out all existing sheets and incorporated an option to create a new one as per user preference.
   - **Data Import:** Devised a method for seamlessly transferring data to Google Sheets.

Finally, once all functionalities were in place and met the specifications provided in the problem statement, I enhanced the UI by integrating CSS, focusing on both aesthetics and user-friendly design.
