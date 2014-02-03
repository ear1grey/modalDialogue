# modalDialogue
This code displays a [modal dialogue][modal] in front of an existing web page.
It takes a URL as a parameter which is the address of the content to show within the dialogue.
The dialogue closes when clicked.  Suggestions and improvements are most welcome.

## Example: http://ear1grey.github.io/modalDialogue/

## Use
The `modalDialogue` object has two public functions, `open` and `close`.

###open
The open function takes one parameter, the URL of the content that should be shown within the modal dialogue.
e.g. `modalDialogue.open("http://example.org/");`

###close
The close function takes no parameters.  It removes the modal dialogue from display.
e.g. `modalDialogue.close();`

## License
Free Software: see [license.txt][license]
Copyright (c) 2011 Rich Boakes

[license]: license.txt "MIT License (GPL v3 compatible)
[modal]: http://example.com/  "Modal Dialogue explained on Wikipedia"
  
