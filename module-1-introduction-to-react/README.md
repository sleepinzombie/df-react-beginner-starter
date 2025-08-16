## Demo: Creating a New React App with Vite

To start a new React project using the latest Vite:

1. **Install Vite (if not already installed):**

   ```sh
   npm create vite@latest my-react-app -- --template react
   cd my-react-app
   npm install
   npm run dev
   ```

2. **Project Structure:**

   - `src/components/Header.jsx`
   - `src/components/Footer.jsx`
   - `src/components/Content.jsx`

3. **Create Components:**

   - **Header.jsx**
     ```jsx
     export default function Header() {
       return (
         <header>
           <h1>My React App</h1>
         </header>
       );
     }
     ```
   - **Footer.jsx**
     ```jsx
     export default function Footer() {
       return (
         <footer>
           <p>&copy; 2025 My React App</p>
         </footer>
       );
     }
     ```
   - **Content.jsx**
     ```jsx
     export default function Content() {
       return (
         <main>
           <p>Hello World!</p>
         </main>
       );
     }
     ```

4. **Use Components in App.jsx:**

   ```jsx
   import Header from "./components/Header";
   import Footer from "./components/Footer";
   import Content from "./components/Content";

   function App() {
     return (
       <>
         <Header />
         <Content />
         <Footer />
       </>
     );
   }
   export default App;
   ```

5. **Run the App:**
   - Use `npm run dev` to start the development server and view your app in the browser.

---

This setup will help you get started quickly for the React Beginner training.
