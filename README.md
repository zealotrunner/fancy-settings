# [fancy settings](https://github.com/frankkohlhepp/fancy-settings)
*Create fancy, chrome-look-alike settings for your Chrome or Safari extension in minutes!*

### About
Welcome to fancy settings! Are you ready for tabs, groups, search, good style?  
Let's get started, it takes only a few minutes...

### Howto
Download fancy settings, unzip the download and your good to go!

You can open the index.html file as-is and take a look what the result will look like.  
Now, let's get your own settings in there...

There are three files that are interesting for you:

* manifest.js
* icon.png
* settings.js

If you just want to get some settings without any customization, you can just edit the manifest.json file and change the icon.  
The manifest.json file includes samples of all available settings, so you can see how it works and edit it to fit your needs.

But if you want to customize, you have two options:

1. You can use the manifest to generate your settings and customize it in the settings.js file.
2. Or you can programmatically create your settings in the settings.js file and customize it right away.

To see how you can access the generated settings from the manifest, take a look at the settings.js file.

#### Create your settings programmatically
To create settings programmatically, you need a hashtable, specifying some parameters, called "params".

    {
        "name": "button1",
        "type": "button",
        "label": "Describe the action:",
        "text": "Go"
    }

It's similar to the part of the manifest were you specify a setting (shown above), but with two differences:

* The type is *never* included
* The name is not *always* included

The name is used by the setting creator to save what the user chose, so it's not needed for the types "description", and "button".  
But the manifest generator uses the name also to save the generated setting, so you can access it later on.

Here's how you can create a setting:

    var settings = new FancySettings("My Extension");
    
    settings.create("tabName", "groupName", "type", {
        // params
    });

If you save the created setting in a variable, you can call the methods get() and set() on it, and add event listeners:

    var settings = new FancySettings("My Extension");
    
    var checkbox = settings.create("tabName", "groupName", "checkbox", {
        "name": "checkbox1",
        "label": "Enable this"
    });
    
    checkbox.get();
    => false
    
    checkbox.set(true);
















