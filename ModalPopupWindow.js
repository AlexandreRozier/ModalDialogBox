
// The modalPopupWindow function
alert = function () {

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
    document.write(this.defaultAppearance);

    // Retrieves the main components of the ModalDialog
    this.overlay = document.getElementById('window-overlay');
    this.container = document.getElementById('window-container');
    this.actionBar = document.getElementById('window-actionBar');
    this.content = document.getElementById('window-content');
    this.footer = document.getElementById('window-footer');
    this.container = document.getElementById('window-container');


    /******************
    Function definition
     ******************/


    /**
     * Centers and sets the window to its default size
     * @returns {setDefaultSize}
     */
    function setDefaultSize() {

        // Sets the overlay
        self.overlay.style.position = "absolute";
        self.overlay.style.left = 0+'px';
        self.overlay.style.right = 0+'px';
        self.overlay.style.bottom = 0+'px';
        self.overlay.style.top = 0+'px';
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
        self.container.style.marginTop = window.innerHeight/2- (self.container.offsetHeight)/2+"px";

    }

    /**
     * Adds a button to the footer, can be called several times
     * @param buttonId
     * @param text
     * @param triggeredFunction
     * @returns {Element}
     */
    function addButton(buttonId,text,triggeredFunction) {


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
        btn.style.borderTopLeftRadius = 4+"px";
        btn.style.borderTopRightRadius = 4+"px";
        btn.style.borderBottomRightRadius = 4+"px";
        btn.style.borderBottomLeftRadius = 4+"px";

        // Adds nice hover effect
        btn.onmouseover = function() {
            self.style.backgroundColor = defaultHoveredColor
        };
        btn.onmouseout = function() {
            self.style.backgroundColor = defaultColor
        };

        // Sets the border
        btn.style.border = "1px solid rgb(165,165,165)";

        // Finally adds the button to the html page
        self.footer.appendChild(btn);

        console.log(self);
    }

    /**
     * Removes a button given its ID
     * @param buttonId
     */
    function removeButton(buttonId) {
        var self = document.getElementById(buttonId);
        self.parentNode.removeChild(self);
        return document.getElementById('window-overlay');
    }
    /**
     * Adds some CSS effects
     */
    function prettify() {

        // Rounds the corners
        self.container.style.borderBottomLeftRadius =  6 + "px";
        self.container.style.borderBottomRightRadius =  6 + "px";
        self.container.style.borderTopLeftRadius =  6 + "px";
        self.container.style.borderTopRightRadius =  6 + "px";

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

        self.container.style.fontFamily =  "Quicksand";
        self.actionBar.style.fontFamily =  "Quicksand 700";

    }

    /**
     * Dismisses the ModalDialogBox
     */
    function dismissDialog() {
        var self = document.getElementById('window-overlay');
        self.parentNode.removeChild(self);
        return document.getElementById('window-overlay');
    }

    function showDialog() {
        document.write(self.defaultAppearance);

    }

    /*****************
     The script itself
     *****************/
    setDefaultSize();
    prettify();
    addButton("positiveBtn","OK");
    addButton("negativeBtn","Cancel", dismissDialog());


};












