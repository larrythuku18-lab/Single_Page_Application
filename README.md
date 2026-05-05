📖 How to Use
Adding a Project
Locate the "Add New Project" form.

Type in a Title (e.g., "Learn React").

Add a Description (e.g., "Build a dashboard with hooks").

Click Create Project. Your new project will instantly appear in the list below.

Searching Projects
Use the Search Bar at the top.

Start typing any part of a project title.

The list will filter automatically as you type—no need to hit enter!

🏗️ How it Works (The Logic)
App.jsx: The "Control Center." It holds the main list of projects.

Data Flow: When you add a project in the form, it sends that data "up" to the App. The App then sends the updated list "down" to the List component.

Search: The search bar tells the App what you are looking for, and the App calculates which projects to show based on that text.

🛠️ Built With
React: For the interface logic.

Tailwind CSS: For the styling and layout.

Vite: For the lightning-fast development environment.
