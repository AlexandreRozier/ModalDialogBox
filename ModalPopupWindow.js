/*
 * Author : Alexandre Rozier
 */


/**
 * This function overrides the default Window.alert() function and allows the user to customize
 * easily the appearance of the window.
 */
function alert () {
    /********************
     Variables definition
     ********************/
    var self = this;
    this.defaultPadding = 15 + "px";
    this.defaultButtonPadding = 5 + "px";
    this.defaultButtonSidePadding = 10 + "px";
    this.defaultButtonMargin  = 10 + "px";
    this.defaultLineHeight = 20 + "px";
    this.defaultAppearance =
        '<div id= "window-overlay">' +
        '<div id="window-container" style="background-color: white">' +
        '<div id="window-actionBar" >' +
        'Custom ModalDialogBox' +
        '</div>' +
        '<div id="window-content">' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, magna ut interdum lobortis, odio arcu ultrices neque, id porta sapien justo sit amet erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum in tellus nec erat feugiat elementum id eget enim. Fusce a lectus tempus, volutpat erat vel, pharetra nunc' +
        '</div>' +
        '<div id="window-footer">' +
        '</div>'+
        '</div>' +
        '</div>';

    // Used to write the DialogBox html content, so that we can retrieve it
    var modalWindow = document.createElement("div");
    modalWindow.innerHTML =this.defaultAppearance;
    document.body.insertBefore(modalWindow,document.body.firstChild);

    // Retrieves the main components of the ModalDialog
    this.overlay = document.getElementById('window-overlay');
    this.container = document.getElementById('window-container');
    this.actionBar = document.getElementById('window-actionBar');
    this.content = document.getElementById('window-content');
    this.footer = document.getElementById('window-footer');


    /********************
     Functions definition
     ********************/


    /**
     * Centers and sets the window to its default size
     * @returns {alert}
     */
    this.setDefaultSize = function () {

        // Sets the overlay
        self.overlay.style.position = "absolute";
        self.overlay.style.left = 0 + 'px';
        self.overlay.style.right = 0 + 'px';
        self.overlay.style.bottom = 0 + 'px';
        self.overlay.style.top = 0 + 'px';
        self.overlay.style.backgroundColor = "rgba(210,210,210,0.8)";

        //Sets the padding and line heights
        self.content.style.lineHeight = self.defaultLineHeight;
        self.content.style.padding = self.defaultPadding;

        self.actionBar.style.lineHeight = self.defaultLineHeight;
        self.actionBar.style.padding = self.defaultPadding;

        self.footer.style.lineHeight = self.defaultLineHeight;
        self.footer.style.padding = self.defaultPadding;

        // Sets the container dimensions
        self.container.style.width = window.innerWidth / 3 + "px";
        self.container.style.zIndex = 1000;
        self.container.style.margin = "auto";
        self.container.style.marginTop = window.innerHeight / 2 - (self.container.offsetHeight) / 2 + "px";
        return self;

    };

    /**
     * Adds a button to the footer, can be called several times
     * @param buttonId
     * @param text
     * @param triggeredFunction
     */
    this.addButton = function (buttonId, text, triggeredFunction) {
        // Sets the defaultColor for the button
        var defaultColor = "rgb(255,255,255)";
        var defaultHoveredColor = "rgb(225,225,225)";

        // Creates the button with the given text and listener
        var btn = document.createElement("A");
        var t = document.createTextNode(text);
        btn.addEventListener('click', triggeredFunction);
        btn.appendChild(t);

        // Adds the id
        btn.id = buttonId;

        // Adds some CSS effects to the button
        btn.style.padding = self.defaultButtonPadding;
        btn.style.paddingLeft = self.defaultButtonSidePadding;
        btn.style.paddingRight = self.defaultButtonSidePadding;
        btn.style.marginLeft = self.defaultButtonMargin;

        // Sets the background color
        btn.style.backgroundColor = defaultColor;

        // Rounds the corners
        btn.style.borderTopLeftRadius = 4 + "px";
        btn.style.borderTopRightRadius = 4 + "px";
        btn.style.borderBottomRightRadius = 4 + "px";
        btn.style.borderBottomLeftRadius = 4 + "px";

        // Adds nice hover effect
        btn.onmouseover = function () {
            btn.style.backgroundColor = defaultHoveredColor
        };
        btn.onmouseout = function () {
            btn.style.backgroundColor = defaultColor
        };

        // Sets the border
        btn.style.border = "1px solid rgb(165,165,165)";

        // Finally adds the button to the html page
        self.footer.appendChild(btn);
        return self;

    };

    /**
     * Removes a button given its ID
     * @param buttonId
     */
    this.removeButton = function (buttonId) {
        var self = document.getElementById(buttonId);
        self.parentNode.removeChild(self);
        return self;

    };
    /**
     * Adds some CSS effects
     */
    this.prettify = function () {

        // Rounds the corners
        self.container.style.borderBottomLeftRadius = 6 + "px";
        self.container.style.borderBottomRightRadius = 6 + "px";
        self.container.style.borderTopLeftRadius = 6 + "px";
        self.container.style.borderTopRightRadius = 6 + "px";
        self.container.style.overflow = "hidden";

        // Adds margins
        self.actionBar.style.borderBottomColor = "rgb(229,229,229)";
        self.actionBar.style.borderBottomStyle = "solid";
        self.actionBar.style.borderBottomWidth = "1px";

        self.footer.style.borderTopColor = "rgb(229,229,229)";
        self.footer.style.borderTopStyle = "solid";
        self.footer.style.borderTopWidth = "1px";

        // Sets the text orientation
        self.footer.style.textAlign = "right";

        // Sets the title text size
        self.actionBar.style.fontSize = "18px";

        // Loads a nice font (it is perfectly supported to have several <style> tags in the html <head>)
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);

        self.container.style.fontFamily = "Quicksand";
        self.actionBar.style.fontFamily = "Quicksand 700";
        return self;
    };

    this._init = function (actionBarText, contentText, overlayBackgroundColor, actionBarBackgroundColor, contentBarBackgroundColor, actionBarColor, contentColor) {
        this.setActionBarText(actionBarText);
        this.setContentText(contentText);
        this.setOverlayBackgroundColor(overlayBackgroundColor);
        this.setActionBarBackgroundColor(actionBarBackgroundColor);
        this.setContentBackgroundColor(contentBarBackgroundColor);
        this.setActionBarColor(actionBarColor);
        this.setContentColor(contentColor);
        return self;
    };

    /************************************************************
     * Less interesting functions, used to style the dialog box *
     ************************************************************/

    /**
     * Shows the ModalDialogBox
     */
    this.showDialog = function (yourTriggeredFunction) {
        self.overlay.style.display = "block";
        yourTriggeredFunction();
        return self;
    };

    /**
     * Dismisses the ModalDialogBox
     */
    this.dismissDialog = function (yourCallBackFunction) {
        self.overlay.style.display = "none";
        yourCallBackFunction();
        return self;

    };

    /**
     * Sets the Overlay backrgound color
     */
    this.setOverlayBackgroundColor = function (color) {
        self.overlay.style.backgroundColor = color;
        return self;

    };

    /**
     * Sets the ActionBar background color
     * @param color
     */
    this.setActionBarBackgroundColor = function (color) {
        self.actionBar.style.backgroundColor = color;
        return self;
    };

    /**
     * Sets the Content background color
     * @param color
     */
    this.setContentBackgroundColor = function (color) {
        self.content.style.backgroundColor = color;
        return self;

    };

    /**
     * Sets the Footer background color
     * @param color
     */
    this.setFooterBackgroundColor = function (color) {
        self.footer.style.backgroundColor = color
        return self;
    };

    /**
     * Sets the ActionBar text color
     * @param color
     */
    this.setActionBarColor = function (color) {
        self.actionBar.style.color = color
        return self;

    };

    /**
     * Sets the Content text color
     * @param color
     */
    this.setContentColor = function (color) {
        self.content.style.color = color;
        return self;

    };

    /**
     * Sets the Footer text color
     * @param color
     */
    this.setFooterColor = function (color) {
        self.footer.style.color = color;
        return self;

    };

    /**
     * Sets the ActionBar text
     * @param text
     */
    this.setActionBarText = function (text) {
        self.actionBar.innerHTML = text;
        return self;

    };

    this.setContentText = function (text) {
        self.content.innerHTML = text;
        return self;

    };


    /*****************
     The script itself
     *****************/
    this.setDefaultSize()
        .prettify()
        .addButton("positiveBtn","OK",dismissDialog)
        .addButton("negativeBtn","Cancel",dismissDialog);

    return self;
}













