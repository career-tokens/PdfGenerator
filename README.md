<h1 align="center" id="title">PDFternity</h1>

<p id="description">A full stack app where you will get free PDF templates make as many changes as you want and generate the PDF to download it!</p>
<br/>
<h2>🎬 Video Demo</h2>

[https://res.cloudinary.com/dxprcmmcz/video/upload/v1711619244/2024-03-28\_15-02-55\_p0m3fi.mkv](https://res.cloudinary.com/dxprcmmcz/video/upload/v1711619244/2024-03-28_15-02-55_p0m3fi.mkv)
<br/><br/>
<h2>📦Project Screenshots:</h2><br/>


### Step 1: Choose a template and find what changes need to be made<br/><br/>
![Screenshot Capture - 2024-03-28 - 15-27-57](https://github.com/career-tokens/PdfGenerator/assets/134730030/ec4f6c4c-8f21-4507-8d6a-97993f575e6a)<br/><br/>

### Step 2:Make the change like here I have changed the name<br/><br/>
![Screenshot Capture - 2024-03-28 - 15-30-10](https://github.com/career-tokens/PdfGenerator/assets/134730030/7df7b436-be2c-49f6-8e26-f139f4ea3eb2)
<br/><br/>

### Step 3:Click on generate button and view the preview and if its all good , download it!<br/><br/>
![Screenshot Capture - 2024-03-28 - 15-34-19](https://github.com/career-tokens/PdfGenerator/assets/134730030/266b1eab-6ff8-4e83-a56a-de60226fd4af)
<br/><br/>

  
<h2>💻 Built with</h2>

Technologies used in the project:

*   NextJS
*   TailwindCSS
*   OneDoc API<br/><br/>
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Built with latest technologies like NextJS TailwindCSS.
*   Cool Landing Page made using Aceternity UI.
*   Currently features three awesome PDF templates:Detailed CV Airbnb Receipt and Invoice
*   Make as many changes as you want !
*   Responsive app view the proper PDF layout even on mobile
*   Finally generate the PDF and download it!
*   Built on top of Onedoc API a super cool tool to convert code to PDF.<br/><br/>
<h2>📚 Working of the app</h2>
*  A template page will have two parts: one is the actual template and the other is the form which will help in making changes to the template. We will have an intial state variable  which will store the data for the pdf. We will additionally make a functional component for the template and while calling it in the page pass the data as props so that the data used for the template remains dynamic . We will also make a form in the page using which we will make changes to the state and that will cause re-render and hence the props for the component too will change and hence the template will keep getting updated. <br/><br/>
* Now once the user is finished , Generate button will be clicked which will do two things:i) store the data and the template currently being used in the local storage of the browser ii) redirect the user to viewPDF page.<br/><br/>
* As soon as the viewPDF page gets loaded , the useEffect hook runs (being made to run only intially when the component loads) , a POST call is made to the backend server's api (at "/api/v1/getPDF") where the template and data is passed as requestbody (server won't be able to access localstorage so we will need to pass it from the client side) .<br/><br/>
* In the controller of the api , we call the OneDocPdf component and pass the data and template info to it.<br/><br/>
* In the OneDocPdf Component we call that specific component which matches teh template and returns its JSX prepared using the data which was passed to it as props. The JSX gets wrapped with Tailwind from @onedoc/react-print so that the tailwind classes remain active in their server. The resulting JSX is compiled into html and css using compile function and it is sent to onedoc server for conversion into pdf data (this thing happens internally and implemented using onedoc.render. That data is sent back to the client .<br/><br/>
* After the pdf data is received , the corresponding PDF gets displayed removing the loading screen.<br/><br/><br/>
<h2>🛠️ Installation Steps:</h2><br/>

<p>1. Clone the project</p>

```
git clone https://github.com/career-tokens/pdfGenerator
```
<br/>
<p>2. Go to the project directory</p>

```
cd pdfGenerator
```
<br/>
<p>3. Install dependencies</p>

```
npm install
```
<br/>
<p>4.Create .env file according to .env.example and make sure to put corresponding values to the environment variables.
Collect OneDoc API from their website</p>

<p>5. Run the server:</p>

```
npm run dev
```


  
  
