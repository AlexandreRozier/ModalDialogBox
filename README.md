#ModalDialogBox

This library provides a modal dialog box, overriding the well-known Window.alert() function.

To begin with, you just have to include this lib via a `<script>` tag :

```javascript
<script src="ModalPopupWindow.js" type="text/javascript"></script>
<script type="text/javascript">
    alert();
</script>
```

The main features are :

1. Adding and removing buttons
2. Customize completely each component (color, background, text, ...)
3. Adding special actions to the buttons clicks
4. Adding callback functions triggered when the dialog is dismissed

Customizing the ModalDialog is really simple, all you have to do is chain the modification methods, as follows :

```javascript
    alert().setActionBarText("My custom title")
            .setContentText("Very interesting content")
            .addButton("My Button", "Click me !", myCallBackFunction)
            .setContentColor("#949A9C")
```


I hope this will give you a hand ! It is under the MIT license, so feel free to use it.
