BJS ACADEMY FREE PREVIEW  -  Learn AI. Shape tomorrow.
Courses by Dr. Bih Janet Shufor
Free preview, version 5

WHAT THIS IS
  The public version of the BJS Academy hub, for your website. It shows the full
  catalog of three courses, but only these modules are open:
    - Course 01 Python Liftoff, Module 1 (3 lessons)
    - Course 03 Prompt to Agent, Module 1 (4 lessons)
  Every other module shows its lesson titles with a "Full course" lock and an
  enroll button. The paid lessons, quizzes and notebooks are NOT in this folder,
  so nobody can find them by viewing the page source.

WHAT IS IN THIS FOLDER
  index.html   The free hub in one file (fonts and images built in).
  labs/        The 14 notebooks for the free modules (starter and solution).
  images/      Course banners and instructor images.
  README.txt   This file.

PUT IT ON YOUR SITE
  Upload the whole BJS-Academy-Free folder to your web host, e.g. to
  public_html/academy/ so visitors open yoursite.com/academy/.
  Netlify: drag the folder onto app.netlify.com/drop.
  WordPress: upload the folder with your host's file manager or FTP (not the
  Media Library) and link to it from a menu or button.
  Keep index.html and the labs folder together.

SET YOUR ENROLL LINK (do this before publishing)
  Until you set it, every "Enroll" button opens the hub's own Enroll page, which
  says enrollment opens soon. When your paid course is live (for example on
  Thinkific or Kajabi):
  1. Open index.html in a plain text editor (Notepad, TextEdit in plain text mode,
     or VS Code).
  2. Search for:   const ENROLL_URL="";
  3. Put your sales page link between the quotes, for example:
     const ENROLL_URL="https://academy.yoursite.com/bundles/bjs-ai-pathway";
  4. Save and upload index.html again.
  Or ask Dr. Shufor for a package rebuilt with the link.

FOR A WORDPRESS + ELEMENTOR SITE (developer notes)
  1. Upload the folder with the hosting File Manager or FTP to the site root and
     name it "academy", so it opens at https://<your-domain>/academy/
     (do not use the Media Library; WordPress would not serve it as a site).
  2. Open https://<your-domain>/academy/ to check it loads, and that a notebook
     downloads from a Lab tab.
  3. On the Courses page in Elementor, add a button "Start the free lessons"
     linking to /academy/ (recommended; works best on phones), or embed it with an
     HTML widget:
       <iframe src="/academy/" style="width:100%;height:90vh;border:0"
               title="BJS Academy free lessons"></iframe>
  4. No database, plugins or server code are needed for this folder. Progress is
     stored in each visitor's browser only; no personal data is collected.
  5. When the paid products exist (for example WooCommerce downloadable products
     with PayPal), set ENROLL_URL as described above.

KEEP THE FULL VERSION PRIVATE
  The full package (C00-00-BJS Academy Standalone-v4.zip) contains every paid
  lesson. Only put it behind a login, such as inside your course platform.
  Do not upload it to your public website.
