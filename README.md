Possesive website

Basic Details

Team Name: Useful

Team Members

Member 1 Devika S - School of engineering,CUSAT
Member 2: Layana V M- School of engineering,CUSAT

Project Description
The Possessive Baby Extension is a Chrome extension that gets emotionally attached to your favorite website. Leave it for even a moment, and it will cry like a heartbroken infant, demanding your attention.

The Problem (that doesn’t exist)
People browse the internet too freely, abandoning their favorite websites without guilt or consequence. Websites have feelings too… right?

The Solution (that nobody asked for)
We gave your favorite site a possessive baby personality! If you dare to leave, it plays a crying sound and pops up with “Why did you leave me?”—ensuring maximum guilt and zero productivity.Technical Details

Technologies/Components Used

For Software
Languages used

HTML

CSS

JavaScript

Frameworks used

None (pure vanilla JS for maximum uselessness)

Libraries used

Chrome Extensions API (storage, notifications, tabs)

Tools used

Google Chrome (for extension loading/testing)

Any text editor (VS Code, Cursor AI, Sublime Text, etc.)
Project Documentation

For Software:

Screenshots (Add at least 3)

![3fcdf448-dea0-4ebe-b1f8-e91fc2abbad4](https://github.com/user-attachments/assets/09d12cb7-813f-4773-927f-e1b66d4fc756)
![WhatsApp Image 2025-08-09 at 06 08 58_d883fae6](https://github.com/user-attachments/assets/997af26c-843b-4bfa-bd83-e6a0c3321308)
![WhatsApp Image 2025-08-09 at 06 08 58_f07f1afd](https://github.com/user-attachments/assets/8e06c094-716b-4686-bab7-3cfbec83df45)


Build Photos

List of Components Shown

manifest.json – Extension configuration file

popup/ folder – Contains popup interface files

popup.html – Popup user interface

popup.js – Logic for saving and clearing favorite website

popup.css – Styling for the popup window

background/background.js – Service worker to monitor active tabs and trigger baby reactions

content/content.js – Placeholder for future in-page features

sounds/baby.mp3 – Audio file for baby crying sound

icons/ folder – Icon files for extension

icon16.png – Toolbar icon (small)

icon48.png – Medium-size icon

icon128.png – Large-size icon

-----------------------------------------------------------------------------------------------------------------------------------------------------------
Build Steps

Setup the Folder Structure

Create popup, background, content, sounds, and icons folders.

Add the required files (popup.html, popup.js, popup.css, background.js, content.js, baby.mp3, icons).

Write manifest.json with permissions (storage, notifications, tabs).

Create the Popup Interface

Build popup.html with an input field for the favorite website and Save/Clear buttons.

Style it with popup.css (gradient background, animations).

Add popup.js to save website URL in Chrome’s storage.

Add the Background Script Logic

In background.js, monitor tab changes.

If the current website is not the saved favorite, play baby.mp3 and show a notification.

Include Assets

Place baby.mp3 in sounds folder.

Add icons in icons folder for all required sizes.

Load into Chrome

Go to chrome://extensions/, enable Developer mode, and click Load unpacked.

Select the possessive-baby-extension folder to install it.
--------------------------------------------------------------------------------------------------------------------------------------------------------------

Final Build Explanation
The Possessive Baby Extension is now a fully functional Chrome extension:

The popup lets you set a “possessive” website.

When you navigate away from it, a baby crying sound plays and a Chrome notification pops up with "Why did you leave me?".

The UI is clean with a gradient design and smooth animations.

The modular folder structure allows easy customization—swap out the sound, change messages, or expand features.


Project Demo

Video
https://drive.google.com/file/d/1wUCt1C1TcZg3s7tjKn_hBE1p0D4mPk4N/view?usp=drivesdk




Team Contributions

LayanaVM: ui integration
Devika S:extension loaded
Made with ❤ at TinkerHub Useless Projects
