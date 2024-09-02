const messages = document.querySelector('.messages');
const userMsg = document.querySelector('#userMsg');


const responses = {
    "a": `Defines a hyperlink.
Example:
<a href='https://www.example.com'>Visit Example</a>`,

    "abbr": `Defines an abbreviation or acronym.
Example:
<abbr title='Hypertext Markup Language'>HTML</abbr>`,

    "address": `Defines contact information for the author/owner of a document.
Example:
<address>
    <p>John Doe</p>
    <p>123 Main St</p>
    <p>City, State, ZIP</p>
</address>`,

    "area": `Defines an area inside an image map.
Example:
<img src='map.jpg' usemap='#image-map'>
<map name='image-map'>
    <area shape='rect' coords='34,44,270,350' href='https://www.example.com' alt='Example'>
</map>`,

    "article": `Defines independent, self-contained content within a document.
Example:
<article>
    <h2>Article Title</h2>
    <p>This is an article.</p>
</article>`,

    "aside": `Defines content related to the main content, like sidebars.
Example:
<aside>
    <h3>Related Content</h3>
    <p>Here's some related content.</p>
</aside>`,

    "audio": `Defines embedded sound content.
Example:
<audio controls>
    <source src='audio.mp3' type='audio/mp3'>
    Your browser does not support the audio element.
</audio>`,

    "b": `Defines bold text.
Example:
<b>This text is bold.</b>`,

    "base": `Specifies the base URL and/or target for all relative URLs in a document.
Example:
<base href='https://www.example.com/'>`,

    "bdi": `Isolates a part of text that might be formatted in a different direction.
Example:
<p>Text with <bdi>potentially different direction</bdi> text.</p>`,

    "bdo": `Overrides the current text direction.
Example:
<p>Text in <bdo dir='rtl'>right-to-left</bdo> direction.</p>`,

    "blockquote": `Defines a section quoted from another source.
Example:
<blockquote>
    <p>This is a blockquote.</p>
</blockquote>`,

    "body": `Defines the document's body.
Example:
<body>
    <h1>Page Title</h1>
    <p>This is a paragraph.</p>
</body>`,

    "br": `Inserts a single line break.
Example:
<p>Line 1<br>Line 2</p>`,

    "button": `Defines a clickable button.
Example:
<button>Click Me</button>`,

    "canvas": `Defines a drawing area for graphics using JavaScript.
Example:
<canvas id='myCanvas' width='200' height='200'></canvas>
<script>
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);
</script>`,

    "caption": `Defines a table caption.
Example:
<table>
    <caption>Table Caption</caption>
    <tr>
        <th>Header</th>
    </tr>
</table>`,

    "cite": `Defines the title of a work for citation purposes.
Example:
<cite>The Great Gatsby</cite>`,

    "code": `Defines a fragment of computer code.
Example:
<code>console.log('Hello, World!');</code>`,

    "col": `Specifies column properties for a <colgroup> element.
Example:
<table>
    <colgroup>
        <col style='background-color: #f00'>
        <col style='background-color: #0f0'>
    </colgroup>
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
</table>`,

    "colgroup": `Groups one or more columns in a table for formatting.
Example:
<table>
    <colgroup>
        <col span='2' style='background-color: #f00'>
    </colgroup>
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
    </tr>
</table>`,

    "data": `Links a piece of content with a machine-readable equivalent.
Example:
<data value='123'>Content</data>`,

    "datalist": `Specifies a list of pre-defined options for input controls.
Example:
<input list='browsers' name='browser'>
<datalist id='browsers'>
    <option value='Chrome'>
    <option value='Firefox'>
    <option value='Safari'>
</datalist>`,

    "dd": `Defines a description or value in a description list.
Example:
<dl>
    <dt>Term</dt>
    <dd>Description</dd>
</dl>`,

    "del": `Defines text that has been deleted from a document.
Example:
<p>This is <del>deleted text</del>.</p>`,

    "details": `Defines additional details that the user can view or hide.
Example:
<details>
    <summary>More Info</summary>
    <p>Here are some details.</p>
</details>`,

    "dfn": `Defines a definition term.
Example:
<p><dfn>HTML</dfn> stands for Hypertext Markup Language.</p>`,

    "dialog": `Defines a dialog box or window.
Example:
<dialog open>
    <p>This is a dialog.</p>
    <button onclick='this.closest("dialog").close()'>Close</button>
</dialog>`,

    "div": `Defines a division or section in a document.
Example:
<div>
    <h2>Section Title</h2>
    <p>Content here.</p>
</div>`,

    "dl": `Defines a description list.
Example:
<dl>
    <dt>Term 1</dt>
    <dd>Description 1</dd>
    <dt>Term 2</dt>
    <dd>Description 2</dd>
</dl>`,

    "dt": `Defines a term/name in a description list.
Example:
<dl>
    <dt>Term</dt>
    <dd>Description</dd>
</dl>`,

    "em": `Defines emphasized text.
Example:
<p>This is <em>emphasized</em> text.</p>`,

    "embed": `Embeds external content.
Example:
<embed src='movie.mp4' width='300' height='200'>`,

    "fieldset": `Groups related elements in a form.
Example:
<fieldset>
    <legend>Personal Information</legend>
    <label for='name'>Name:</label>
    <input type='text' id='name'>
</fieldset>`,

    "figcaption": `Defines a caption for a <figure> element.
Example:
<figure>
    <img src='image.jpg' alt='Image'>
    <figcaption>Image caption</figcaption>
</figure>`,

    "figure": `Specifies self-contained content, often with a caption.
Example:
<figure>
    <img src='image.jpg' alt='Image'>
    <figcaption>Image caption</figcaption>
</figure>`,

    "footer": `Defines the footer of a document or section.
Example:
<footer>
    <p>Footer content</p>
</footer>`,

    "form": `Defines an HTML form for user input.
Example:
<form>
    <label for='name'>Name:</label>
    <input type='text' id='name'>
    <button type='submit'>Submit</button>
</form>`,

    "h1": `Defines the most important heading.
Example:
<h1>Main Heading</h1>`,

    "h2": `Defines the second most important heading.
Example:
<h2>Sub Heading</h2>`,

    "h3": `Defines the third most important heading.
Example:
<h3>Sub-sub Heading</h3>`,

    "h4": `Defines the fourth most important heading.
Example:
<h4>Heading Level 4</h4>`,

    "h5": `Defines the fifth most important heading.
Example:
<h5>Heading Level 5</h5>`,

    "h6": `Defines the sixth most important heading.
Example:
<h6>Heading Level 6</h6>`,

    "head": `Contains metadata/information about the document.
Example:
<head>
    <title>Page Title</title>
    <link rel='stylesheet' href='styles.css'>
</head>`,

    "header": `Defines the header of a document or section.
Example:
<header>
    <h1>Site Header</h1>
</header>`,

    "hr": `Defines a thematic change in the content.
Example:
<p>Text before the line.</p>
<hr>
<p>Text after the line.</p>`,

    "html": `Defines the root of an HTML document.
Example:
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>`,

    "i": `Defines italic text.
Example:
<p>This is <i>italic</i> text.</p>`,

    "iframe": `Defines an inline frame.
Example:
<iframe src='https://www.example.com' width='600' height='400'></iframe>`,

    "img": `Defines an image.
Example:
<img src='image.jpg' alt='Description'>`,

    "input": `Defines an input control.
Example:
<input type='text' placeholder='Enter text here'>`,

    "ins": `Defines text that has been inserted into a document.
Example:
<p>This is <ins>inserted text</ins>.</p>`,

    "kbd": `Defines keyboard input.
Example:
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>`,

    "label": `Defines a label for an <input> element.
Example:
<label for='name'>Name:</label>
<input type='text' id='name'>`,

    "legend": `Defines a caption for a <fieldset> element.
Example:
<fieldset>
    <legend>Personal Information</legend>
    <label for='name'>Name:</label>
    <input type='text' id='name'>
</fieldset>`,

    "li": `Defines a list item.
Example:
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`,

    "link": `Defines the relationship between a document and an external resource (most used to link to stylesheets).
Example:
<link rel='stylesheet' href='styles.css'>`,

    "main": `Defines the main content of a document.
Example:
<main>
    <h1>Main Content</h1>
    <p>This is the main content.</p>
</main>`,

    "map": `Defines an image map.
Example:
<img src='map.jpg' usemap='#image-map'>
<map name='image-map'>
    <area shape='rect' coords='34,44,270,350' href='https://www.example.com' alt='Example'>
</map>`,

    "mark": `Defines marked/highlighted text.
Example:
<p>This is <mark>highlighted</mark> text.</p>`,

    "meta": `Defines metadata about an HTML document.
Example:
<meta charset='UTF-8'>`,

    "meter": `Defines a scalar measurement within a known range (e.g., disk usage).
Example:
<meter min='0' max='100' value='60'>60%</meter>`,

    "nav": `Defines navigation links.
Example:
<nav>
    <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
    </ul>
</nav>`,

    "noscript": `Defines an alternate content for users that have disabled scripts.
Example:
<noscript>
    <p>Your browser does not support JavaScript!</p>
</noscript>`,

    "object": `Defines an embedded object.
Example:
<object data='movie.mp4' width='600' height='400'></object>`,

    "ol": `Defines an ordered list.
Example:
<ol>
    <li>First item</li>
    <li>Second item</li>
</ol>`,

    "optgroup": `Defines a group of related options in a drop-down list.
Example:
<select>
    <optgroup label='Fruits'>
        <option value='apple'>Apple</option>
        <option value='banana'>Banana</option>
    </optgroup>
</select>`,

    "option": `Defines an option in a drop-down list.
Example:
<select>
    <option value='value1'>Option 1</option>
    <option value='value2'>Option 2</option>
</select>`,

    "output": `Defines the result of a calculation or user action.
Example:
<form oninput='result.value=parseInt(a.value)+parseInt(b.value)'>
    <input type='range' id='a' value='50'>
    <input type='number' id='b' value='50'>
    =<output name='result'>100</output>
</form>`,

    "p": `Defines a paragraph.
Example:
<p>This is a paragraph.</p>`,

    "param": `Defines parameters for an object.
Example:
<object data='movie.mp4' width='600' height='400'>
    <param name='autoplay' value='true'>
</object>`,

    "pre": `Defines preformatted text.
Example:
<pre>
This is preformatted text.
    It preserves spaces and line breaks.
</pre>`,

    "progress": `Represents the progress of a task.
Example:
<progress value='30' max='100'>30%</progress>`,

    "q": `Defines a short quotation.
Example:
<p>She said, <q>Quote here.</q></p>`,

    "rp": `Defines what to show in browsers that do not support Ruby annotations.
Example:
<ruby>
    漢<rp>(</rp><rt>kan</rt><rp>)</rp>
</ruby>`,

    "rt": `Defines an explanation/pronunciation of characters (for Ruby annotations).
Example:
<ruby>
    漢<rt>kan</rt>
</ruby>`,

    "ruby": `Defines a Ruby annotation (used for East Asian typography).
Example:
<ruby>
    漢<rt>kan</rt>
</ruby>`,

    "s": `Defines text that is no longer correct.
Example:
<p>This is <s>strikethrough</s> text.</p>`,

    "samp": `Defines sample output from a computer program.
Example:
<p>Output: <samp>Sample text</samp></p>`,

    "script": `Defines client-side JavaScript.
Example:
<script>
    console.log('Hello, World!');
</script>`,

    "section": `Defines a section in a document.
Example:
<section>
    <h2>Section Title</h2>
    <p>Content of the section.</p>
</section>`,

    "select": `Defines a drop-down list.
Example:
<select>
    <option value='value1'>Option 1</option>
    <option value='value2'>Option 2</option>
</select>`,

    "small": `Defines smaller text.
Example:
<p>This is <small>small</small> text.</p>`,

    "source": `Defines multiple media resources for elements like <video> and <audio>.
Example:
<video controls>
    <source src='movie.mp4' type='video/mp4'>
    <source src='movie.ogg' type='video/ogg'>
    Your browser does not support the video tag.
</video>`,

    "span": `Defines a section in a document.
Example:
<span style='color: red;'>This is a span.</span>`,

    "strong": `Defines important text.
Example:
<p>This is <strong>important</strong> text.</p>`,

    "style": `Defines style information for a document.
Example:
<style>
    body { font-family: Arial, sans-serif; }
</style>`,

    "sub": `Defines subscript text.
Example:
<p>H<sub>2</sub>O</p>`,

    "summary": `Defines a heading for a <details> element.
Example:
<details>
    <summary>More Info</summary>
    <p>Here are some details.</p>
</details>`,

    "sup": `Defines superscript text.
Example:
<p>E=mc<sup>2</sup></p>`,

    "table": `Defines a table.
Example:
<table>
    <tr>
        <th>Header</th>
    </tr>
    <tr>
        <td>Data</td>
    </tr>
</table>`,

    "tbody": `Groups the body content in a table.
Example:
<table>
    <thead>
        <tr>
            <th>Header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data</td>
        </tr>
    </tbody>
</table>`,

    "td": `Defines a cell in a table.
Example:
<table>
    <tr>
        <td>Data</td>
    </tr>
</table>`,

    "textarea": `Defines a multi-line text input control.
Example:
<textarea rows='4' cols='50'>Text here...</textarea>`,

    "tfoot": `Groups the footer content in a table.
Example:
<table>
    <tfoot>
        <tr>
            <td>Footer</td>
        </tr>
    </tfoot>
</table>`,

    "th": `Defines a header cell in a table.
Example:
<table>
    <tr>
        <th>Header</th>
    </tr>
</table>`,

    "thead": `Groups the header content in a table.
Example:
<table>
    <thead>
        <tr>
            <th>Header</th>
        </tr>
    </thead>
</table>`,

    "time": `Defines a specific time (e.g., a date/time).
Example:
<time datetime='2024-09-01'>September 1, 2024</time>`,

    "title": `Defines the title of a document.
Example:
<head>
    <title>Page Title</title>
</head>`,

    "tr": `Defines a row in a table.
Example:
<table>
    <tr>
        <td>Data</td>
    </tr>
</table>`,

    "u": `Defines text that should be stylistically different from normal text.
Example:
<p>This is <u>underlined</u> text.</p>`,

    "ul": `Defines an unordered list.
Example:
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`,

    "var": `Defines a variable in programming or mathematical expression.
Example:
<p>The formula is <var>x</var> + <var>y</var> = <var>z</var>.</p>`,

    "video": `Defines a video.
Example:
<video width='320' height='240' controls>
    <source src='movie.mp4' type='video/mp4'>
    Your browser does not support the video tag.
</video>`,

    "wbr": `Defines where in text it would be ok to add a line break.
Example:
<p>Word<wbr>break</p>`,
'default' : 'Enter tag name only like h1'
};



function sendMessage() {
    let userText = userMsg.value.trim().toLowerCase();

    if (userText) {
        displayMessage('user', userText);
        userText.value = ' ';
        const chatReplay = responses[userText] || responses['default'];

        setTimeout(() => {
            displayMessage('chat', chatReplay);
        }, 500)
    }
}

function displayMessage(sender, message) {
    const msgBox = document.createElement('div');
    msgBox.classList.add(sender);
    msgBox.textContent = message;

    messages.appendChild(msgBox);
    messages.scrollTop = messages.scrollHeight;
}

userMsg.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
})